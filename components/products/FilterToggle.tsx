"use client";

export default function FilterToggle({
  open,
  onToggle,
}: {
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rbt-shop-tool-content rbt-shop-view-var-wrapper">
      <h6 className="rbt-shop-tools-title">
        <button
          type="button"
          className="rbt-filter-button"
          onClick={onToggle}
          aria-expanded={open}
        >
          <i className="fa-sharp fa-regular fa-filter mr--4" />
          <span className="filter-text">
            {open ? "Hide Filter" : "Show Filter"}
          </span>
        </button>
      </h6>
    </div>
  );
}
