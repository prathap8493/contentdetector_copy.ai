import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import down from "../../assests/svgs/down.svg";
import Image from "next/image";
import { faq } from "@/data/home";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  marginTop: "10px",
  padding: "5px",
  borderRadius: "10px",
  border: `1px solid #00000029`,
  boxShadow: "1px 1px 4px #00000029",
  fontSize: "20px",
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <Image style={{ width: "19px", height: "19px" }} src={down} alt=">" />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "var(--text-white)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
    fontSize: "20px",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function Faq({ styles }) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div
      className={`${styles.secondary_bg_container_70} ${styles.padding_horizontal_md} ${styles.padding_vertical_lg}`}
    >
      <div className={`${styles.layout_spacing}`}>
        <p className={`${styles.sub_heading} `}>FAQs</p>
        <div
          className={`${styles.accordion_container} ${styles.margin_top_md}`}
        >
          {faq.map((item) => (
            <Accordion
              key={item.id}
              expanded={expanded === item.id.toString()}
              onChange={handleChange(item.id.toString())}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <p className={styles.accordion_title}>{item.title}</p>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.desc}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
}
