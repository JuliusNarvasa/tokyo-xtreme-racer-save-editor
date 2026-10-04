interface Props {
  /** Current toggle state. */
  unlockAll: boolean;
  /** Whether the loaded save has completed the final story chapter. */
  ngPlus: boolean;
  /** Apply unlock to the current save (re-runs perk and cap helpers from baseline). */
  onToggle: (next: boolean) => void;
}

export default function PerkPanel({ unlockAll, ngPlus, onToggle }: Props) {
  return (
    <section className="panel">
      <h2>03 · Perks</h2>
      <label className="perk-toggle">
        <input
          type="checkbox"
          checked={unlockAll}
          onChange={(e) => onToggle(e.target.checked)}
        />
        <span>
          <b>Unlock all perks</b>
          <small>
            {ngPlus
              ? "NG+ save detected — every skill-tree perk and the full dealer / tuner inventory are force-unlocked on export."
              : "Fresh save detected — every skill-tree perk is force-acquired and the full dealer / tuner inventory is unlocked. Cap perks (CP / BP / garage) are still applied automatically."}
          </small>
        </span>
      </label>
      <div className="alert ok">
        ✓ Cap perks (CP / BP / garage extension) are always force-acquired, regardless of this toggle.
        When the toggle is on, every dealer / demokit / buyable custom chassis and every engine swap is added to the shop inventory.
      </div>
    </section>
  );
}
