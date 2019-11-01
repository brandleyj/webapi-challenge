const express = require("express");
const server = express();
server.use(express.json());

const projectRouter = require("./data/Routers/projectRouter");

server.use("/projectRouter", logger, projectRouter);

server.get("/", (req, res) => {
	res.send("Sprint API");
});

function logger(req, res, next) {
	console.log(`${req.method} to ${req.url}`);
	next();
}

server.use(logger);

module.exports = server;
