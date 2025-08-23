const express = require("express");
const {
  validateRequest,
} = require("../middleware/validateRequest");

const {
  createContact,
  createOrganization,
  createPersonal,
  getContacts,
  getOrganizations,
  getPersonals,
} = require("../controllers/formController");

const router = express.Router();

// Contact POST
router.post(
  "/contact",
  validateRequest(["name", "email", "phone", "message"]),
  createContact
);

// Contact GET
router.get("/contact", getContacts);

// Organization POST
router.post(
  "/organization",
  validateRequest([
    "name",
    "email",
    "phone",
    "company",
    "location",
    "Service",
    "url",
    "requirement",
  ]),
  createOrganization
);

// Organization GET
router.get("/organization", getOrganizations);

// Personal POST
router.post(
  "/personal",
  validateRequest(["name", "email", "phone", "location", "requirement"]),
  createPersonal
);

// Personal GET
router.get("/personal", getPersonals);

module.exports = router;
