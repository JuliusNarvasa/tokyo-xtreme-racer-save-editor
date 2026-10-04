import { displayName } from "../data/cars.ts";
import type { SaveDoc } from "../lib/types.ts";
import { playerValidation, readPlayer, splitMessages, summarizeCar, writePlayer } from "../state.ts";

interface Props {
  doc: SaveDoc;
  onMutate: () => void;
}

function Num(props: {
  label: string;
  value: number;
  step?: number;
  onCommit: (v: number) => void;
}) {
  return (
    <label className="field">
      <span>{props.label}</span>
      <input
        type="number"
        value={props.value}
        step={props.step ?? 1}
        onChange={(e) => {
          const v = Number(e.target.value);
          if (Number.isFinite(v)) props.onCommit(v);
        }}
      />
    </label>
  );
}

export default function PlayerForm({ doc, onMutate }: Props) {
  const p = readPlayer(doc);
  const res = playerValidation(doc);
  const { errors, warns } = splitMessages(res.warnings);
  const set = (patch: Parameters<typeof writePlayer>[1]) => {
    writePlayer(doc, patch);
    onMutate();
  };
  let selectedName: string | null = null;
  try {
    selectedName = displayName(summarizeCar(doc, p.selectedId).chassis);
  } catch {
    selectedName = null;
  }

  return (
    <section className="panel">
      <h2>02 · Player</h2>
      <div className="grid2">
        <Num label="Cp" value={p.cp} step={100000} onCommit={(v) => set({ cp: v })} />
        <Num label="UpperLimitCP" value={p.upperCp} step={100000} onCommit={(v) => set({ upperCp: v })} />
        <Num label="PP (BP)" value={p.pp} onCommit={(v) => set({ pp: v })} />
        <Num label="Day" value={p.day} onCommit={(v) => set({ day: v })} />
        <Num label="MaxGarageMyCarNum" value={p.garageMax} onCommit={(v) => set({ garageMax: v })} />
        <Num
          label="TotalMileages"
          value={p.totalMileages}
          step={0.1}
          onCommit={(v) => set({ totalMileages: v })}
        />
      </div>
      <div className="counts">
        <span>Cars: <b>{p.carCount}</b> / {p.garageMax}</span>
        <span>MyCarIdSrc: <b>{p.myCarIdSrc}</b></span>
        <span>Selected: <b>#{p.selectedId}</b>{selectedName ? <span> · {selectedName}</span> : null}</span>
      </div>
      {errors.map((m) => <div key={m} className="alert error">⛔ {m}</div>)}
      {warns.map((m) => <div key={m} className="alert warn">⚠️ {m}</div>)}
      {errors.length === 0 && warns.length === 0 && (
        <div className="alert ok">✓ Player values look legit.</div>
      )}
    </section>
  );
}
