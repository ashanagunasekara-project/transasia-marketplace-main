"use client";

import { useEffect, useState } from "react";

export default function DemoSearchForm({
  onSearch,
}: {
  onSearch: (term: string) => void;
}) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(searchTerm);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, onSearch]);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="rbt-input-field has-left-icon">
        <span className="rbt-icon">
          <i className="fa-regular fa-magnifying-glass" />
        </span>
        <input
          id="rbt-demo-search-field"
          type="text"
          placeholder="Search for Demos...."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>
  );
}
