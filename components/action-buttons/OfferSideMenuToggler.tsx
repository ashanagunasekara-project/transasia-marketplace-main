import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";

export default function OfferSideMenuToggler({
  parentClass = "text-portion text-white header-info rbt-special-offprds-offcanvas-activation",
}) {
  return (
    <ModalTriggerButton openModalName="offerSideMenu" className={parentClass}>
      <i className="fa-regular fa-badge-percent" /> <span>Special Offers</span>
    </ModalTriggerButton>
  );
}
