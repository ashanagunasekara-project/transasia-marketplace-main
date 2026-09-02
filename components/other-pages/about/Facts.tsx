import { aboutFacts } from "@/data/aboutFacts";
import Counter from "@/components/common/ui/Counter";
export default function Facts() {
  return (
    <div className="rbt-component-area rbt-counterup-area rbt-section-gap2Top rbt-section-gap2Bottom rbt-bg-color-gray-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="rbt-counterup-wrapper">
              {aboutFacts.map((item, index) => (
                <div key={index} className="rbt-counterup-single">
                  <div className="inner">
                    <h2
                      className={`rbt-counterup${item.hasFormattingMark ? " has-formatting-mark" : ""}`}
                      data-text={item.dataText}
                    >
                      <Counter max={item.count} />
                    </h2>
                    <p className="rbt-text-color-gray-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
