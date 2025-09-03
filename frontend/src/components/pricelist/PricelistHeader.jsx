import React from "react";

const PricelistHeader = () => {
  return (
    <thead>
      <tr className="pricelist-header">
        <th style={{ width: "40px" }}>{/* Column for active arrow */}</th>
        <th className="col-article-no">Article No.</th>
        <th>Product/Service</th>
        <th className="col-in-price">In Price</th>
        <th>Price</th>
        <th className="col-unit">Unit</th>
        <th className="col-in-stock">In Stock</th>
        <th className="col-description">Description</th>
      </tr>
    </thead>
  );
};

export default PricelistHeader;
