import { useState } from "react";
import { displayName, engineFormat } from "../data/cars.ts";
import { ENGINE_SWAPS } from "../data/engines.ts";
import { TUNE_KINDS, TUNE_LEVELS } from "../data/tunes.ts";
import type { SaveDoc } from "../lib/types.ts";
import {
  carValidation,
  setCarChassis,
  setCarEngine,
  setCarMileage,
  setCarTune,
  splitMessages,
  summarizeCar,
} from "../state.ts";
import CarPicker from "./CarPicker.tsx";

interface Props {
  doc: SaveDoc;
  carId: number | null;
  onMutate: () => void;
}

export default function CarEditor({ doc, carId, onMutate }: Props) {
  const [pickerOpen, setPickerOpen] = useState(false);

  if (carId === null) {
    return (
      <section className="panel">
        <h2>05 · Car editor</h2>
        <div className="alert warn">⚠️ Select a car in the garage to edit it.</div>
      </section>
    );
  }
  let car;
  try {
    car = summarizeCar(doc, carId);
  } catch {
    return (
      <section className="panel">
        <h2>05 · Car editor</h2>
        <div className="alert error">⛔ Car {carId} no longer exists.</div>
      </section>
    );
  }
  const res = carValidation(doc, carId);
  const { errors, warns } = splitMessages(res.warnings);
  const fullName = displayName(car.chassis);

  return (
    <section className="panel">
      <h2>05 · {fullName} <span className="mono dim">#{car.id}</span></h2>
      <div className="grid2">
        <div className="field">
          <span>Chassis (CarNameId)</span>
          <div className="chassis-current">
            <div className="car-full">{fullName}</div>
            <div className="car-code mono">{car.chassis}</div>
          </div>
          <button type="button" className="btn" onClick={() => setPickerOpen(true)}>
            🔄 Change car…
          </button>
        </div>
        <label className="field">
          <span>Engine (EngineNameId)</span>
          <select
            value={car.isReplaced ? car.engine : "Stock"}
            onChange={(e) => { setCarEngine(doc, carId, e.target.value); onMutate(); }}
          >
            <option value="Stock">Stock · {engineFormat(car.chassis) ?? car.chassis}</option>
            {ENGINE_SWAPS.map((s) => (
              <option key={s.id} value={s.id}>{s.donor ? `${s.name} · ${s.donor}` : s.name}</option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>Mileages (km)</span>
          <input
            type="number"
            step={0.1}
            value={car.mileage}
            onChange={(e) => {
              const v = Number(e.target.value);
              if (Number.isFinite(v)) { setCarMileage(doc, carId, v); onMutate(); }
            }}
          />
        </label>
        <div className="field">
          <span>Swap active</span>
          <b className={car.isReplaced ? "neon-pink" : "neon-cyan"}>
            {car.isReplaced ? "YES" : "NO"}
          </b>
        </div>
      </div>
      {pickerOpen && (
        <CarPicker
          mode="swap"
          onClose={() => setPickerOpen(false)}
          onPick={(code) => { setCarChassis(doc, carId, code); onMutate(); }}
        />
      )}
      <h3>Tuning (TuneInfos)</h3>
      <div className="grid2">
        {TUNE_KINDS.map((spec) => {
          const cur = car.tunes[spec.kind];
          const tuner = (TUNE_KINDS.find((s) => s.kind === spec.kind)?.boughtMax ?? 99) <
            (TUNE_LEVELS.indexOf(cur));
          return (
            <label key={spec.kind} className="field">
              <span>{spec.kind} <small>(max {spec.maxLevel})</small>{tuner && " 🔧"}</span>
              <select
                value={cur}
                onChange={(e) => {
                  setCarTune(doc, carId, spec.kind, e.target.value as typeof cur);
                  onMutate();
                }}
              >
                {TUNE_LEVELS.slice(0, spec.maxLevel + 1).map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </label>
          );
        })}
      </div>
      {errors.map((m) => <div key={m} className="alert error">⛔ {m}</div>)}
      {warns.map((m) => <div key={m} className="alert warn">⚠️ {m}</div>)}
      {errors.length === 0 && warns.length === 0 && (
        <div className="alert ok">✓ {fullName} (#{car.id}) passes validation.</div>
      )}
    </section>
  );
}
