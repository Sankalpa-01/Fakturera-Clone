import { Pricelist } from "../models/index.js";

export const getPricelist = async (request, reply) => {
  try {
    const products = await Pricelist.findAll();
    return reply.type("application/json").send(products);
  } catch (error) {
    return reply.status(500).send({ error: error.message });
  }
};

export const updateProduct = async (request, reply) => {
  try {
    const { id } = request.params;
    const { product_service, in_price, price, vat, unit, quantity, total } =
      request.body;

    const product = await Pricelist.findByPk(id);
    if (!product)
      return reply.status(404).send({ message: "Product not found" });

    await product.update({
      product_service,
      in_price,
      price,
      vat,
      unit,
      quantity,
      total,
    });

    return reply.send(product);
  } catch (error) {
    return reply.status(500).send({ error: error.message });
  }
};

export const seedPricelist = async (req, reply) => {
  const count = Number(req.query.count || 20);
  const items = Array.from({ length: count }).map((_, i) => ({
    product_service: `Product ${i + 1}`,
    in_price: 50 + i * 5,
    price: 100 + i * 10,
    vat: 25,
    unit: "pcs",
    // --- ADD THESE NEW FIELDS ---
    article_no: `ART-${123450 + i}`,
    in_stock: 10 + i,
    description: `This is the description for item ${i + 1}.`,
    // ----------------------------
  }));
  await Pricelist.bulkCreate(items);
  return reply.code(201).send({ message: "Seeded", count });
};
