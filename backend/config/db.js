const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URL;

    if (!mongoUri) {
      throw new Error("❌ MONGO_URI / MONGODB_URL not defined in .env file");
    }

    await mongoose.connect(mongoUri);

    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB Error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
