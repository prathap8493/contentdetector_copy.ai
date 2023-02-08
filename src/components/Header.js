import Image from "next/image";
import React from "react";
import styles from "../styles/Header.module.css";
import logo from "../assests/logos/Logo.svg";
import { useRouter } from "next/router";
function Header() {
  const router = useRouter();
  return (
    <div className={styles.header_container}>
      <Image
        src={logo}
        className={styles.logo}
        alt="contentdectector.ai"
        onClick={() => router.push("/")}
      />
    </div>
  );
}

export default Header;
