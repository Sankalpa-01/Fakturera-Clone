import {
  getPricelist,
  updateProduct,
  seedPricelist,
} from "../controllers/pricelist.controller.js";

async function pricelistRoutes(fastify, options) {
  fastify.get("/api/pricelist", getPricelist);
  fastify.patch("/api/pricelist/:id", updateProduct);
  fastify.post("/api/pricelist/seed", seedPricelist);
}

export default pricelistRoutes;
