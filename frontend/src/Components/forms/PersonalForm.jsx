import React, { useState } from "react";
import { createPersonal } from "../../services/api";
import "./PersonalForm.css";
import personalIllustration from "../../assets/personal.avif"; // apni image ka path daalna

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
      setForm({
        name: "",
        email: "",
        phone: "",
        location: "",
        requirement: "",
      });
    } catch (err) {
      alert("Failed to submit personal form");
    }
  };

  return (
    <div className="personal-form-container">
      {/* Heading OUTSIDE the card */}
      <div className="personal-form-heading">
        <h5 className="small-title">PERSONAL ENQUIRY</h5>
        <h2 className="form-title">Personal Enquiry Form</h2>
        <p className="form-subtitle">
          Please fill the form. Our Team will get back to you soon.
        </p>
      </div>

      <div className="personal-form-wrapper">
        {/* Left Image Side */}
        <div className="personal-form-left">
          <img
            src={personalIllustration}
            alt="Personal illustration"
            className="personal-form-img"
          />
        </div>

        {/* Right Form Side */}
        <div className="personal-form-right">
          <form onSubmit={handleSubmit} className="personal-form">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control animate-input"
                name="name"
                value={form.name}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control animate-input"
                name="email"
                value={form.email}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                className="form-control animate-input"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>

            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                className="form-control animate-input"
                name="location"
                value={form.location}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>

            <div className="form-group">
              <label>Requirement</label>
              <textarea
                className="form-control animate-input"
                name="requirement"
                value={form.requirement}
                onChange={handleChange}
                rows="3"
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 mt-3 animate-btn"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Call Now Section */}
        <a
          href="tel:+911234567890"
          className="call-now"
        >
             Call Now @ 9829321136
        </a>
    </div>
  );
};

export default PersonalForm;
