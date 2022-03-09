import React from "react";
import { Box, Typography } from "@mui/material";

function CryptoLinkItem({ link }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        borderBottom: "1px solid #1c2941",
        padding: "20px 10px",
        "&:hover": {
          background: "#1c29415d",
          color: "#000",
        },
      }}
    >
      <Typography>{link.type}</Typography>
      <Typography color="primary" fontWeight="bold">
        <a href={link.url} target="_blank">
          {link.name}
        </a>
      </Typography>
    </Box>
  );
}

export default CryptoLinkItem;
