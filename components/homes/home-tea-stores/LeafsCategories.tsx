import Link from "next/link";

export default function LeafsCategories() {
    return (
        <div
            className="rbt-component-area rbt-catagories-area rbt-bg-color-white rbt-section-gapTop rbt-tea-loose-leafs-section">
            <div className="container">
                <div className="row">
                    <div
                        className="col-lg-12 d-flex justify-content-between flex-row align-items-end mb--32 flex-wrap rbt-gap--16">
                        <div className="rbt-component-section-title rbt-gap--4 mb--0 p-0 border-0">
                            <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">Browse <span
                                className="rbt-bold--text">Loose Leafs</span></h2>
                        </div>
                        <Link className="rbt-btn rbt-btn-secondary rbt-btn-sm-2 rbt-scroll-trigger fade_in animation-order-2"
                            href="/categories-list">
                            <span className="btn-text">View All Categories</span>
                            <span className="btn-icon ml--4"><i
                                className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i></span>
                        </Link>
                    </div>
                </div>
                <div className="rbt-tea-leaf-type-wrapper">
                    <ul className="rbt-tea-leaf-type-list">
                        <li>
                            <Link href="/shop-by-category" className="rbt-tea-leaf-type-item">
                                <span className="rbt-tea-leaf-swatch rbt-tea-leaf-swatch-white"></span>
                                <span className="rbt-tea-leaf-label">White</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop-by-category" className="rbt-tea-leaf-type-item">
                                <span className="rbt-tea-leaf-swatch rbt-tea-leaf-swatch-green"></span>
                                <span className="rbt-tea-leaf-label">Green</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop-by-category" className="rbt-tea-leaf-type-item">
                                <span className="rbt-tea-leaf-swatch rbt-tea-leaf-swatch-matcha"></span>
                                <span className="rbt-tea-leaf-label">Matcha</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop-by-category" className="rbt-tea-leaf-type-item">
                                <span className="rbt-tea-leaf-swatch rbt-tea-leaf-swatch-oolong"></span>
                                <span className="rbt-tea-leaf-label">Oolong</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop-by-category" className="rbt-tea-leaf-type-item">
                                <span className="rbt-tea-leaf-swatch rbt-tea-leaf-swatch-black"></span>
                                <span className="rbt-tea-leaf-label">Black</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop-by-category" className="rbt-tea-leaf-type-item">
                                <span className="rbt-tea-leaf-swatch rbt-tea-leaf-swatch-organic"></span>
                                <span className="rbt-tea-leaf-label">Organic</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop-by-category" className="rbt-tea-leaf-type-item">
                                <span className="rbt-tea-leaf-swatch rbt-tea-leaf-swatch-herbals"></span>
                                <span className="rbt-tea-leaf-label">Herbals</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop-by-category" className="rbt-tea-leaf-type-item">
                                <span className="rbt-tea-leaf-swatch rbt-tea-leaf-swatch-jasmine"></span>
                                <span className="rbt-tea-leaf-label">Jasmine</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop-by-category" className="rbt-tea-leaf-type-item">
                                <span className="rbt-tea-leaf-swatch rbt-tea-leaf-swatch-decaf"></span>
                                <span className="rbt-tea-leaf-label">Decaf</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}