import React from "react";
import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";

const CryptoStatsCardBox = styled("div")({
  backgroundColor: "#0c1a32",
  boxShadow: "0 0 15px rgba(0, 0, 0, .2)",
  transition: "all .5s ease-out",
  "&:hover": {
    transform: "scale(1.03)",
  },
  width: "250px",
  marginBottom: "20px",
  padding: "20px",
});

function CryptoStatsCard({ text, amount }) {
  return (
    <CryptoStatsCardBox>
      <Typography color="gray">{text}</Typography>
      <Typography variant="h6">{amount}</Typography>
    </CryptoStatsCardBox>
  );
}

export default CryptoStatsCard;
