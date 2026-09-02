import Tooltip from "@/components/common/ui/Tooltip";

export default function ColorSelect3() {
  return (
    <div className="rbt-info-wrapper d-flex mt--24">
      <div className="prd-info-section">
        <div className="prd-id-text">
          <p className="text-bold rbt-variation-label">
            Color: <span className="rbt-text">No Selection</span>
          </p>
          <div
            className="rbt-color-select-area"
            data-variation_key="rbt_product_attribute_color"
            data-type="list"
          >
            <ul className="rbt-switcher-root rbt-switcher-color-list rbt-switcher-color-list-lg product-switcher-activation">
              <li>
                <Tooltip content="Black" placement="top">
                  <a
                    className="rbt-switcher--color tooltips"
                    href="#0"
                    data-value="#000000"
                    data-bs-original-title=""
                    title=""
                  >
                    <div
                      className="rbt-color-circle"
                      style={{ backgroundColor: "#000000" }}
                    />
                  </a>
                </Tooltip>
              </li>
              <li>
                <Tooltip content="Deep Red" placement="top">
                  <a
                    className="rbt-switcher--color tooltips"
                    href="#0"
                    data-value="#8A1D2F"
                    data-bs-original-title=""
                    title=""
                  >
                    <div
                      className="rbt-color-circle"
                      style={{ backgroundColor: "#8A1D2F" }}
                    />
                  </a>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
