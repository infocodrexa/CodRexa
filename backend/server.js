const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Dummy API
app.get("/", (req, res) => {
  res.send("🚀 Backend is running without DB");
});

app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Abhishek" },
    { id: 2, name: "Raj" },
  ]);
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🔥 Server running on port ${PORT}`));
