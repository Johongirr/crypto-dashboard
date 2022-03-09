import React from "react";
import { Box, Typography } from "@mui/material";
import { convertToMonetaryValue } from "../../../../utils/converToMonetaryValue";

function CryptoCoinStatsList({ coin, icon, dollar, text }) {
  return (
    <Box
      className="crypto-stats-list"
      sx={{
        borderBottom: "1px solid #1c2941",
        padding: "20px 10px",
        "&:hover": {
          background: "#1c29415d",
          color: "#000",
        },
      }}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography display="flex" alignItems="center">
        <span style={{ marginRight: "10px" }}>{icon}</span> {text}
      </Typography>
      <Typography>
        {dollar ? "$" : ""}{" "}
        {dollar
          ? convertToMonetaryValue(coin)
          : typeof coin !== "object"
          ? Number(coin).toLocaleString("en-US")
          : coin}
      </Typography>
    </Box>
  );
}

export default CryptoCoinStatsList;
