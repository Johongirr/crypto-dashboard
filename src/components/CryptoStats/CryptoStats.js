import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import CryptoStatsCard from "./CryptoStatsCard/CryptoStatsCard";
import { convertToMonetaryValue } from "../../utils/converToMonetaryValue";

function CryptoStats({ stats }) {
  console.log(stats);
  return (
    <div className="crypto-stats">
      <header className="crypto-stats__header">
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontSize: { xs: "1.8rem", sm: "2.5rem" } }}
        >
          Global Cryptocurrency Statistics
        </Typography>
      </header>
      {stats && (
        <Grid mt={4} container justifyContent="space-between">
          <Grid item lg="6">
            <Box>
              <CryptoStatsCard
                text="Total Cryptocurrencies"
                amount={Number(stats.totalCoins).toLocaleString("en-US")}
              />
            </Box>
            <Box>
              <CryptoStatsCard
                text="Total Market Cap"
                amount={convertToMonetaryValue(stats.totalMarketCap)}
              />
            </Box>
            <Box>
              <CryptoStatsCard text="Total" amount={stats.total} />
            </Box>
          </Grid>
          <Grid item lg="6">
            <Box>
              <CryptoStatsCard
                text="Total Exchanges"
                amount={stats.totalExchanges}
              />
            </Box>
            <Box>
              <CryptoStatsCard
                text="Total 24h Volume"
                amount={convertToMonetaryValue(stats.total24hVolume)}
              />
            </Box>
            <Box>
              <CryptoStatsCard
                text="Total Markets"
                amount={convertToMonetaryValue(stats.totalMarkets)}
              />
            </Box>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default CryptoStats;
