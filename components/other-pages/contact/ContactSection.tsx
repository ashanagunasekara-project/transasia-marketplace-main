"use client";

import { useState } from "react";
import Contact from "./Contact";
import ContactMap from "./ContactMap";

export default function ContactSection() {
  const [selectedLocationId, setSelectedLocationId] = useState<string>("colombo");

  return (
    <>
      <Contact
        selectedLocationId={selectedLocationId}
        onSelectLocation={setSelectedLocationId}
      />
      <ContactMap
        selectedLocationId={selectedLocationId}
        onSelectLocation={setSelectedLocationId}
      />
    </>
  );
}
