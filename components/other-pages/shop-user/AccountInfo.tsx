import ModalTriggerButton from "../../action-buttons/ModalTriggerButton";
import BasicInfoEdit from "@/components/modals/BasicInfoEdit";
import ContactInfoEdit from "@/components/modals/ContactInfoEdit";
import PasswordEdit from "@/components/modals/PasswordEdit";
import DeliveryEdit from "@/components/modals/DeliveryEdit";
import AlternativeDelivery from "@/components/modals/AlternativeDelivery";
import SingleManagedModalLayer from "@/components/common/modals/SingleManagedModalLayer";
import { ModalName } from "@/types/modal";

export default function AccountInfo() {
  return (
    <div className="rbt-profile-content-area">
      <div className="row row--12 mt_dec--24">
        <div className="col-12 mt--24">
          <div className="rbt-component-section-title rbt-gap--4 mb--0 p-0 border-0">
            <h2 className="rbt-title mb--0">
              <span className="rbt-text-bold">Personal Information</span>
            </h2>
          </div>
        </div>
      </div>
      <hr className="mt--20 mb--16" />
      <div className="rbt-scrollable-content hide-scrollbar">
        <div className="rbt-single-info mb--24">
          <div className="rbt-single-info-header d-flex justify-content-between align-items-center mb--12 pt--4">
            <h6 className="mb--0">Basic Info</h6>
            <ModalTriggerButton
              className="rbt-btn rbt-btn-sm rbt-btn-secondary"
              openModalName={ModalName.basicInfoEditModal}
            >
              <i className="fa-light fa-pen-to-square mr--4" />
              Edit
            </ModalTriggerButton>
          </div>
          <p className="b1 rbt-text-medium mb--8">Johnson Charle</p>
          <p className="b1 mb--8">July 05, 1994</p>
          <p className="b1 mb--0">English</p>
        </div>
        <hr />
        <div className="rbt-single-info mb--24">
          <div className="rbt-single-info-header d-flex justify-content-between align-items-center mb--12 pt--4">
            <h6 className="mb--0">Contact Info</h6>
            <ModalTriggerButton
              className="rbt-btn rbt-btn-sm rbt-btn-secondary"
              openModalName={ModalName.contactInfoEditModal}
            >
              <i className="fa-light fa-pen-to-square mr--4" />
              Edit
            </ModalTriggerButton>
          </div>
          <p className="b1 mb--8">johnson.charle99@gmail.com</p>
          <p className="b1 mb--0">+800300-353-569</p>
        </div>
        <hr />
        <div className="rbt-single-info mb--24">
          <div className="rbt-single-info-header d-flex justify-content-between align-items-center mb--12 pt--4">
            <h6 className="mb--0">Password</h6>
            <ModalTriggerButton
              className="rbt-btn rbt-btn-sm rbt-btn-secondary"
              openModalName={ModalName.passwordEditModal}
            >
              <i className="fa-light fa-pen-to-square mr--4" />
              Edit
            </ModalTriggerButton>
          </div>
          <p className="b1 mb--8">**********</p>
        </div>
        <hr />
        <div className="rbt-single-info mb--24">
          <div className="rbt-single-info-header d-flex justify-content-between align-items-center mb--12 pt--4">
            <h6 className="mb--0">Delivery Address</h6>
            <ModalTriggerButton
              className="rbt-btn rbt-btn-sm rbt-btn-secondary"
              openModalName={ModalName.deliveryAddressEditModal}
            >
              <i className="fa-light fa-pen-to-square mr--4" />
              Edit
            </ModalTriggerButton>
          </div>
          <p className="b1 mb--8">Lawrence Moreno 935-9940,</p>
          <p className="b1 mb--0">Tortor St, Santa Rosa, USA</p>
        </div>
        <hr />
        <div className="rbt-single-info mb--24">
          <div className="rbt-single-info-header d-flex justify-content-between align-items-center mb--12 pt--4">
            <h6 className="mb--0">Alternate Delivery Address</h6>
            <ModalTriggerButton
              className="rbt-btn rbt-btn-sm rbt-btn-secondary"
              openModalName={ModalName.alternateDeliveryAddressEditModal}
            >
              <i className="fa-light fa-pen-to-square mr--4" />
              Edit
            </ModalTriggerButton>
          </div>
          <p className="b1 mb--8">Nyssa Vazquez 511-5762 At Rd,</p>
          <p className="b1 mb--0">Chelsea, USA</p>
        </div>
        <hr />
        <div className="rbt-single-info mb--24">
          <div className="rbt-single-info-header d-flex justify-content-between align-items-center mb--12 pt--4">
            <h6 className="mb--0">Delete Account</h6>
          </div>
          <p className="b1 mb--8">
            Once you delete your account, your public profile will be
            deactivated instantly. If you decide to restore it within 14 days,
            simply sign in with your email and password, and we&apos;ll provide
            a reactivation link.
          </p>
          <button className="rbt-btn rbt-btn-sm rbt-bg-color-danger mt--16 shadow-none">
            <i className="fa-regular fa-trash-can-slash mr--4" />
            Delete Account
          </button>
        </div>
      </div>
      <SingleManagedModalLayer modalName={ModalName.basicInfoEditModal}>
        <BasicInfoEdit />
      </SingleManagedModalLayer>
      <SingleManagedModalLayer modalName={ModalName.contactInfoEditModal}>
        <ContactInfoEdit />
      </SingleManagedModalLayer>
      <SingleManagedModalLayer modalName={ModalName.passwordEditModal}>
        <PasswordEdit />
      </SingleManagedModalLayer>
      <SingleManagedModalLayer modalName={ModalName.deliveryAddressEditModal}>
        <DeliveryEdit />
      </SingleManagedModalLayer>
      <SingleManagedModalLayer
        modalName={ModalName.alternateDeliveryAddressEditModal}
      >
        <AlternativeDelivery />
      </SingleManagedModalLayer>
    </div>
  );
}
