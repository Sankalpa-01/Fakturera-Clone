import React from "react";

const PricelistRow = ({ product, isActive, onProductChange, onRowFocus }) => {
  // Handles changes in any input field
  const handleChange = (e) => {
    const { name, value } = e.target;
    onProductChange(product.id, { ...product, [name]: value });
  };

  return (
    <tr
      className={`pricelist-row ${isActive ? "active" : ""}`}
      onFocus={() => onRowFocus(product.id)}
    >
      <td>
        <span className="arrow-icon">➔</span>
      </td>
      <td className="col-article-no">
        {/* The SOW doesn't require all fields to be editable, but this shows how */}
        <input
          type="text"
          name="article_no"
          value={product.article_no || ""}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="product_service"
          value={product.product_service}
          onChange={handleChange}
        />
      </td>
      <td className="col-in-price">
        <input
          type="number"
          name="in_price"
          value={product.in_price}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
      </td>
      <td className="col-unit">
        <input
          type="text"
          name="unit"
          value={product.unit}
          onChange={handleChange}
        />
      </td>
      <td className="col-in-stock">
        <input
          type="number"
          name="in_stock"
          value={product.in_stock || ""}
          onChange={handleChange}
        />
      </td>
      <td className="col-description">
        <input
          type="text"
          name="description"
          value={product.description || ""}
          onChange={handleChange}
        />
      </td>
    </tr>
  );
};

export default PricelistRow;
