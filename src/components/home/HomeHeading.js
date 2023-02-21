import React from "react";
function HomeHeading({ styles }) {
  return (
    <div className={styles.heading_container}>
      <h1 className={styles.heading}>
        AI Content Detector - Detect ChatGPT Plagiarism
      </h1>
    </div>
  );
}

export default HomeHeading;
