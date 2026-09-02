"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const languages = [
  {
    name: "English",
    value: "eng",
    image: "/assets/images/icons/eng.webp",
  },
  {
    name: "Danish",
    value: "den",
    image: "/assets/images/icons/den.webp",
  },
  {
    name: "Italic",
    value: "italic",
    image: "/assets/images/icons/italic.webp",
  },
];

export default function LanguageSelect({
  parentClass = "rbt-dropdown-menu rbt-dropdown-menu-elastic switcher-language",
}) {
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);
  const parent = useRef(null);

  const handleSelect = (lang: (typeof languages)[0]) => {
    setSelectedLang(lang);
    setIsOpen(false);
  };

  // ✅ Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        parent.current &&
        !(parent.current as HTMLElement).contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <ul ref={parent} className={parentClass}>
      <li className={`has-child-menu ${isOpen ? "active" : ""}`}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
        >
          <Image
            className="left-image"
            alt="Language Icon"
            src={selectedLang.image}
            width={160}
            height={160}
          />
          <span className="menu-item">{selectedLang.name}</span>
          <i className="right-icon fa-regular fa-chevron-down" />
        </a>

        {isOpen && (
          <ul className="sub-menu">
            {languages.map((lang) => (
              <li key={lang.value}>
                <a
                  href="#"
                  className={selectedLang.value === lang.value ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSelect(lang);
                  }}
                >
                  <Image
                    className="left-image"
                    alt={`${lang.name} Icon`}
                    src={lang.image}
                    width={160}
                    height={160}
                  />
                  <span className="menu-item">{lang.name}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    </ul>
  );
}
