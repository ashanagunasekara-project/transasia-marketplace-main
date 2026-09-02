import type { ReactNode } from "react";
import Image from "next/image";
import BlocksSlider from "./BlocksSlider";
import ModalTriggerButton from "../action-buttons/ModalTriggerButton";
import BlocsModal from "../modals/BlocsModal";
import HeroModal from "../modals/HeroModal";
import ShopModal from "../modals/ShopModal";
import BannerModal from "../modals/BannerModal";
import LookbookModal from "../modals/LookbookModal";
import SingleManagedModalLayer from "@/components/common/modals/SingleManagedModalLayer";
import { ModalName, type ModalNameType } from "@/types/modal";

const splashContentModals: { trigger: ModalNameType; modal: ReactNode }[] = [
  {
    trigger: ModalName["rbt-content-modal-1"],
    modal: (
      <BlocsModal
        id="rbt-content-modal-1"
        title="Content Blocks"
        count="100+"
      />
    ),
  },
  {
    trigger: ModalName["rbt-content-modal-2"],
    modal: (
      <HeroModal id="rbt-content-modal-2" title="Hero Banner" count="12+" />
    ),
  },
  {
    trigger: ModalName["rbt-content-modal-3"],
    modal: (
      <ShopModal id="rbt-content-modal-3" title="Shop Blocks" count="09+" />
    ),
  },
  {
    trigger: ModalName["rbt-content-modal-4"],
    modal: <BannerModal id="rbt-content-modal-4" title="Banner" count="11+ " />,
  },
  {
    trigger: ModalName["rbt-content-modal-6"],
    modal: (
      <LookbookModal id="rbt-content-modal-6" title="Lookbook" count="05" />
    ),
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function Blocs() {
  return (
    <div className="splash-section-gap rbt-bg-color-brand-50 overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="rbt-splash-section-title text-center mb--32">
              <span className="subtitle rbt-scroll-trigger fade_in animation-order-1">
                Upgrade Your Interface
              </span>
              <h2 className="rbt-title mb--24">
                <span className="rbt-bold--text rbt-scroll-trigger fade_in animation-order-2">
                  The Biggest Exclusive
                  <br />
                </span>
                <span className="rbt-title-sm-text rbt-scroll-trigger fade_in animation-order-3">
                  Sections Of Collection.
                </span>
              </h2>
            </div>
          </div>
        </div>

        {/* Modal Tabs */}
        <div className="row">
          <div className="col-12">
            <div className="d-flex flex-wrap justify-content-center mt--25">
              <div className="rbt-element-presentation-tab-wrapper rbt-scroll-trigger fade_in animation-order-4">
                <div className="presentation-tab-inner">
                  <ul className="rbt-element-presentation-tab-list">
                    {[
                      {
                        target: ModalName["rbt-content-modal-1"],
                        label: "Content Block",
                        count: "300+",
                      },
                      {
                        target: ModalName["rbt-content-modal-2"],
                        label: "Hero",
                        count: "12+",
                      },
                      {
                        target: ModalName["rbt-content-modal-3"],
                        label: "Shop",
                        count: "9+",
                      },
                      {
                        target: ModalName["rbt-content-modal-4"],
                        label: "Banners",
                        count: "11+",
                      },
                      {
                        target: ModalName["rbt-content-modal-6"],
                        label: "LookBook",
                        count: "05",
                      },
                    ].map((tab) => (
                      <li key={tab.target}>
                        <ModalTriggerButton
                          openModalName={tab.target}
                          className="border-0 bg-transparent p-0 text-start"
                        >
                          <span className="rbt-btn-link">{tab.label}</span>
                          <span className="element-count">{tab.count}</span>
                        </ModalTriggerButton>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Component Slide Area */}
      <div className="splash-element-presentation-wrapper wrapper">
        <span className="rbt-component-box-blur-shape">
          <Image
            alt="Shape"
            src="/assets/images/splash/section/blur-shape.svg"
            width={734}
            height={734}
          />
        </span>
        <span className="rbt-component-box-blur-shape-2">
          <Image
            alt="Shape"
            src="/assets/images/splash/section/blur-shape.svg"
            width={734}
            height={734}
          />
        </span>
        <BlocksSlider />
      </div>
      {splashContentModals.map((item) => (
        <SingleManagedModalLayer key={item.trigger} modalName={item.trigger}>
          {item.modal}
        </SingleManagedModalLayer>
      ))}
    </div>
  );
}
