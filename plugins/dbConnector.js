const fp = require("fastify-plugin");
const connectDB = require("../config/db");

async function dbConnector(fastify, options) {
  connectDB();
}

module.exports = fp(dbConnector);
