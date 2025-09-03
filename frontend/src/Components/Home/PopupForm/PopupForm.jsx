import React, { useState, useEffect } from "react";
import { createContact } from "../../../services/api";
import "./PopupForm.css";

export default function PopupForm({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const popupData = JSON.parse(localStorage.getItem("popupData"));

    if (popupData) {
      const lastShown = popupData.timestamp;
      const now = Date.now();

      // ✅ check if 24h passed
      if (now - lastShown < 24 * 60 * 60 * 1000) {
        onClose(); // popup band kar do
      } else {
        // reset time
        localStorage.setItem(
          "popupData",
          JSON.stringify({ shown: true, timestamp: now })
        );
      }
    } else {
      // first time show → save timestamp
      localStorage.setItem(
        "popupData",
        JSON.stringify({ shown: true, timestamp: Date.now() })
      );
    }
  }, [onClose]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createContact(form);
      alert("✅ Contact form submitted successfully!");
      setForm({ name: "", email: "", phone: "", message: "" });
      onClose();
    } catch (err) {
      alert("❌ Failed to submit contact form");
    }
  };

  return (
    <div className="popup">
      <div className="popup__overlay" onClick={onClose}></div>
      <div className="popup__content">
        <button className="popup__close" onClick={onClose}>
          ✖
        </button>

        <form className="popup__form" onSubmit={handleSubmit}>
          <h2 className="popup__heading">Connect with CodRexa</h2>
          <input
            type="text"
            className="popup__input"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            className="popup__input"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            className="popup__input"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <textarea
            className="popup__textarea"
            name="message"
            rows="5"
            placeholder="Your Message..."
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="popup__button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
