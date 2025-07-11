// Monolithic app - bad example
const express = require("express");
const app = express();
let users = [];
app.get("/users", (req, res) => res.json(users));
app.post("/users", (req, res) => {
  users.push(req.body);
  res.json({ added: req.body });
});
app.listen(3000, () => console.log("Server running"));
