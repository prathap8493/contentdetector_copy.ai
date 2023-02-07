import { features } from "@/data/home";
import Image from "next/image";
import React from "react";
import FeatureCard from "./FeatureCard";
import circle from "../../assests/svgs/circle-creative.svg";
import square from "../../assests/svgs/square-creative.svg";
function Features({ styles }) {
  return (
    <div
      className={`${styles.primary_bg_container_70} ${styles.flex_center_start_column_wrap} ${styles.padding_vertical_lg}`}
    >
      <p className={`${styles.sub_heading} ${styles.margin_horizontal_md}`}>
        Features
      </p>
      <div className={styles.feature_content}>
        <Image className={styles.feature_square} src={square} alt="cd" />
        <Image className={styles.feature_circle} src={circle} alt="cd" />
        {features.map((e) => (
          <FeatureCard styles={styles} key={e.title} item={e} />
        ))}
      </div>
    </div>
  );
}

export default Features;
