import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Terms = sequelize.define("Terms", {
  lang: {
    type: DataTypes.STRING(2), // 'EN' or 'SE'
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default Terms;
