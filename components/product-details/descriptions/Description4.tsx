import DescriptionTab1 from "./DescriptionTab1";

export default function Description4({
  parentClass = "rbt-component-area rbt-section-gap pt--0",
}) {
  return (
    <div className={parentClass}>
      <div className="container">
        <div className="row row--12 mt_dec--24">
          <div className="col-xl-12 mt--24">
            <DescriptionTab1 />
          </div>
        </div>
      </div>
    </div>
  );
}
