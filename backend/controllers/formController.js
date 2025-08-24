const Contact = require("../models/contact.model");
const Organization = require("../models/OrganationEnquiry.model");
const Personal = require("../models/presnolEnquiry.model");
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ==================== AUTH CONTROLLERS ==================== //

// Register new user
// Register new user
const registerUser = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    // check if user exists
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 👇 Yaha username bhi include kar
    user = new User({ name, username, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User registered successfully ✅" });
  } catch (error) {
    console.error("Register Error:", error.message);
    res.status(500).json({ message: "Server error", error });
  }
};


// Login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // user find by email
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    // password compare
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // JWT token generate
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET || "mysecret",
      { expiresIn: "24h" }
    );

    // ✅ token DB me save karo
    user.token = token;
    await user.save();

    res.json({
      message: "Login successful ✅",
      token,
      user: {
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login Error:", error); // 🔍 Console me full error aayega
    res.status(500).json({ message: "Server error", error: error.message });
  }
};



// Get user profile
const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // password hide
    if (!user) return res.status(404).json({ message: "User not found ❌" });

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// ==================== CONTACT / ORG / PERSONAL CONTROLLERS ==================== //

// POST Contact
const createContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: "Contact saved successfully ✅", data: newContact });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST Organization
const createOrganization = async (req, res) => {
  try {
    const newOrg = new Organization(req.body);
    await newOrg.save();
    res.status(201).json({ message: "Organization saved successfully ✅", data: newOrg });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST Personal
const createPersonal = async (req, res) => {
  try {
    const newPersonal = new Personal(req.body);
    await newPersonal.save();
    res.status(201).json({ message: "Personal saved successfully ✅", data: newPersonal });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all Contacts
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all Organizations
const getOrganizations = async (req, res) => {
  try {
    const organizations = await Organization.find();
    res.status(200).json(organizations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all Personals
const getPersonals = async (req, res) => {
  try {
    const personals = await Personal.find();
    res.status(200).json(personals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ==================== EXPORTS ==================== //
module.exports = {
  registerUser,
  loginUser,
  getProfile,
  createContact,
  createOrganization,
  createPersonal,
  getContacts,
  getOrganizations,
  getPersonals,
};
