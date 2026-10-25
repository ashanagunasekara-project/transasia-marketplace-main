"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Tooltip from "@/components/common/ui/Tooltip";
import {
  getAllDistricts,
  getCitiesForDistrict,
  findLocationByPostalCode,
} from "@/data/sriLankaLocations";

export default function CheckoutShippingForm() {
  const router = useRouter();

  const [validated, setValidated] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("00100");
  const [sameAsDelivery, setSameAsDelivery] = useState(true);

  // Sri Lanka District & City hierarchy
  const districts = getAllDistricts();
  const [selectedDistrictId, setSelectedDistrictId] = useState("colombo");
  const [availableCities, setAvailableCities] = useState<
    { id: string; name: string; postalCode?: string | null }[]
  >([]);
  const [selectedCity, setSelectedCity] = useState("Colombo 01");

  // Load prior checkout details from step 1 & 2
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const storedDelivery = localStorage.getItem("transasia_checkout_delivery");
        if (storedDelivery) {
          const parsed = JSON.parse(storedDelivery);
          if (parsed.postcode) {
            setPostcode(parsed.postcode);
            // Auto match district and city from the postal code if available
            const loc = findLocationByPostalCode(parsed.postcode);
            if (loc) {
              setSelectedDistrictId(loc.districtId);
              setSelectedCity(loc.city);
            }
          }
          if (parsed.districtId) {
            setSelectedDistrictId(parsed.districtId);
          } else if (parsed.district) {
            const foundDist = districts.find(
              (d) => d.name.toLowerCase() === parsed.district.toLowerCase()
            );
            if (foundDist) setSelectedDistrictId(foundDist.id);
          }
          if (parsed.city) setSelectedCity(parsed.city);
        }

        const storedShipping = localStorage.getItem("transasia_checkout_shipping");
        if (storedShipping) {
          const parsed = JSON.parse(storedShipping);
          if (parsed.firstName) setFirstName(parsed.firstName);
          if (parsed.lastName) setLastName(parsed.lastName);
          if (parsed.email) setEmail(parsed.email);
          if (parsed.mobile) setMobile(parsed.mobile);
          if (parsed.address) setAddress(parsed.address);
          if (parsed.sameAsDelivery !== undefined) setSameAsDelivery(parsed.sameAsDelivery);
        }
      } catch (err) {
        console.error("Failed to load stored shipping state:", err);
      }
    }
  }, []);

  // Update available cities when district changes
  useEffect(() => {
    const cities = getCitiesForDistrict(selectedDistrictId);
    setAvailableCities(cities);
    if (cities.length > 0) {
      const exists = cities.find(
        (c) => c.name.toLowerCase() === selectedCity.toLowerCase()
      );
      if (!exists) {
        setSelectedCity(cities[0].name);
      }
    }
  }, [selectedDistrictId]);

  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const distId = e.target.value;
    setSelectedDistrictId(distId);
    const cities = getCitiesForDistrict(distId);
    setAvailableCities(cities);
    if (cities.length > 0) {
      setSelectedCity(cities[0].name);
    }
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const cityName = e.target.value;
    setSelectedCity(cityName);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    setValidated(true);

    const form = event.currentTarget;
    const isFormValid = form.checkValidity();

    // Sri Lanka phone number validation
    const isMobileValid = /^(?:0|94|\+94)?(?:7[01245678]\d{7})$/.test(
      mobile.replace(/\s+/g, "")
    );

    if (!isFormValid || !isMobileValid) {
      return;
    }

    const selectedDistrictObj = districts.find((d) => d.id === selectedDistrictId);

    const shippingData = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      mobile: mobile.trim(),
      district: selectedDistrictObj?.name || "Colombo",
      districtId: selectedDistrictId,
      city: selectedCity,
      postcode: postcode.trim(),
      address: address.trim(),
      sameAsDelivery,
      updatedAt: new Date().toISOString(),
    };

    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("transasia_checkout_shipping", JSON.stringify(shippingData));

        // Sync with delivery storage for summary components
        const existingDelivery = localStorage.getItem("transasia_checkout_delivery");
        const deliveryParsed = existingDelivery ? JSON.parse(existingDelivery) : {};
        localStorage.setItem(
          "transasia_checkout_delivery",
          JSON.stringify({
            ...deliveryParsed,
            district: selectedDistrictObj?.name || "Colombo",
            districtId: selectedDistrictId,
            city: selectedCity,
          })
        );
      } catch (err) {
        console.error("Failed to persist shipping state:", err);
      }
    }

    // Proceed to Step 4: Secure Payment
    router.push("/checkout-payment");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`needs-validation d-block mt--12 ${validated ? "was-validated" : ""}`}
        noValidate
      >
        <div className="row row-cols-1 row-cols-sm-2 g-3 g-sm-3 mb-4 mb_sm--12">
          {/* First Name */}
          <div className="col">
            <label htmlFor="shipping-fn" className="form-label fw-semibold">
              First name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="shipping-fn"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              placeholder="e.g. Ashan"
              style={{ fontSize: "14px", height: "50px" }}
            />
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">Please enter your first name.</div>
          </div>

          {/* Last Name */}
          <div className="col">
            <label htmlFor="shipping-ln" className="form-label fw-semibold">
              Last name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="shipping-ln"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              placeholder="e.g. Gunasekara"
              style={{ fontSize: "14px", height: "50px" }}
            />
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">Please enter your last name.</div>
          </div>

          {/* Email Address */}
          <div className="col">
            <label htmlFor="shipping-email" className="form-label fw-semibold">
              Email address <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control form-control-lg"
              id="shipping-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="name@example.com"
              style={{ fontSize: "14px", height: "50px" }}
            />
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">Please enter a valid email address.</div>
          </div>

          {/* Mobile Number */}
          <div className="col">
            <label htmlFor="shipping-mobile" className="form-label fw-semibold">
              Mobile number <span className="text-danger">*</span>
            </label>
            <input
              type="tel"
              className="form-control form-control-lg"
              id="shipping-mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              pattern="^(?:0|94|\+94)?(?:7[01245678]\d{7})$"
              placeholder="077 123 4567"
              style={{ fontSize: "14px", height: "50px" }}
            />
            <div className="valid-feedback">Valid Sri Lanka mobile!</div>
            <div className="invalid-feedback">
              Please enter a valid Sri Lankan mobile number (e.g. 0771234567).
            </div>
          </div>

          {/* District (Sri Lanka) - Font size matched to form inputs */}
          <div className="col">
            <label htmlFor="shipping-district" className="form-label fw-semibold">
              District <span className="text-danger">*</span>
            </label>
            <select
              id="shipping-district"
              className="form-select shipping-select-custom"
              value={selectedDistrictId}
              onChange={handleDistrictChange}
              required
            >
              {districts.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name} District
                </option>
              ))}
            </select>
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* City / Area (Sri Lanka Mode) - Font size matched to form inputs */}
          <div className="col">
            <label htmlFor="shipping-city" className="form-label fw-semibold">
              City / Area <span className="text-danger">*</span>
            </label>
            <select
              id="shipping-city"
              className="form-select shipping-select-custom"
              value={selectedCity}
              onChange={handleCityChange}
              required
            >
              {availableCities.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name} {c.postalCode ? `(${c.postalCode})` : ""}
                </option>
              ))}
            </select>
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">Please select a city.</div>
          </div>

          {/* Postcode - Frozen / Read-Only from Step 1 (Figure 04 & 05) */}
          <div className="col">
            <div className="d-flex justify-content-between align-items-center mb-1">
              <label htmlFor="shipping-postcode" className="form-label fw-semibold mb-0">
                Postcode
              </label>
              <span className="badge bg-light text-muted border fs-xs">
                <i className="fa-regular fa-lock me-1" />
                Locked from Step 1
              </span>
            </div>
            <input
              type="text"
              className="form-control form-control-lg bg-light text-dark fw-semibold"
              id="shipping-postcode"
              value={postcode}
              readOnly
              disabled
              style={{
                fontSize: "14px",
                height: "50px",
                cursor: "not-allowed",
                backgroundColor: "#f8f9fa",
                color: "#212529",
              }}
            />
            <small className="text-muted fs-xs d-block mt-1">
              Calculated in Step 1. Click &apos;Edit&apos; above if you need to change it.
            </small>
          </div>
        </div>

        {/* Street Address */}
        <div className="mb-3">
          <label htmlFor="shipping-address" className="form-label fw-semibold">
            House / apartment number and street address
            <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="shipping-address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            placeholder="e.g. No. 45/2, Galle Road, Bambalapitiya"
            style={{ fontSize: "14px", height: "50px" }}
          />
          <div className="valid-feedback">Looks good!</div>
          <div className="invalid-feedback">Please enter your complete street address.</div>
        </div>

        {/* Billing address toggle */}
        <h3 className="h6 mb--8">
          Billing address
          <Tooltip
            content="Uncheck the checkbox below if your Billing address should be different from your Shipping address."
            placement="right"
          >
            <i className="fa-regular fa-circle-info align-middle ms-2 tooltips text-primary" />
          </Tooltip>
        </h3>
        <div className="form-check mb-lg-4">
          <input
            type="checkbox"
            className="form-check-input"
            id="same-address"
            checked={sameAsDelivery}
            onChange={(e) => setSameAsDelivery(e.target.checked)}
          />
          <label htmlFor="same-address" className="form-check-label cursor-pointer">
            Same as delivery address
          </label>
        </div>

        {/* Continue Order Process button */}
        <div className="text-center mt--12 text-center rbt-btn-area">
          <button
            type="submit"
            className="rbt-btn splash-btn icon-reverse-left rbt-scroll-trigger fade_in animation-order-5 d-block rbt-rounded--4 w-100 border-0"
          >
            <span className="icon-left">
              <i className="fa-sharp fa-regular fa-arrow-right mr--4" />
            </span>
            <span>Continue Order Process</span>
            <span className="icon-right">
              <i className="fa-regular fa-arrow-right ml--4" />
            </span>
          </button>
        </div>
      </form>

      {/* Scoped CSS to enforce exact form input font size & height on select dropdowns */}
      <style jsx>{`
        .shipping-select-custom {
          font-size: 14px !important;
          height: 50px !important;
          line-height: 1.5 !important;
          color: #212529 !important;
          border-radius: 6px !important;
          border: 1px solid #ced4da !important;
          padding: 0.5rem 1rem !important;
          background-color: #ffffff !important;
        }
        .shipping-select-custom option {
          font-size: 14px !important;
          padding: 8px 12px !important;
          color: #212529 !important;
          background-color: #ffffff !important;
        }
      `}</style>
    </>
  );
}
