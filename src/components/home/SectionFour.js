import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import image from "../../assests/png/solution_img.png";
import circle from "../../assests/svgs/circle-creative.svg";
import square from "../../assests/svgs/square-creative.svg";

function SectionFour({ styles }) {
  return (
    <div>
      <div
        className={`${styles.primary_bg_container_70} ${styles.flex_center_center_wrap} ${styles.margin_vertical_lg}`}
      >
        <div className={styles.section_creative_container}>
          <Image
            className={styles.section_creative_square}
            src={square}
            alt="cd"
          />
          <Image
            className={styles.section_creative_circle}
            src={circle}
            alt="cd"
          />
          <Image
            className={styles.section_creative_img}
            src={image}
            alt="contentdetector.ai"
          />
        </div>
        <div
          className={`${styles.section_content_container} ${styles.margin_top_md}`}
        >
          <p className={styles.sub_heading}>
            We bring solutions to make life easier for our customers.
          </p>
          <p className={styles.section_desc}>
            ChatGPT which is based on OpenAI GPT 3.5 is a big leap forward in
            terms of features. We will be able to detect any
          </p>
          <Button className={`${styles.analyse_btn} ${styles.margin_top_md}`}>
            Analyse
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
