import Image from "next/image";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";
import AddPaymentMethod from "@/components/modals/AddPaymentMethod";
import SingleManagedModalLayer from "@/components/common/modals/SingleManagedModalLayer";
import { ModalName } from "@/types/modal";

export default function PaymentMethods() {
  return (
    <>
      <div className="rbt-profile-content-area rbt-scrollable-content">
        <div className="rbt-component-section-title rbt-gap--4 mb--32 p-0 border-0 text-center">
          <h2 className="rbt-title mb--8">
            <span className="rbt-text-bold">Payment Methods</span>
          </h2>
          <p className="description mx-auto">
            Manage your saved payment methods for a faster checkout experience.
            Add, edit, or remove your credit cards and other payment options.
          </p>
        </div>
        <div className="row row--12 mt_dec--24">
          <div className="col-12 col-md-6 col-xxl-4 mt--24">
            <div className="rbt-card rbt-payment-method-card pt--0">
              <div className="rbt-card-body">
                <div className="d-flex align-items-start justify-content-between mb-4">
                  <Image
                    className="rbt-payment-method-img"
                    alt="Mastercard"
                    src="/assets/images/dashboard/mastercard.svg"
                    width={58}
                    height={40}
                  />
                  <div className="rbt-badge rbt-badge-md">Primary</div>
                </div>
                <p className="b1 mb--4">**** **** **** 8843</p>
                <p className="rbt-text-color-gray-400">Expiration 07/26</p>
              </div>
              <div className="rbt-card-footer d-flex rbt-gap--8">
                <button className="rbt-btn rbt-btn-xs radius-round-6">
                  Edit
                </button>
                <button className="rbt-btn rbt-btn-xs radius-round-6">
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xxl-4 mt--24">
            <div className="rbt-card rbt-payment-method-card pt--0">
              <div className="rbt-card-body">
                <div className="d-flex align-items-start justify-content-between mb-4">
                  <Image
                    className="rbt-payment-method-img"
                    alt="Visa Card"
                    src="/assets/images/dashboard/visa-card.svg"
                    width={58}
                    height={40}
                  />
                  <button className="rbt-set-card-primary-btn">
                    Set as primary
                  </button>
                </div>
                <p className="b1 mb--4">**** **** **** 2547</p>
                <p className="rbt-text-color-danger">Expired 08/23</p>
              </div>
              <div className="rbt-card-footer d-flex rbt-gap--8">
                <button className="rbt-btn rbt-btn-xs radius-round-6">
                  Edit
                </button>
                <button className="rbt-btn rbt-btn-xs radius-round-6">
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xxl-4 mt--24">
            <div className="rbt-card rbt-payment-method-card rbt-add-payment-method-card h-100 pt--0">
              <div className="rbt-card-footer h-100 d-flex rbt-gap--8 align-items-center justify-content-center position-relative">
                <ModalTriggerButton
                  openModalName={ModalName.addPaymentMethodModal}
                  className="rbt-btn rbt-btn-xs radius-round-6 stretched-link d-flex align-items-center justify-content-center border-0"
                >
                  <i className="fa-regular fa-plus mr--4" />
                  Add New Method
                </ModalTriggerButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SingleManagedModalLayer modalName={ModalName.addPaymentMethodModal}>
        <AddPaymentMethod />
      </SingleManagedModalLayer>
    </>
  );
}
