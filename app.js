const express = require("express");
const app = express();
const games = require("./src/data/games.json");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home", { games: games });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});