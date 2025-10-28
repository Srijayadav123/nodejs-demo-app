const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON body
app.use(express.json());

// Simple calculator route
app.post("/calculate", (req, res) => {
  const { num1, num2, operation } = req.body;

  let result;

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num2 !== 0 ? num1 / num2 : "Error: Division by zero";
      break;
    default:
      return res.status(400).json({ error: "Invalid operation" });
  }

  res.json({ num1, num2, operation, result });
});

app.get("/", (req, res) => {
  res.send("🧮 Welcome to Simple Calculator API!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


