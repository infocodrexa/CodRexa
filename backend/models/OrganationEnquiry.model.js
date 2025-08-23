const mongoose = require("mongoose");

const OrganitionSchema = new mongoose.Schema({
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
    company:{
        type: String,
        required: true,
        unique: true
    },
    location:{
        type: String,
        required: true,
    },
    Service:{
        type: String,
        required: true,
    },
    url:{
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

const Organition = mongoose.model("Organition",OrganitionSchema);
module.exports = Organition;