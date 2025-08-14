// Monolithic app - bad example
const express = require("express");
const app = express();
app.use(express.json());
let users = [];
// In a real application, this key should be stored securely (e.g., in environment variables)
// and not hardcoded. This is for demonstration purposes as per the AI Fix Prompt.
const API_KEY = "your_super_secret_api_key_123";

// Middleware to authenticate API key
const authenticateApiKey = (req, res, next) => {
  const apiKey = req.header("X-API-Key");

  if (!apiKey || apiKey !== API_KEY) {
    // Security Improvement: Reject requests without a valid API key.
    // This prevents unauthorized access to user data.
    return res.status(401).json({ message: "Unauthorized: Invalid API Key" });
  }
  next();
};

// Security Improvement: Apply authentication middleware to user routes.
// This ensures only authenticated requests can access or modify user data.
app.get("/users", authenticateApiKey, (req, res) => res.json(users));
app.post("/users", authenticateApiKey, (req, res) => {
  const { username, email } = req.body;

  // Security Improvement: Validate incoming user data.
  // This prevents malformed or malicious data from being processed or stored,
  // improving data integrity and application stability.
  if (!username || typeof username !== "string" || !email || typeof email !== "string") {
    return res.status(400).json({ message: "Bad Request: Username and email are required and must be strings." });
  }

  // Basic email format validation (can be more robust with regex)
  if (!email.includes("@") || !email.includes(".")) {
    return res.status(400).json({ message: "Bad Request: Invalid email format." });
  }

  users.push({ username, email });
  res.json({ added: { username, email } });
});
app.listen(3000, () => console.log("Server running"));
