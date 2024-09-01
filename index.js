const fastify = require("fastify")({ logger: true });
require("dotenv").config();
const dbConnector = require("./plugins/dbConnector");
const itemRoutes = require("./routes/itemRoutes");

// Register plugins and routes
fastify.register(dbConnector);
fastify.register(require("@fastify/cors"), { origin: "*" });
fastify.register(itemRoutes, { prefix: "/api/items" });

// Start the server
const start = async () => {
  try {
    await fastify.listen({ port: process.env.PORT || 3000, host: "0.0.0.0" });
    fastify.log.info(`Server running on port ${process.env.PORT || 3000}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
