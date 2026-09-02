"use client";

export default function FilterCollapseToggle({
  open,
  onToggle,
  controlsId = "rbt-collapse-area",
  className = "rbt-filter-button",
}: {
  open: boolean;
  onToggle: () => void;
  controlsId?: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={onToggle}
      aria-expanded={open}
      aria-controls={controlsId}
    >
      <i className="fa-sharp fa-regular fa-filter mr--4" />
      <span className="filter-text">{open ? "Hide Filter" : "Show Filter"}</span>
    </button>
  );
}

