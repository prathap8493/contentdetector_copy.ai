import { Button } from "@mui/material";
import React from "react";

function OurMotive({ styles }) {
  return (
    <div>
      <div
        className={`${styles.primary_bg_container_70} ${styles.flex_center_start_column_wrap}`}
      >
        <div
          className={`${styles.padding_vertical_lg} ${styles.margin_horizontal_sm} `}
        >
          <p className={`${styles.sub_heading} ${styles.margin_horizontal_md}`}>
            Best Free AI Content and ChatGPT Detector Software
          </p>
          <div className={styles.layout_spacing}>
            <p className={styles.section_desc}>
              ContenDetector.AI detects any AI written text content including
              Chat GPT, GPT 3 written content and provides an approximate
              percentage score based on how likely the text content is written
              by AI tools or software. It also acts as word counter and
            </p>
            <p className={styles.section_desc}>
              It is 100% free to use online software or tool with very simple
              yet powerful interface to detect any fake text. Just copy paste
              the content in the text box.
            </p>
            <p className={styles.section_desc}>
              Our tool is loved by thousands of users and used by bloggers and
              academicians alike to detect any AI content.
            </p>
            {/* <Button className={styles.analyse_btn}>Read more</Button> */}
          </div>
        </div>
      </div>

      <div
        className={`${styles.secondary_bg} ${styles.flex_center_start_column_wrap}`}
      >
        <div
          className={`${styles.padding_vertical_lg} ${styles.margin_horizontal_sm} `}
        >
          <p className={`${styles.sub_heading} ${styles.margin_horizontal_md}`}>
            How AI Content Detection Works?
          </p>
          <div className={styles.layout_spacing}>
            <p className={styles.section_desc}>
              Detecting any content is challenging and it is nor possible to
              detect AI content with near 100% accuracy. This detection model
              was built by fine tuning a A Robustly Optimized BERT Pretraining
              Approach(Roberta) model with the outputs of GPT 2 model by Open
              AI. This tool has to be used along with human judgement to see if
              the text is written by OpenAI
            </p>

            {/* <Button className={styles.analyse_btn}>Read more</Button> */}
          </div>
        </div>
      </div>

      <div
        className={`${styles.primary_bg_container_70} ${styles.flex_center_start_column_wrap}`}
      >
        <div
          className={`${styles.padding_vertical_lg} ${styles.margin_horizontal_sm} `}
        >
          <p className={`${styles.sub_heading} ${styles.margin_horizontal_md}`}>
            Can Google Detect AI Written Content?
          </p>
          <div className={styles.layout_spacing}>
            <p className={styles.section_desc}>
              Yes, google most probably has the required technology to detect
              the AI written content. Google has the most advanced AI technology
              in the world. Infact, the current large language models such as
              GPT 3 used by ChatGPT are based on a technology called
              Transformers which was opensoursed by Google.
            </p>
            <p className={styles.section_desc}>
              Google also releases the highest number of AI and ML related
              research papers every year.
            </p>
            <p className={styles.section_desc}>
              However, we are yet to know if google directly penalises AI
              written content. For bloggers, its good to know if the content is
              written by AI.
            </p>
            {/* <Button className={styles.analyse_btn}>Read more</Button> */}
          </div>
        </div>
      </div>

      <div
        className={`${styles.secondary_bg} ${styles.flex_center_start_column_wrap}`}
      >
        <div
          className={`${styles.padding_vertical_lg} ${styles.margin_horizontal_sm} `}
        >
          <p className={`${styles.sub_heading} ${styles.margin_horizontal_md}`}>
            AI Detector for Bloggers
          </p>
          <div className={styles.layout_spacing}>
            <p className={styles.section_desc}>
              Bloggers or Content Publishers can use ContentDetector.AI to
              detect AI content. When you are working with external or internal
              writers, you need to check if the writers are using any AI writer
              to write the content. Google or other Search Engines probably can
              detect AI Content. Any spam content is against their guidelines,
              In fact Google has released two helpful content updates this year
              which target spam content. However AI written content might or
              might not be spam and it totally depending how the AI tool is
              used.
            </p>

            {/* <Button className={styles.analyse_btn}>Read more</Button> */}
          </div>
        </div>
      </div>
      <div
        className={`${styles.primary_bg_container_70} ${styles.flex_center_start_column_wrap}`}
      >
        <div
          className={`${styles.padding_vertical_lg} ${styles.margin_horizontal_sm} `}
        >
          <p className={`${styles.sub_heading} ${styles.margin_horizontal_md}`}>
            AI Detector for Academicians
          </p>
          <div className={styles.layout_spacing}>
            <p className={styles.section_desc}>
              Academicians and Universities can use the tool to check the essays
              submitted by students are authentic or not. Just copy paste the
              content into the text box and click on analyse to detect any fake
              content. This can be a very handy free tool for education
              especially for teacher.
            </p>
            <p className={styles.section_desc}>
              ContentDetector.AI also acts a simple word counter. Just copy
              paste the text to know the number of words are in the text
            </p>

            {/* <Button className={styles.analyse_btn}>Read more</Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMotive;
