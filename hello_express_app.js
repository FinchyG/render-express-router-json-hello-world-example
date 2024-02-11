const express = require("express");
const app = express();
// variable for routes
const timed_greetings = require("./timed_greetings");

const port = 3000;

app.get("/", function (req, res) {
	res.send("Hello World!");
});

app.use("/timed_greetings", timed_greetings);

app.listen(port, function () {
	console.log(`Example app listening on port ${port}!`);
});