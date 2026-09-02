import DescriptionTab1 from "./DescriptionTab1";
import SuggestedProducts from "../others/SuggestedProducts";
import { suggestedProducts } from "@/data/products/others";

export default function Description3() {
  return (
    <div className="rbt-component-area">
      <div className="container">
        <div className="row row--12 mt_dec--24">
          <div className="col-xl-10 mt--24">
            <DescriptionTab1 />
          </div>
          <div className="col-xl-2 col-lg-12 mt--24">
            <div className="row row--12">
              <div className="col-12 text-center">
                <h5 className="title mb--0">
                  <span className="rbt-bold--text">You May Also Like</span>
                </h5>
              </div>
            </div>
            <div className="row row--12 rbt-mobile-row">
              <SuggestedProducts products={suggestedProducts} />
            </div>
            {/* End Card Area */}
          </div>
        </div>
      </div>
    </div>
  );
}
