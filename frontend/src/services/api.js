// src/services/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // backend ka base URL
});

// ✅ Interceptor: Har request ke header me token auto-add hoga
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
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

// ---------------- AUTH ----------------

// ✅ Signup (register)
export const registerUser = async (data) => {
  try {
    const res = await API.post("/user/register", data);
    return res.data; // { token, user, message }
  } catch (error) {
    console.error("Signup Error:", error.response?.data);
    throw error.response?.data || { message: "Signup failed" };
  }
};

// ✅ Login
export const loginUser = async (data) => {
  try {
    const res = await API.post("/user/login", data);
    return res.data; // { token, user, message }
  } catch (error) {
    console.error("Login Error:", error.response?.data);
    throw error.response?.data || { message: "Login failed" };
  }
};

// ✅ Protected User Info (changed endpoint to /profile)
export const getUserInfo = async () => {
  try {
    const res = await API.get("/user/profile");
    return res.data;
  } catch (error) {
    console.error("Get User Info Error:", error.response?.data);
    throw error.response?.data || { message: "Failed to fetch user info" };
  }
};

// ✅ Logout
export const logoutUser = () => {
  localStorage.removeItem("token");
};



