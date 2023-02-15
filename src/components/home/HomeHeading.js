import React from "react";
function HomeHeading({ styles }) {
  return (
    <div className={styles.heading_container}>
      <p className={styles.heading}>
        Free AI Content Detector - Detect ChatGPT Plagiarism
      </p>
    </div>
  );
}

export default HomeHeading;
