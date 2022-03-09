import React from "react";
import parse from "html-react-parser";
import { Grid, Box, Typography } from "@mui/material";
import { CryptoLinks } from "../index";

function CryptoInfo({ coinInfo, coinName, coin }) {
  // console.log("CryptoInfo", coinInfo);
  return (
    <Box mt={6}>
      <Grid container spacing={5}>
        <Grid item xs="12" md="6">
          <Typography variant="h4" fontWeight="bold" mb={2}>
            What is {coinName}?
          </Typography>
          <div style={{ whiteSpace: "pre-wrap" }}>{parse(coinInfo)}</div>
        </Grid>
        <Grid item xs="12" md="6">
          <Typography variant="h4" fontWeight="bold" mb={2}>
            {coinName} Links
          </Typography>
          <CryptoLinks coin={coin} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default CryptoInfo;
