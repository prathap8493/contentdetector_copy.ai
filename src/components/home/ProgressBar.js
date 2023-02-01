import { LinearProgress, linearProgressClasses, styled } from "@mui/material";
import React from "react";

function ProgressBar({ percenage, loading }) {
  console.log(loading);
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 15,
    width: "70%",
    borderRadius: 10,
    boxShadow: "1px 2px 3px #00000029",
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "var(--text-white)",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: "var(--progress-bar-color)",
    },
  }));
  return (
    <BorderLinearProgress
      variant={loading ? "indeterminate" : "determinate"}
      value={percenage}
    />
  );
}

export default ProgressBar;
