// import { testimonial_settings } from "@/data/home";
import { testimonials } from "@/data/home";
import { Rating } from "@mui/material";
import Image from "next/image";
import React from "react";
import image from "../../assests/png/solution_img.png";
import circle from "../../assests/svgs/circle-creative.svg";
import square from "../../assests/svgs/square-creative.svg";
function Testimonials({ styles }) {
  const testimonial_settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <div
      className={`${styles.primary_bg_container_70} ${styles.flex_center_start_column_wrap} ${styles.padding_vertical_lg}`}
    >
      <p className={`${styles.sub_heading} ${styles.margin_horizontal_md}`}>
        Testimonials
      </p>
      <div className={styles.testimonial_container}>
        <Image className={styles.feature_circle} src={square} alt="cd" />
        <Image className={styles.feature_square} src={circle} alt="cd" />
        <div
          className={`${styles.testimonials} ${styles.flex_center_center_wrap} ${styles.margin_vertical_md} `}
        >
          {/* <Slider {...testimonial_settings}> */}
          {testimonials.map((item) => (
            <div className={styles.testimonial_card} key={item.id}>
              <p className={styles.testimonial_rating}>
                <Rating value={5} readOnly />
              </p>
              <p className={styles.testimonial_desc}>{item.desc}</p>
              <div className={styles.testimonial_user}>
                <Image
                  className={styles.testimonial_user_img}
                  src={image}
                  alt="image"
                />
                <p className={styles.testimonial_user_name}>{item.user}</p>
              </div>
            </div>
          ))}

          {/* </Slider> */}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
