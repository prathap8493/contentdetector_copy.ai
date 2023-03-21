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
        className={`${styles.primary_bg_container_70} ${styles.flex_center_center_wrap} ${styles.padding_vertical_lg}`}
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
          <h2 className={styles.sub_heading}>
            AI Content Detector for Academicians
          </h2>
          <p className={styles.section_desc}>
            Academicians and universities may utilize the tool to determine
            whether the essays provided by students are legitimate. Simply copy
            and paste the material into the text field and click on “analyze” to
            identify any bogus information. This may be a useful free
            educational tool, particularly for teachers.
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
