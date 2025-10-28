const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Home route
app.get("/", (req, res) => {
  res.send("🚀 Welcome to My Simple Node.js App!");
});

// About route
app.get("/about", (req, res) => {
  res.send("This is a demo Node.js app running in Docker with CI/CD!");
});

// API route
app.get("/api", (req, res) => {
  res.json({
    message: "Hello from the API endpoint!",
    status: "success",
    version: "1.0.0",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});


