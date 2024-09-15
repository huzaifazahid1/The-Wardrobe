const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Routes
const mainRoutes = require("./routes/main");
const authRoutes = require("./routes/auth");
const shopRoutes = require("./routes/shop");
const infoRoutes = require("./routes/info")

app.use(express.json());
app.use("/static", express.static(path.join(__dirname, "Static")));

// Use the modularized routes
app.use("/", mainRoutes);
app.use("/info", infoRoutes)
app.use("/Auth", authRoutes);
app.use("/Shop", shopRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
