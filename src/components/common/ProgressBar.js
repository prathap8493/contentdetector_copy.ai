import { LinearProgress, linearProgressClasses, styled } from "@mui/material";
import React from "react";

function ProgressBar({ percenage, loading, color }) {
  console.log(loading);
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: "10px",
    width: "85%",
    borderRadius: 10,
    margin: "5px auto",

    boxShadow: "1px 2px 3px #00000029",
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "var(--text-white)",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: color,
    },
  }));
  return (
    <BorderLinearProgress
      variant={loading ? "indeterminate" : "determinate"}
      value={parseInt(percenage)}
    />
  );
}

export default ProgressBar;
