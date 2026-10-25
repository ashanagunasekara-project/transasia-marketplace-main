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
          if (parsed.postcode) setPostcode(parsed.postcode);
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
          if (parsed.postcode) setPostcode(parsed.postcode);
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
      // Keep existing city if it belongs to this district, else select first city
      const exists = cities.find((c) => c.name.toLowerCase() === selectedCity.toLowerCase());
      if (!exists) {
        setSelectedCity(cities[0].name);
        if (cities[0].postalCode) {
          setPostcode(cities[0].postalCode);
        }
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
      if (cities[0].postalCode) {
        setPostcode(cities[0].postalCode);
      }
    }
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const cityName = e.target.value;
    setSelectedCity(cityName);
    const cityObj = availableCities.find((c) => c.name === cityName);
    if (cityObj?.postalCode) {
      setPostcode(cityObj.postalCode);
    }
  };

  const handlePostcodeBlur = () => {
    if (/^\d{5}$/.test(postcode.trim())) {
      const match = findLocationByPostalCode(postcode.trim());
      if (match) {
        setSelectedDistrictId(match.districtId);
        setSelectedCity(match.city);
      }
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    setValidated(true);

    const form = event.currentTarget;
    const isFormValid = form.checkValidity();

    // Additional Sri Lanka specific validations
    const isPostcodeValid = /^\d{5}$/.test(postcode.trim());
    const isMobileValid = /^(?:0|94|\+94)?(?:7[01245678]\d{7})$/.test(
      mobile.replace(/\s+/g, "")
    );

    if (!isFormValid || !isPostcodeValid || !isMobileValid) {
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
            postcode: postcode.trim(),
            district: selectedDistrictObj?.name || "Colombo",
            districtId: selectedDistrictId,
            city: selectedCity,
          })
        );
      } catch (err) {
        console.error("Failed to persist shipping state:", err);
      }
    }

    // Proceed to Step 3: Secure Payment
    router.push("/checkout-payment");
  };

  return (
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
          />
          <div className="valid-feedback">Valid Sri Lanka mobile!</div>
          <div className="invalid-feedback">
            Please enter a valid Sri Lankan mobile number (e.g. 0771234567).
          </div>
        </div>

        {/* District (Sri Lanka) */}
        <div className="col">
          <label htmlFor="shipping-district" className="form-label fw-semibold">
            District <span className="text-danger">*</span>
          </label>
          <select
            id="shipping-district"
            className="form-select form-select-lg"
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

        {/* City / Area (Sri Lanka Mode) */}
        <div className="col">
          <label htmlFor="shipping-city" className="form-label fw-semibold">
            City / Area <span className="text-danger">*</span>
          </label>
          <select
            id="shipping-city"
            className="form-select form-select-lg"
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

        {/* Postcode */}
        <div className="col-12 col-sm-6">
          <div className="d-flex justify-content-between align-items-center">
            <label htmlFor="shipping-postcode" className="form-label fw-semibold mb-1">
              Postcode <span className="text-danger">*</span>
            </label>
            <a
              href="https://slpost.gov.lk/postcode_new/"
              target="_blank"
              rel="noopener noreferrer"
              className="fs-xs text-primary text-decoration-underline"
            >
              Find on SL Post ↗
            </a>
          </div>
          <input
            type="text"
            inputMode="numeric"
            maxLength={5}
            className={`form-control form-control-lg ${
              validated && !/^\d{5}$/.test(postcode) ? "is-invalid" : ""
            }`}
            id="shipping-postcode"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value.replace(/\D/g, "").slice(0, 5))}
            onBlur={handlePostcodeBlur}
            required
            placeholder="00100"
          />
          <div className="valid-feedback">Looks good!</div>
          <div className="invalid-feedback">
            Please enter a 5-digit Sri Lankan postal code.
          </div>
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
  );
}
