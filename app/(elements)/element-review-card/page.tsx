import { Metadata } from "next";
import ReviewCardOne from "@/components/elements/element-review-card/ReviewCardOne";
import ReviewCardTwo from "@/components/elements/element-review-card/ReviewCardTwo";
import ElementsHero from "@/components/elements/ElementsHero";
export const metadata: Metadata = {
  title:
    "Element Review Card | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function ElementReviewCardPage() {
  return (
    <>
      <>
        <ElementsHero
          title={
            <>
              Exclusive <span>Review Card</span>
            </>
          }
        />
        <ReviewCardOne />
        <ReviewCardTwo />
      </>
    </>
  );
}
