import React, { useState } from "react";
import { loginUser } from "../services/api"; // registerUser remove kar diya
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
      // 👉 Login API call
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
    <div className="modal-background">
      <div className="modal-content">
        <button className="close-btn" onClick={closeModal}></button>

        <h2 className="modal-title">Login</h2>

        {error && <p className="error-text">{error}</p>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Please wait..." : "Login"}
          </button>
        </form>

        {/* Sign Up toggle removed */}
      </div>
    </div>
  );
};

export default AuthModal;
