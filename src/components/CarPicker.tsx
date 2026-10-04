import { useEffect, useMemo, useState } from "react";
import { CUSTOM_BUYABLE, DEALER_CARS, DEMOKIT_CARS, DLC_GATED, customName, imgUrl } from "../data/cars.ts";

interface Props {
  onClose: () => void;
  onPick: (code: string) => void;
  /** "add" (garage add) or "swap" (chassis replace). Label only — behavior identical. */
  mode?: "add" | "swap";
}

interface Item {
  code: string;
  name: string;
}

function Thumb({ code }: { code: string }) {
  const [fail, setFail] = useState(false);
  if (fail) return <div className="thumb-fallback mono" aria-hidden="true">{code}</div>;
  return <img src={imgUrl(code)} alt="" loading="lazy" onError={() => setFail(true)} />;
}

export default function CarPicker({ onClose, onPick, mode = "add" }: Props) {
  const [q, setQ] = useState("");
  const [sel, setSel] = useState<string | null>(null);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  const makers = useMemo(
    () => [...new Set(DEALER_CARS.map((c) => c.maker))].sort(),
    [],
  );

  const match = (name: string, code: string) => {
    const s = q.trim().toLowerCase();
    if (!s) return true;
    return name.toLowerCase().includes(s) || code.toLowerCase().includes(s);
  };

  const dealerSections: Array<{ label: string; items: Item[] }> = makers.map((m) => ({
    label: m,
    items: DEALER_CARS.filter((c) => c.maker === m && match(c.name, c.code))
      .map((c) => ({ code: c.code, name: c.name })),
  })).filter((s) => s.items.length > 0);

  const demoItems = DEMOKIT_CARS.filter((c) => match(c.name, c.code))
    .map((c) => ({ code: c.code, name: c.name }));
  const customItems = CUSTOM_BUYABLE.filter((code) => match(customName(code), code))
    .map((code) => ({ code, name: customName(code) }));

  const selName = useMemo(() => {
    if (!sel) return null;
    const d = DEALER_CARS.find((c) => c.code === sel);
    if (d) return d.name;
    const k = DEMOKIT_CARS.find((c) => c.code === sel);
    if (k) return k.name;
    return customName(sel);
  }, [sel]);

  const renderGrid = (items: Item[]) => (
    <div className="car-grid">
      {items.map((it) => (
        <button
          key={it.code}
          type="button"
          className={sel === it.code ? "car-card picked" : "car-card"}
          onClick={() => setSel(it.code)}
          title={it.code}
        >
          <span className="car-thumb"><Thumb code={it.code} /></span>
          <span className="car-name">{it.name}{DLC_GATED.has(it.code) && <span className="dlc-badge" title="Requires DLC entitlement">DLC</span>}</span>
          <span className="car-code mono">{it.code}</span>
        </button>
      ))}
    </div>
  );

  const empty = dealerSections.length === 0 && demoItems.length === 0 && customItems.length === 0;

  return (
    <div className="picker-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="picker" role="dialog" aria-modal="true" aria-label="Browse cars">
        <header className="picker-head">
          <div>
            <h2>Browse cars</h2>
            <p className="picker-sub">Dealer · Demo kit · Custom (buyable)</p>
          </div>
          <input
            autoFocus
            type="search"
            className="picker-search"
            placeholder="Search name or code…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            aria-label="Search cars"
          />
        </header>
        <div className="picker-body">
          {empty && <div className="alert warn">No cars match “{q}”.</div>}
          {dealerSections.map((s) => (
            <section key={s.label}>
              <h3 className="picker-section">{s.label}</h3>
              {renderGrid(s.items)}
            </section>
          ))}
          {demoItems.length > 0 && (
            <section>
              <h3 className="picker-section">DEMO KIT</h3>
              {renderGrid(demoItems)}
            </section>
          )}
          {customItems.length > 0 && (
            <section>
              <h3 className="picker-section">CUSTOM</h3>
              {renderGrid(customItems)}
            </section>
          )}
        </div>
        <footer className="picker-foot">
          <span className="credit">Thumbnails: ddm999.github.io/txr25info - game assets (C) Genki</span>
          <span className="picker-actions">
            <button type="button" className="btn" onClick={onClose}>Cancel</button>
            <button
              type="button"
              className="btn primary"
              disabled={!sel}
              onClick={() => { if (sel) { onPick(sel); onClose(); } }}
            >
              {sel && selName
                ? (mode === "swap" ? `Use ${selName}` : `Add ${selName} to garage`)
                : (mode === "swap" ? "Use selected car" : "Add to garage")}
            </button>
          </span>
        </footer>
      </div>
    </div>
  );
}
