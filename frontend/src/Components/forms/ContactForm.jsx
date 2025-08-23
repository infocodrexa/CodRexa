import React, { useState } from "react";
import { createContact } from "../../services/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactForm.css";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createContact(form);
      alert("✅ Contact form submitted successfully!");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      alert("❌ Failed to submit contact form");
    }
  };

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Text Section */}
        <div className="col-lg-6 mb-4 mb-lg-0">
          <h1 className="fw-bold mb-4">BEST WEB BASED ONLINE SOLUTIONS DEVELOPMENT</h1>
          <p>
            We will connect you within 24 working hours with a complete analysis of your requirements. 
            A R Infotech supports your belief and serves your marketing needs. Get a quick quote on your service request and let us be your partner when it comes to achieving success for your online venture. 
            Connect us and let your business plans do the real work for you.
          </p>
          <p>
            We bring together the best iOS, Android, and web app developers, UI/UX designers, 
            and project managers to help you achieve your business objectives and build amazing products.
          </p>
        </div>

        {/* Right Form Section */}
        <div className="col-lg-6">
          <div className="card shadow contact-card p-4">
            <h2 className="text-center mb-4 fw-bold animate-fade">
              Let’s Connect for Free Consultation
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control animate-input"
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control animate-input"
                  name="email"
                  placeholder="Email id"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control animate-input"
                  name="phone"
                  placeholder="Contact Number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control animate-textarea"
                  name="message"
                  rows="5"
                  placeholder="Enter Your Message ..."
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100 fw-bold animate-btn"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
