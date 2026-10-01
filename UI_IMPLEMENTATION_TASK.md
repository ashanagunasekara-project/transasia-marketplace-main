# Task: Convert Unimart Template into a Dedicated Electronics Store

## Tech Stack Context
- **Framework:** Next.js (App Router), React 19, TypeScript
- **Styling:** Bootstrap, Sass, Swiper
- **State Management:** Zustand (`context/uiStore.ts`, `context/store.ts`)
- **Key Folders:** `app/`, `components/`, `data/`, `public/`

---

## 1. Set Home Page to "Electronics One"
- **Current state:** The root route `app/page.tsx` renders the multi-demo template gallery.
- **Target:** The root route `http://localhost:3000/` must display the **Electronics One** layout (`http://localhost:3000/home-electronics`).
- **Steps:**
  1. Inspect `app/home-electronics/page.tsx` (and its subcomponents inside `components/`).
  2. Replace the contents of `app/page.tsx` with the structure, components, metadata, and imports from `app/home-electronics/page.tsx`.
  3. Ensure all hero banners, slider carousels (Swiper), and featured product grids load properly on `/` with no hydration or layout shift issues.

---

## 2. Overhaul Main Navigation Bar & Header
- **Target Navigation Items:**
  1. **Home** -> `/` (Remove the "Demos" multi-level dropdown menu and replace it with a standard link labeled `Home`).
  2. **Shop** -> `/shop`
  3. **Categories** -> `/categories`
  4. **Contact Us** -> `/contact`
- **Steps:**
  1. Locate the header component (typically in `components/header/` or `components/common/Header...`).
  2. Remove unused navigation menus: `Pages`, `Elements`, `Core Features`, `More`, and the demo showcase links.
  3. Update the mobile navigation drawer/offcanvas menu (look for `MobileMenu` or similar in `components/`) to mirror this exact structure.
  4. Ensure cart, wishlist, and search modals connected via `context/uiStore.ts` continue to work without broken triggers.

---

## 3. Set Up Shop & Product Detail Routes
- **Shop Catalog Page:**
  - **Source:** The 4-column layout at `app/shop-wider-four/page.tsx` (or its underlying component).
  - **Target Route:** `app/shop/page.tsx`.
  - Move or re-export the 4-column layout to `app/shop/page.tsx` so `http://localhost:3000/shop` serves the product catalog.
- **Single Product Details Page:**
  - **Source:** The accessories template at `app/product-single-accessories/[id]/page.tsx` (or `product-single-accessories/1`).
  - **Target Route:** `app/product/[id]/page.tsx` (or `app/shop/[id]/page.tsx`).
  - Ensure product cards rendered in `/shop` link dynamically to `/product/${item.id}`.

---

## 4. Set Up Categories & Contact Pages
- **Categories Page:**
  - **Source:** The categories listing template at `app/categories-list/page.tsx`.
  - **Target Route:** `app/categories/page.tsx`.
  - Verify images and subcategory links load correctly from `data/`.
- **Contact Us Page:**
  - **Source:** The contact page template at `app/contact/page.tsx` (or `app/contact-page-one/page.tsx`).
  - **Target Route:** `app/contact/page.tsx`.
  - Verify contact form UI inputs, validation states, and store contact info.

---

## 5. Verification & Clean Build Checklist
- [x] Run `npm run dev` and confirm `/`, `/shop`, `/categories`, and `/contact` render as expected.
- [x] Confirm product cards on the Home and Shop pages link correctly to the single product page.
- [x] Ensure mobile menu opens and contains only: `Home`, `Shop`, `Categories`, `Contact Us`.
- [x] Run `npm run lint` and `npm run build` to confirm there are no broken TypeScript imports or missing module errors.