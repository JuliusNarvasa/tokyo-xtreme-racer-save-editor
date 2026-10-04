import { useEffect, useState } from "react";
import { displayName, engineLabel } from "../data/cars.ts";
import type { SaveDoc } from "../lib/types.ts";
import {
  addCar,
  duplicateCar,
  listCars,
  readPlayer,
  removeCar,
  tuneSummary,
} from "../state.ts";
import CarPicker from "./CarPicker.tsx";

interface Props {
  doc: SaveDoc;
  selectedId: number | null;
  onSelect: (id: number) => void;
  onMutate: (selectId?: number) => void;
}

const PAGE_SIZE = 10;

export default function GarageList({ doc, selectedId, onSelect, onMutate }: Props) {
  const cars = listCars(doc);
  const p = readPlayer(doc);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);

  const pageCount = Math.max(1, Math.ceil(cars.length / PAGE_SIZE));
  const safePage = Math.min(Math.max(page, 0), pageCount - 1);

  // Clamp page when garage shrinks/grows.
  useEffect(() => {
    setPage((prev) => Math.min(Math.max(prev, 0), pageCount - 1));
  }, [pageCount, cars.length]);

  // Jump to the page holding the current selection.
  useEffect(() => {
    if (selectedId === null) return;
    const idx = cars.findIndex((c) => c.id === selectedId);
    if (idx >= 0) setPage(Math.floor(idx / PAGE_SIZE));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedId]);

  const visible = cars.slice(safePage * PAGE_SIZE, safePage * PAGE_SIZE + PAGE_SIZE);
  const from = cars.length === 0 ? 0 : safePage * PAGE_SIZE + 1;
  const to = Math.min(cars.length, safePage * PAGE_SIZE + PAGE_SIZE);

  return (
    <section className="panel">
      <h2>04 · Garage ({cars.length}/{p.garageMax})</h2>
      <div className="garage-add">
        <button type="button" className="btn primary" onClick={() => setOpen(true)}>
          🔍 Browse cars…
        </button>
      </div>
      {open && (
        <CarPicker
          onClose={() => setOpen(false)}
          onPick={(code) => {
            const id = addCar(doc, code, selectedId);
            onMutate(id);
          }}
        />
      )}
      {cars.length === 0 && <div className="alert warn">⚠️ Garage is empty.</div>}
      <div className="table-wrap">
        <table className="garage">
          <thead>
            <tr><th>ID</th><th>Name</th><th>Engine</th><th>km</th><th>Tunes</th></tr>
          </thead>
          <tbody>
            {visible.map((c) => (
              <tr
                key={c.id}
                className={c.id === selectedId ? "sel" : ""}
                onClick={() => onSelect(c.id)}
              >
                <td className="mono">{c.id}</td>
                <td>
                  <div className="car-full">{displayName(c.chassis)}{c.id === p.selectedId ? " ★" : ""}</div>
                  <div className="car-code mono">{c.chassis}</div>
                </td>
                <td className="mono">{engineLabel(c.engine, c.chassis, c.isReplaced)}</td>
                <td className="mono">{c.mileage.toFixed(1)}</td>
                <td>{tuneSummary(c.tunes)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {cars.length > 0 && (
        <div className="pager">
          <button
            type="button"
            className="btn"
            disabled={safePage <= 0}
            onClick={() => setPage(safePage - 1)}
          >
            ← Prev
          </button>
          <span className="pager-info mono">
            {from}–{to} of {cars.length} · Page {safePage + 1}/{pageCount}
          </span>
          <button
            type="button"
            className="btn"
            disabled={safePage >= pageCount - 1}
            onClick={() => setPage(safePage + 1)}
          >
            Next →
          </button>
        </div>
      )}
      <div className="row">
        <button
          type="button"
          className="btn"
          disabled={selectedId === null}
          onClick={() => {
            if (selectedId !== null) {
              const id = duplicateCar(doc, selectedId);
              onMutate(id);
            }
          }}
        >
          Duplicate
        </button>
        <button
          type="button"
          className="btn danger"
          disabled={selectedId === null || cars.length <= 1}
          title={cars.length <= 1 ? "Keep at least one car (new cars clone from selection)" : "Remove selected car"}
          onClick={() => {
            if (selectedId !== null) {
              removeCar(doc, selectedId);
              onMutate(listCars(doc)[0]?.id ?? undefined);
            }
          }}
        >
          Remove
        </button>
      </div>
    </section>
  );
}
