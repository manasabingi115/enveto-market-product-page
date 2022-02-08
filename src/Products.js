import React from "react";
import Card from "./Card";

export default function Products() {
  return (
    <div className="products-container">
      <div className="products-parent">
        <div className="top-line">
          <p>463 Services available</p>
          <div className="sort-options">
            <p>Sortby</p>
            <select className="select-option-inproducts">
              <option>Best Selling</option>
            </select>
          </div>
        </div>
        <h1 className="products-category-name">
          Services In Web & Mobile Design
        </h1>
        <Card />
      </div>
    </div>
  );
}
