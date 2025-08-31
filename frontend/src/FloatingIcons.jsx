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
          href="https://wa.me/+917300423846"
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