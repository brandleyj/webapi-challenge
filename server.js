const express = require("express");
const server = express();
server.use(express.json());

const projectRouter = require("./data/Routers/projectRouter");
const actionRouter = require("./data/Routers/actionRouter");

server.use("/projects", logger, projectRouter);
server.use("/actions", logger, actionRouter);

server.get("/", (req, res) => {
	res.send("Sprint API");
});

function logger(req, res, next) {
	console.log(`${req.method} to ${req.url}`);
	next();
}

server.use(logger);

module.exports = server;
