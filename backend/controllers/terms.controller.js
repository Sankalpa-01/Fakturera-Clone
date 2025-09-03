import { Terms } from "../models/index.js";

export const getTerms = async (request, reply) => {
  try {
    const { lang } = request.params;
    const terms = await Terms.findOne({ where: { lang } });

    if (!terms) {
      return reply.status(404).send({ message: "Terms not found" });
    }

    return reply.send(terms);
  } catch (error) {
    return reply.status(500).send({ error: error.message });
  }
};

export const putTerms = async (req, reply) => {
  const { lang } = req.params;
  const { content } = req.body || {};
  if (!content) return reply.code(400).send({ message: "content required" });

  const [row, created] = await Terms.findOrCreate({
    where: { lang },
    defaults: { content },
  });

  if (!created) await row.update({ content });
  return reply.send({ message: "Updated", lang });
};
