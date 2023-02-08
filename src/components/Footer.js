import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_layout">
        <div className="footer_menu">
          <Link href="/" className="footer_menu_item">
            Home
          </Link>
          <Link
            href="/contact"
            target="_blank"
            rel="noreferrer"
            className="footer_menu_item"
          >
            Contact
          </Link>
          <Link
            href="/privacy-policy"
            target="_blank"
            rel="noreferrer"
            className="footer_menu_item"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            target="_blank"
            rel="noreferrer"
            className="footer_menu_item"
          >
            Terms & Conditions
          </Link>
        </div>
        <p className="copyrights">Copyright © 2023 ContentDetector.AI</p>
      </div>
    </div>
  );
}

export default Footer;
