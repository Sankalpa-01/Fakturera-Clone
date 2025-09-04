import Fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";

import termsRoutes from "./routes/terms.routes.js";
import pricelistRoutes from "./routes/pricelist.routes.js";
import { sequelize } from "./models/index.js";

dotenv.config();

const fastify = Fastify({ logger: true });

// --- THIS IS THE FIX ---
// We are now explicitly telling the backend to allow requests
// only from your deployed frontend's URL.
fastify.register(cors, {
  origin: "https://fakturera-clone.vercel.app", // Your live Vercel URL
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
});
// ----------------------

fastify.register(pricelistRoutes);
fastify.register(termsRoutes);

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected successfully");

    await fastify.listen({ port: process.env.PORT || 5000, host: "0.0.0.0" });
  } catch (error) {
    console.error("❌ Unable to start server:", error);
    process.exit(1);
  }
};

fastify.get("/", async (request, reply) => {
  return { message: "🚀 Server is running!" };
});

start();
