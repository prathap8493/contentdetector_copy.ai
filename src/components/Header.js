import Image from "next/image";
import React from "react";
import styles from "../styles/Header.module.css";
import logo from "../assests/logos/Logo.svg";
function Header() {
  return (
    <div className={styles.header_container}>
      <Image src={logo} className={styles.logo} alt="contentdectector.ai" />
    </div>
  );
}

export default Header;
