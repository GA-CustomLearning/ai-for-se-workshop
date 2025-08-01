// clean-architecture-api/src/index.js
import express from "express";
import { getUsers, addUser } from "./services/userService.js";
const app = express();
app.use(express.json());
app.get("/users", (req, res) => res.json(getUsers()));
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  res.status(201).json(addUser(name, email));
});
app.listen(3000, () => console.log("API running at http://localhost:3000"));
