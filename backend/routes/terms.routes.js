import { getTerms, putTerms } from "../controllers/terms.controller.js";

async function termsRoutes(fastify, options) {
  fastify.get("/api/terms/:lang", getTerms);
  fastify.put("/api/terms/:lang", putTerms);
}

export default termsRoutes;
