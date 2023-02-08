import Link from "next/link";
import React from "react";

function Contact() {
  return (
    <div className="contact_form">
      <p className="contact_title">Get us at</p>
      <Link className="conact_email" href="mailto:hello@contentdetector.ai">
        hello@contentdetector.ai
      </Link>
    </div>
  );
}

export default Contact;
