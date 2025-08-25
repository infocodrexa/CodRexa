import React from "react";
import { useNavigate } from "react-router-dom";
import "./FreeConsultationButton.css"; // 👈 CSS file import

const FreeConsultationButton = () => {
   const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/contact")}  className="consult-btn">
      <span className="consult-icon">💬</span>
      Free Consultation
    </button>
  );
};

export default FreeConsultationButton;
