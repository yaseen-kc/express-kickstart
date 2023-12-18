const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 3000;

let users = {
    Name: "John",
    Age: 15
};

app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Cookies Tutorial");
});

app.get("/setuser", (req, res) => {
    res.cookie("userData", users);
    res.send("Added to Cookies");
});

app.get("/getuser", (req, res) => {
    res.send(req.cookies.userData);
});

app.listen(PORT, () => {
    console.log(`Server is running at https://localhost:${PORT}`);
});
