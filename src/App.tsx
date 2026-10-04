import { useMemo, useState } from "react";
import "./App.css";
import CarEditor from "./components/CarEditor.tsx";
import GarageList from "./components/GarageList.tsx";
import ModeSelect from "./components/ModeSelect.tsx";
import PerkPanel from "./components/PerkPanel.tsx";
import PlayerForm from "./components/PlayerForm.tsx";
import ValidatePanel from "./components/ValidatePanel.tsx";
import { downloadDoc, hex8, loadPickedFile, loadTemplate, previewOutput } from "./components/save-utils.ts";
import type { VerifyResult } from "./lib/txr.ts";
import type { SaveDoc } from "./lib/types.ts";
import { garageValidation, isNgPlus, liftCapsAfterPerks, listCars, playerValidation, readPlayer, summarizeCar, unlockAllPerks, unlockAllShopInventory, unlockEveryPerk, unlockEveryPerkWithReference } from "./state.ts";
import { displayName } from "./data/cars.ts";

export default function App() {
  const [doc, setDoc] = useState<SaveDoc | null>(null);
  const [baseline, setBaseline] = useState<SaveDoc | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [verify, setVerify] = useState<VerifyResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [rev, setRev] = useState(0);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [unlockAll, setUnlockAll] = useState(false);

  const adopt = (d: SaveDoc, name: string, v: VerifyResult) => {
    unlockAllPerks(d);
    if (unlockAll) {
      unlockEveryPerkWithReference(d);
      unlockAllShopInventory(d);
    } else unlockEveryPerk(d);
    liftCapsAfterPerks(d);
    setDoc(d);
    setBaseline(structuredClone(d));
    setFileName(name);
    setVerify(v);
    setError(null);
    setUnlockAll(isNgPlus(d));
    const cars = listCars(d);
    let sel = readPlayer(d).selectedId;
    if (!cars.some((c) => c.id === sel)) sel = cars[0]?.id ?? -1;
    setSelectedId(cars.some((c) => c.id === sel) ? sel : null);
    setRev((r) => r + 1);
  };

  const onFile = async (f: File) => {
    setBusy(true);
    try {
      const { doc: d, verify: v } = await loadPickedFile(f);
      adopt(d, f.name, v);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  };

  const onTemplate = async () => {
    setBusy(true);
    try {
      const { doc: d, verify: v } = await loadTemplate();
      adopt(d, "template.sav", v);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  };

  const mutate = (selectId?: number) => {
    if (selectId !== undefined) setSelectedId(selectId);
    setRev((r) => r + 1);
  };

  const onToggleUnlockAll = (next: boolean) => {
    if (!doc || !baseline) return;
    setUnlockAll(next);
    const d = structuredClone(baseline);
    unlockAllPerks(d);
    if (next) {
      unlockEveryPerkWithReference(d);
      unlockAllShopInventory(d);
    } else unlockEveryPerk(d);
    liftCapsAfterPerks(d);
    setDoc(d);
    setRev((r) => r + 1);
  };

  const preview = useMemo(() => {
    if (!doc) return null;
    try {
      return previewOutput(doc);
    } catch {
      return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doc, rev]);

  const blocked = doc ? !playerValidation(doc).ok || !garageValidation(doc).ok : true;

  const onReset = () => {
    if (!baseline) return;
    const d = structuredClone(baseline);
    unlockAllPerks(d);
    if (unlockAll) {
      unlockEveryPerkWithReference(d);
      unlockAllShopInventory(d);
    } else unlockEveryPerk(d);
    liftCapsAfterPerks(d);
    setDoc(d);
    const cars = listCars(d);
    const sel = readPlayer(d).selectedId;
    setSelectedId(cars.some((c) => c.id === sel) ? sel : (cars[0]?.id ?? null));
    setRev((r) => r + 1);
  };

  return (
    <div className="app">
      <header className="topbar">
        <div>
          <h1>Tokyo Xtreme Racer <span className="neon-cyan">Save Builder</span></h1>
          <p className="sub">Browser-only UserData_00.sav builder/editor: upload-or-template, player stats, garage, per-car tunes, validation, CRC-correct export</p>
          <span className="pill ok ver-badge">Supports game v1.6.0</span>
        </div>
        {preview && (
          <div className="out-meta mono">
            <span>size {preview.size.toLocaleString()} B</span>
            <span>CRC {hex8(preview.verify.stored)}</span>
            <span className={preview.verify.ok ? "neon-cyan" : "neon-pink"}>
              {preview.verify.ok ? "CRC OK" : "CRC FAIL"}
            </span>
          </div>
        )}
      </header>

      <ModeSelect
        fileName={fileName}
        verify={verify}
        error={error}
        busy={busy}
        onFile={onFile}
        onTemplate={onTemplate}
      />

      {doc && (
        <>
          <div className="layout">
            <PlayerForm doc={doc} onMutate={() => mutate()} />
            <PerkPanel unlockAll={unlockAll} ngPlus={isNgPlus(doc)} onToggle={onToggleUnlockAll} />
            <GarageList doc={doc} selectedId={selectedId} onSelect={setSelectedId} onMutate={mutate} />
            {selectedId !== null && (() => {
              try {
                const sel = summarizeCar(doc, selectedId);
                return (
                  <div className="sel-summary">
                    <span>Selected:</span> <b>{displayName(sel.chassis)}</b>
                    <span className="mono dim"> #{sel.id} · {sel.chassis}</span>
                  </div>
                );
              } catch {
                return null;
              }
            })()}
            <CarEditor doc={doc} carId={selectedId} onMutate={() => mutate()} />
            <ValidatePanel doc={doc} />
          </div>

          <section className="panel actions">
            <h2>07 · Export</h2>
            <div className="row">
              <button
                type="button"
                className="btn primary big"
                disabled={blocked}
                onClick={() => downloadDoc(doc)}
                title={blocked ? "Fix red errors first" : "Download UserData_00.sav"}
              >
                ⬇ Download UserData_00.sav
              </button>
              <button type="button" className="btn" onClick={onReset}>
                ↺ Reset to loaded
              </button>
            </div>
            {blocked
              ? <div className="alert error">⛔ Download blocked — resolve red errors above.</div>
              : <div className="alert ok">✓ Ready — warnings are allowed, errors are not.</div>}
          </section>
        </>
      )}

      <footer className="foot">
        <span>CRC recomputed + CMTA re-wrapped on export · untouched bytes echoed verbatim</span>
      </footer>
    </div>
  );
}
