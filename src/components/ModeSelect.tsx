import { hex8 } from "./save-utils.ts";
import type { VerifyResult } from "../lib/txr.ts";

interface Props {
  fileName: string | null;
  verify: VerifyResult | null;
  error: string | null;
  busy: boolean;
  onFile: (f: File) => void;
  onTemplate: () => void;
}

export default function ModeSelect({ fileName, verify, error, busy, onFile, onTemplate }: Props) {
  return (
    <section className="panel mode">
      <h2>01 · Load a save</h2>
      <div className="mode-cards">
        <label className="mode-card">
          <span className="mode-title">Upload .sav</span>
          <span className="mode-desc">CMTA-wrapped UserData file from your PC.</span>
          <input
            type="file"
            accept=".sav"
            disabled={busy}
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) onFile(f);
              e.target.value = "";
            }}
          />
        </label>
        <div className="mode-card">
          <span className="mode-title">Start from template</span>
          <span className="mode-desc">Ships with the app as template.sav.</span>
          <button type="button" className="btn primary" disabled={busy} onClick={onTemplate}>
            {busy ? "Loading…" : "Load template"}
          </button>
        </div>
      </div>
      {fileName && (
        <div className="statusbar">
          <span className="file">📁 {fileName}</span>
          {verify && (
            <span className={verify.ok ? "pill ok" : "pill bad"}>
              CRC {verify.ok ? "OK" : "FAIL"} · {hex8(verify.stored)}
            </span>
          )}
        </div>
      )}
      {error && <div className="alert error">⛔ {error}</div>}
    </section>
  );
}
