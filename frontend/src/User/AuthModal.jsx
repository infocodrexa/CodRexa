import React, { useState } from "react";
import { loginUser } from "../services/api";
import { useNavigate } from "react-router-dom";
import "./AuthModal.css";

const AuthModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await loginUser({
        email: formData.email,
        password: formData.password,
      });

      if (res.token) {
        localStorage.setItem("token", res.token);
        localStorage.setItem("user", JSON.stringify(res.user));
        closeModal();
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-modal__overlay" onClick={closeModal}>
      <div className="auth-modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="auth-modal__close" onClick={closeModal}></button>

        <h2 className="auth-modal__title"> Admin Login</h2>

        {error && <p className="auth-modal__error">{error}</p>}

        <form onSubmit={handleSubmit} className="auth-modal__form">
          <div className="auth-modal__group">
            <input
              type="email"
              name="email"
              placeholder=" "
              value={formData.email}
              onChange={handleChange}
              required
              className="auth-modal__input"
            />
            <label className="auth-modal__label">Email</label>
          </div>

          <div className="auth-modal__group">
            <input
              type="password"
              name="password"
              placeholder=" "
              value={formData.password}
              onChange={handleChange}
              required
              className="auth-modal__input"
            />
            <label className="auth-modal__label">Password</label>
          </div>

          <button
            type="submit"
            className="auth-modal__btn"
            disabled={loading}
          >
            {loading ? "Please wait..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
