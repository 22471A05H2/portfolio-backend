const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Contact route
app.post("/contact", (req, res) => {
  res.send("Contact working");
});

const PORT = process.env.PORT || 5000;

// IMPORTANT FIX
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});