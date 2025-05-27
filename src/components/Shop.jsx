// Shop.jsx
import React, { useEffect, useRef } from "react";
import "./Shop.css";
import Footer from "./Footer";

const Shop = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;

      const { scrollLeft, scrollWidth, clientWidth } = el;
      const maxScrollLeft = scrollWidth - clientWidth;
      if (maxScrollLeft <= 0) return;

      // advance by 90px, then wrap back around once we hit the end
      const next = scrollLeft + 90;
      el.scrollLeft = next > maxScrollLeft ? next - maxScrollLeft : next;
    }, 400);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="shop-page">
      <div className="top-shop-div">
        <div className="shop-link-div">
          <div className="shop-title-wrapper">
            <div className="shop-link-title" id="solucky-title">solucky</div>
            <div className="shop-link-title" id="wardrobe-title">wardrobe</div>
          </div>
          <a href="https://www.instagram.com/stories/highlights/17897013209879517/?hl=en">
            <button className="shop-link-button">
              <p className="shop-link-button-text">shop second-hand fashion at affordable pricing</p>
              <img src="/Assets/Icons/shop-arrow.png" alt="arrow" />
            </button>
          </a>
        </div>
        <div className="cutout-image-wrapper">
          <img src="/Assets/Shop/top-cutout.svg" className="big-cutout-picture" alt="outfit-cutout" />
          <img src="/Assets/Shop/top-cutout-alt.svg" className="alt-cutout-picture" alt="outfit-cutout" />
        </div>
      </div>

      <div className="cutout-gallery-wrapper">
        <div className="annotation-container">
          <img src="/Assets/Shop/photographer-tag.svg" className="photographer-tag" alt="photographer tag ->" />
        </div>
        <div className="horizontal-scroll-section cutout-gallery" ref={scrollRef}>
          {[...Array(20)].map((_, i) => (
            <div key={i} className="cutout-item">
              <img src={`Assets/Shop/cutout${i + 1}.png`} alt={`cutout-${i + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="shop-info">
        <div className="info-button-div">
          <div className="shop-header-div">
            <div className="shop-info-header-text smaller-header">our collection</div>
            <div className="shop-info-header-text bigger-header">your <i>style</i></div>
          </div>
          <a className="shop-link" href="https://www.instagram.com/stories/highlights/17897013209879517/?hl=en">
            <button className="shop-link-button smaller-button">
              <p className="shop-link-button-text">shop now</p>
              <img src="/Assets/Icons/shop-arrow.png" alt="arrow" />
            </button>
          </a>
        </div>
        <div className="shop-info-para para-1">
          <p>
            Discover unique <span className="shop-info-para-bold">second-hand</span> treasures from 
            <span className="shop-info-para-bold"> our wardrobe</span>, thoughtfully curated to reflect the themes of each
            <span className="shop-info-para-italic"> solucky magazine</span> issue. Explore our collection of 
            <span className="shop-info-para-bold"> stylish, wallet-friendly</span> pieces that add <span className="shop-info-para-italic"> 
            solucky's</span> creative flair to your closet!
          </p>
        </div>
        <div className="shop-info-para para-2">
          <p>
            Browse our inventory through the <span className="shop-info-para-bold">“solucky store”</span> highlight on 
            <span className="shop-info-para-bold"> Instagram</span> or at occasional <span className="shop-info-para-bold">in-person</span> events. 
            Each curated selection features themes like European Summer, Y2K, 90s Casting Call, & more. Enjoy <span className="shop-info-para-bold">free shipping </span>
            on
            <span className="shop-info-para-bold">orders over $20</span> (additional fees apply for shipping outside California).
          </p>
        </div>
        <div className="sales-final-message">
          <p className="final-sale-cap1">all sales are</p>
          <p className="final-sale-cap2">final</p>
          <p className="final-sale-cap3">no returns or exchanges!</p>
        </div>
        <img className="cloth-pile-image" src="Assets/Shop/clothpile.png" alt="clothes-pile" />
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
