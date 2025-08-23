import React, { useState } from "react";
import { createPersonal } from "../../services/api";

const PersonalForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    requirement: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPersonal(form);
      alert("Personal form submitted successfully!");
      setForm({ name: "", email: "", phone: "", location: "", requirement: "" });
    } catch (err) {
      alert("Failed to submit personal form");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Personal Form</h2>
      <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input type="text" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
      <input type="text" name="location" placeholder="Location" value={form.location} onChange={handleChange} required />
      <textarea name="requirement" placeholder="Requirement" value={form.requirement} onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PersonalForm;
