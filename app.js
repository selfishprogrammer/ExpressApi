const express = require("express");
const hbs = require("hbs")
const app = express();
const port = 8000;
const path = require("path")
const pathOfPublic = path.join(__dirname, "./public")
const TempaltesFile = path.join(__dirname, "./templates/views")
const PartialsFile = path.join(__dirname, "./templates/partials")
app.use(express.static(pathOfPublic))

app.set("view engine", "hbs")
app.set("views", TempaltesFile);

hbs.registerPartials(PartialsFile);
app.get("", (req, res) => {
    res.render("index")
})

app.get("/about", (req, res) => {
    res.render("about")
})

app.get("/weather", (req, res) => {
    res.render("weather")
})
app.get("/bmi_calculation", (req, res) => {
    res.render("bmi")
})
app.get("/love_calculator", (req, res) => {
    res.render("love")
})
app.get("/cricket_score", (req, res) => {
    res.render("cricket")
})
app.get("/typing_speed", (req, res) => {
    res.render("typing")
})
app.get("*", (req, res) => {
    res.send("OOps 404 Not Found")
})
app.listen(port, "127.0.0.1", () => {
    console.log(`Server Started At ${port}`)
});