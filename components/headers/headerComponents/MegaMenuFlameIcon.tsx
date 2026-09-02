import { MegaMenuFlameIcon as SvgFlameIcon } from "../../svg-icons";
// Shared flame/fire SVG icon used in mega-menu "Free Express Shipping" tags.
// Previously inlined verbatim (25 lines each) in every mega-menu panel across
// Header4, Header8, Header9, Header9Transparent, Header14, Header15, Header17.

// Each usage had a unique linearGradient id to avoid SVG defs conflicts.
// We use a prop for the id so SVG defs remain unique per instance.
interface MegaMenuFlameIconProps {
  id: string;
}

export default function MegaMenuFlameIcon({ id }: MegaMenuFlameIconProps) {
  return <SvgFlameIcon id={id} />;
}
