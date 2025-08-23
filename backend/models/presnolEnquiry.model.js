const mongoose = require("mongoose");

const PersonalSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: String,
        required: true,
        unique: true
    },
    location:{
        type: String,
        required: true,
    },
    requirement:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
});

const Personal = mongoose.model("Personal",PersonalSchema);
module.exports = Personal;