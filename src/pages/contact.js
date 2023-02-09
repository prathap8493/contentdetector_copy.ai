import Head from "next/head";
import Link from "next/link";
import React from "react";

function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | ContentDetector.AI</title>
        <meta
          name="description"
          content="ContentDetector.AI is a free AI and ChatGPT plagiarism detector with a word counter for bloggers academicians"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="contact_form">
        <p className="contact_title">Get us at</p>
        <Link className="conact_email" href="mailto:hello@contentdetector.ai">
          hello@contentdetector.ai
        </Link>
      </div>
    </>
  );
}

export default Contact;
