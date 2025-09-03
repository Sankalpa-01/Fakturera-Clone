import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Pricelist = sequelize.define("Pricelist", {
  product_service: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  in_price: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0,
  },
  vat: {
    type: DataTypes.DECIMAL(5, 2),
    defaultValue: 0,
  },
  unit: {
    type: DataTypes.STRING,
    defaultValue: "pcs",
  },
  // --- ADD THE MISSING FIELDS HERE ---
  article_no: {
    type: DataTypes.STRING,
  },
  in_stock: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.STRING,
  },
  // The 'quantity' and 'total' fields were in your original model
  // but not in the SOW pictures. You can keep them or remove them.
  // I will keep them here for now.
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0,
  },
});

export default Pricelist;
