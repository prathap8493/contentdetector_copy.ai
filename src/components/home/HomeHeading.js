import React from "react";
function HomeHeading({ styles }) {
  return (
    <div className={styles.heading_container}>
      <p className={styles.heading}>
        Ready to check if the text is written by AI?
      </p>
    </div>
  );
}

export default HomeHeading;
