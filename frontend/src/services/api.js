// src/services/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // sab requests yahi se prefix ho jayenge
});


// ---------------- CONTACT ----------------
export const getContacts = async () => {
  try {
    const res = await API.get("/forms/contact");
    return res.data;
  } catch (err) {
    console.error("Error fetching contacts:", err);
    throw err;
  }
};

export const createContact = async (data) => {
  try {
    const res = await API.post("/forms/contact", data);
    return res.data;
  } catch (err) {
    console.error("Error creating contact:", err);
    throw err;
  }
};

// ---------------- ORGANIZATION ----------------
export const getOrganizations = async () => {
  try {
    const res = await API.get("/forms/organization");
    return res.data;
  } catch (err) {
    console.error("Error fetching organizations:", err);
    throw err;
  }
};

export const createOrganization = async (data) => {
  try {
    const res = await API.post("/forms/organization", data);
    return res.data;
  } catch (err) {
    console.error("Error creating organization:", err);
    throw err;
  }
};

// ---------------- PERSONAL ----------------
export const getPersonals = async () => {
  try {
    const res = await API.get("/forms/personal");
    return res.data;
  } catch (err) {
    console.error("Error fetching personals:", err);
    throw err;
  }
};

export const createPersonal = async (data) => {
  try {
    const res = await API.post("/forms/personal", data);
    return res.data;
  } catch (err) {
    console.error("Error creating personal:", err);
    throw err;
  }
};
