const itemController = require("../controllers/itemController");

async function itemRoutes(fastify, options) {
  fastify.post("/", itemController.createItem);
  fastify.get("/", itemController.getItems);
  fastify.get("/:id", itemController.getItem);
  fastify.put("/:id", itemController.updateItem);
  fastify.delete("/:id", itemController.deleteItem);
}

module.exports = itemRoutes;
