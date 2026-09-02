"use client";
import { useState, useRef, useEffect } from "react";

const currencies = [
  { name: "$ USD", value: "usd" },
  { name: "£ GBP", value: "gbp" },
  { name: "€ EUR", value: "eur" },
];

export default function CurrencySelect({
  parentClass = "rbt-dropdown-menu rbt-dropdown-menu-elastic currency-menu",
}) {
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef(null);

  const handleSelect = (currency: (typeof currencies)[0]) => {
    setSelectedCurrency(currency);
    setIsOpen(false);
  };

  // ✅ Detect click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        parentRef.current &&
        !(parentRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <ul ref={parentRef} className={parentClass}>
      <li className={`has-child-menu ${isOpen ? "active" : ""}`}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
        >
          <span className="menu-item">{selectedCurrency.name}</span>
          <i className="right-icon fa-regular fa-chevron-down" />
        </a>

        {isOpen && (
          <ul className="sub-menu hover-reverse">
            {currencies.map((currency) => (
              <li key={currency.value}>
                <a
                  href="#"
                  className={
                    selectedCurrency.value === currency.value ? "active" : ""
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    handleSelect(currency);
                  }}
                >
                  <span className="menu-item">{currency.name}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    </ul>
  );
}
