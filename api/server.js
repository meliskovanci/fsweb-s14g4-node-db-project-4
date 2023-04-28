const express = require("express");

const RecipesRouter = require("./recipes/recipes-router");

const server = express();

server.use(express.json());

server.use("/api/recipes", RecipesRouter);

server.use("*", (req, res) => {
  res.json("Express server is working.");
});



module.exports = server;