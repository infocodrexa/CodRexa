const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");   
const connectDB = require("./config/db");
const formRoutes = require("./routes/formRoutes"); // 👈 ye add karna zaroori hai

// Load env sabse upar
dotenv.config({ quiet: true });   

// DB connect
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("🚀 Backend is running with MongoDB");
});

// API Routes
app.use("/api/forms", formRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🔥 Server running on port ${PORT}`));
