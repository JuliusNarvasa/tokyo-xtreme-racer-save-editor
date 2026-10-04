import type { SaveDoc } from "../lib/types.ts";
import { garageValidation, playerValidation, splitMessages } from "../state.ts";

interface Props {
  doc: SaveDoc;
}

export default function ValidatePanel({ doc }: Props) {
  const pv = playerValidation(doc);
  const gv = garageValidation(doc);
  const all = [...pv.warnings.map((m) => `player: ${m}`), ...gv.warnings];
  const { errors, warns } = splitMessages(all);
  const ok = pv.ok && gv.ok;

  return (
    <section className="panel">
      <h2>06 · Validation</h2>
      <div className={ok ? "pill ok" : "pill bad"}>
        {ok ? (warns.length ? "✓ Saveable with warnings" : "✓ Clean — safe to download") : "✖ Blocked — fix errors"}
      </div>
      {errors.map((m) => <div key={m} className="alert error">⛔ {m}</div>)}
      {warns.map((m) => <div key={m} className="alert warn">⚠️ {m}</div>)}
      {errors.length === 0 && warns.length === 0 && (
        <div className="alert ok">✓ No warnings. Fully legit build.</div>
      )}
    </section>
  );
}
