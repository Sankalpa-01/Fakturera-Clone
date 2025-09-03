import sequelize from "../config/db.js";
import Terms from "./terms.model.js";
import Pricelist from "./pricelist.model.js";

// Sync models - REMOVE THIS LINE
// await sequelize.sync({ alter: true });

export { sequelize, Terms, Pricelist };
