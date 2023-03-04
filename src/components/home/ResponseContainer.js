import React, { useEffect, useState } from "react";
import ProgressBar from "../common/ProgressBar";
import TwitterIcon from "@mui/icons-material/Twitter";
function ResponseContainer({ styles, percentage, loading }) {
  const [scoreTheme, setScoreTheme] = useState(null);

  useEffect(() => {
    scoreStage(percentage);
    console.log(percentage);
  }, [percentage]);
  const scoreStage = (percentage) => {
    if (percentage <= 10)
      return setScoreTheme({
        text: "Very Less AI Probability",
        color: "#199F54",
      });

    if (percentage <= 20)
      return setScoreTheme({ text: "Less AI Probability", color: "#FEA501" });

    if (percentage <= 50)
      return setScoreTheme({
        text: "Medium AI Probability",
        color: "#EB661E",
      });
    if (percentage > 50)
      return setScoreTheme({
        text: "Medium AI Probability",
        color: "#D04B45",
      });
  };

  console.log(scoreTheme);
  return (
    <>
      <div className={styles.response_container}>
        {percentage == null ? (
          <div className={styles.ai_response}>
            <p className={styles.ai_percentage_default}>%</p>
            <p className={styles.ai_sub_text} style={{ opacity: 0.6 }}>
              AI Score
            </p>
            <ProgressBar percenage={percentage || 0} loading={loading} />
          </div>
        ) : (
          <div className={styles.ai_response}>
            <p className={styles.ai_percentage}>{scoreTheme?.text}</p>
            <ProgressBar
              percenage={percentage}
              loading={loading}
              color={scoreTheme?.color}
            />
            <p className={styles.ai_sub_text}>
              <span style={{ fontWeight: "bold" }}>{percentage}%</span>{" "}
              <span
                style={{
                  opacity: 0.6,
                }}
              >
                AI Score
              </span>
            </p>
          </div>
        )}
        {/* <div className={styles.social_container}>
          <p className={styles.social_heading}>Tell your friends!</p>
          <p className={styles.social_subheading}>
            Lorem ipsum dolor sit amet.
          </p>
          <div className={styles.social_msg_box}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue,
            leo id malesuada.
          </div>
          <div className={styles.social_btn}>
            <TwitterIcon style={{ marginRight: "6px" }} />
            <p style={{ fontSize: "14px" }}>Share Tweet</p>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default ResponseContainer;
