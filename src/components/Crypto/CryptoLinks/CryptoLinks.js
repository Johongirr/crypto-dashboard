import React from "react";
import CryptoLinkItem from "./CryptoLinkItem/CryptoLinkItem";
import { Box, Typography } from "@mui/material";

function CryptoLinks({ coin }) {
  console.log("CryptoLinks", coin);
  return (
    <Box>
      {coin?.links &&
        coin?.links.map((link, index) => (
          <CryptoLinkItem key={index} link={link} />
        ))}
    </Box>
  );
}

export default CryptoLinks;
