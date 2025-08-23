const Contact = require("../models/contact.model");
const Organization = require("../models/OrganationEnquiry.model");
const Personal = require("../models/presnolEnquiry.model");

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

// 👇 Export karo CommonJS ke hisaab se
module.exports = {
  createContact,
  createOrganization,
  createPersonal,
  getContacts,
  getOrganizations,
  getPersonals
};
