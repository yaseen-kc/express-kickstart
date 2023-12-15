const express = require("express")
const app = express();

const PORT = 3000;

const data = {
    id: 1,
    name: "india"
}

app.get('/', (req, res) => {
    res.end("Home Page")
})

app.get('/about', (req, res) => {
    res.end("About Page")
})

app.get('/contact', (req, res) => {
    res.end("Contact Page")
})

app.listen(PORT, () => { console.log("Server Started", PORT) })