import Image from "next/image";
import React from "react";

function FeatureCard({ styles, item }) {
  return (
    <div className={styles.feature_card}>
      <div className={styles.feature_card_icon}>
        <Image src={item.img} alt="cd icon" />
      </div>
      <div className={styles.card_title}>{item.title}</div>
      <div className={styles.card_desc}>{item.desc}</div>
    </div>
  );
}

export default FeatureCard;
