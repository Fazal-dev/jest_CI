const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/user", (req, res) => {
  res.send("User created successfully!");
});

const server = app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

module.exports = { app, server };
