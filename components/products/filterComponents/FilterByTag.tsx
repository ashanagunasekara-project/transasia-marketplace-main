"use client";

const tagFilters = [
  { label: "Featured", icon: "fa-regular fa-truck-fast", tag: "featured" },
  {
    label: "Best Sellers",
    icon: "fa-sharp fa-regular fa-stars",
    tag: "best-seller",
  },
  { label: "Top Rated", icon: "fa-regular fa-badge-check", tag: "top-rated" },
  { label: "New", icon: "fa-regular fa-money-bill", tag: "new" },
  {
    label: "Top Items",
    icon: "fa-sharp fa-regular fa-calendar-days",
    tag: "top-item",
  },
  {
    label: "Popular Item",
    icon: "fa-sharp fa-regular fa-stars",
    tag: "popular",
  },

  { label: "Best Colors", icon: "fa-regular fa-palette", tag: "best-color" },
];

export default function FilterByTag({
  selectedItems,
  onChange,
}: {
  selectedItems: string[];
  onChange: (value: string) => void;
}) {
  const handleTagClick = (tag: string) => {
    onChange(tag);
  };

  return (
    <>
      {tagFilters.map(({ label, icon, tag }, i) => (
        <a
          key={i}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleTagClick(tag);
          }}
          className={selectedItems.includes(tag) ? "active" : ""}
        >
          <i className={icon} /> {label}
        </a>
      ))}
    </>
  );
}
