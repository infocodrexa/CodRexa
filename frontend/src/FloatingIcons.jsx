import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import "./FloatingIcons.css";

export default function FloatingIcons() {
  return (
    <>
      {/* Left Bottom (Call Button) */}
      <div className="icon-left">
        <a href="tel:+917300423846" className="icon-button icon-call">
          <FaPhoneAlt />
        </a>
      </div>

      {/* Right Bottom (WhatsApp Button) */}
      <div className="icon-right">
        <a
          href="https://wa.me/917300423846?text=Hi%20Codrexa%20👋%20I%20am%20interested%20in%20your%20services.%20Please%20connect%20with%20me."
          target="_blank"
          rel="noopener noreferrer"
          className="icon-button icon-whatsapp"
        >
          <FaWhatsapp />
        </a>
      </div>
    </>
  );
}