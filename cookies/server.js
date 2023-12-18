const express = require("express")
const app = express()
const cookie = require("cookie-parser")

const PORT = process.env.PORT || 3000

let users = {
    Name: "John",
    Age: 15
}

app.get("/", (req, res) => {
    res.send("Cookies Tutorial");
})

app.get("/setuser", (req, res) => {
    res.cookie("userData", users)
    res.send("Added to Cookies")
})

app.get("/getuser", (req, res) => {
    res.send(req.cookie);
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
}) 