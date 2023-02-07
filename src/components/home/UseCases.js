import { use_cases } from "@/data/home";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

function UseCases({ styles }) {
  return (
    <div
      className={`${styles.secondary_bg_container_70} ${styles.flex_start_start_column_wrap} ${styles.padding_vertical_lg} `}
    >
      <p className={`${styles.sub_heading} ${styles.margin_horizontal_md}`}>
        Use Cases
      </p>
      <div className={styles.ourmotive_content}>
        <div
          className={`${styles.flex_start_center_wrap} ${styles.margin_top_md}`}
        >
          {use_cases.map((e) => (
            <div
              key={e.id}
              className={`${styles.usecases_card} ${styles.margin_top_md}`}
            >
              <Image src={e.img} alt="cd icon" className={styles.card_icon} />
              <div>
                <div className={styles.card_title}>{e.title}</div>
                <div className={styles.card_desc}>{e.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* <Button className={styles.analyse_btn}>Read more</Button> */}
      </div>
    </div>
  );
}

export default UseCases;
