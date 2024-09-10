const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.json());
app.use("/static", express.static(path.join(__dirname, "Static")));

app.get("/", (req, res) => {
  res.sendFile("templates/LandingPage.html", { root: __dirname });
});

app.get("/About", (req, res) => {
  res.sendFile("templates/About.html", { root: __dirname })
})

app.get("/Contact", (req, res) => {
  res.sendFile("templates/Contact.html", { root: __dirname })
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
