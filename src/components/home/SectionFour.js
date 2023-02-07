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
        className={`${styles.primary_bg_container_70} ${styles.flex_center_center_wrap} ${styles.margin_vertical_lg} ${styles.padding_vertical_lg}`}
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
          <p className={styles.sub_heading}>AI Detector for Academicians</p>
          <p className={styles.section_desc}>
            Academicians and Universities can use the tool to check the essays
            submitted by students are authentic or not. Just copy paste the
            content into the text box and click on analyse to detect any fake
            content. This can be a very handy free tool for education especially
            for teacher.
          </p>
          <p className={styles.section_desc}>
            ContentDetector.AI also acts a simple word counter. Just copy paste
            the text to know the number of words are in the text
          </p>
          {/* <Button className={`${styles.analyse_btn} ${styles.margin_top_md}`}>
            Analyse
          </Button> */}
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
