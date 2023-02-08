import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_layout">
        <div className="footer_menu">
          <Link href="/" className="footer_menu_item">
            HOME
          </Link>
          <Link
            href="/contact"
            target="_blank"
            rel="noreferrer"
            className="footer_menu_item"
          >
            CONTACT
          </Link>
          <Link
            href="/privacy-policy"
            target="_blank"
            rel="noreferrer"
            className="footer_menu_item"
          >
            PRIVACY POLICY
          </Link>
          <Link
            href="/terms"
            target="_blank"
            rel="noreferrer"
            className="footer_menu_item"
          >
            TERMS & CONDITIONS
          </Link>
        </div>
        <p className="copyrights">Copyright © 2023 ContentDetector.AI</p>
      </div>
    </div>
  );
}

export default Footer;
