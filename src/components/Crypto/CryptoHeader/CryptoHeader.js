import React from "react";
import { Typography, Box } from "@mui/material";

function CryptoHeader({ coin }) {
  return (
    <header
      className="crypto__header"
      style={{ borderBottom: "2px solid lightgray", paddingBottom: "40px" }}
    >
      <Box textAlign="center" mt={2}>
        <Typography variant="h4" fontWeight="bold" component="h2" mb={3}>
          {coin.name} ({coin.symbol}) Price
        </Typography>
        <Typography sx={{ color: "lightgray" }}>
          <strong>{coin.name}</strong> live price in US Dollar (USD). View value
          statistics, market cap, and suply.
        </Typography>
      </Box>
    </header>
  );
}

export default CryptoHeader;
