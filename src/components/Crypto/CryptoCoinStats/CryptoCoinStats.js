import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import CryptoCoinStatsList from "./CryptoCoinStatsList/CryptoCoinStatsList";

import MonetizationOnSharpIcon from "@mui/icons-material/MonetizationOnSharp";
import TagSharpIcon from "@mui/icons-material/TagSharp";
import EmojiEventsSharpIcon from "@mui/icons-material/EmojiEventsSharp";
import ErrorSharpIcon from "@mui/icons-material/ErrorSharp";
import StackedLineChartSharpIcon from "@mui/icons-material/StackedLineChartSharp";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import BoltSharpIcon from "@mui/icons-material/BoltSharp";
import DoneSharpIcon from "@mui/icons-material/DoneSharp";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";

function CryptoStats({ coin }) {
  console.log("CryptoCoinStats", coin);
  return (
    <Grid container spacing={5} mt={6}>
      <Grid item xs="12" md="6">
        <Typography variant="h5" mb={2}>
          {coin.name} Value Statistics
        </Typography>
        <Typography sx={{ color: "lightgray" }} mb={3}>
          An overview showing the statistics of Bitcoin, such as the base and
          quote currency, the rank, and the trading volume.
        </Typography>
        <CryptoCoinStatsList
          dollar
          icon={<MonetizationOnSharpIcon />}
          coin={coin.price}
          text="Price to USD"
        />
        <CryptoCoinStatsList
          icon={<TagSharpIcon />}
          coin={coin.rank}
          text="rank"
        />
        <CryptoCoinStatsList
          dollar
          icon={<BoltSharpIcon />}
          coin={coin["24hVolume"]}
          text="24h Volume"
        />
        <CryptoCoinStatsList
          dollar
          icon={<MonetizationOnSharpIcon />}
          coin={coin.marketCap}
          text="Market Cap"
        />
        <CryptoCoinStatsList
          dollar
          icon={<EmojiEventsSharpIcon />}
          coin={coin.allTimeHigh.price}
          text="All-time-high"
        />
      </Grid>
      <Grid item xs="12" md="6">
        <Typography variant="h5" mb={2}>
          Other Statistics Info
        </Typography>
        <Typography sx={{ color: "lightgray" }} mb={3}>
          An overview showing the statistics of Bitcoin, such as the base and
          quote currency, the rank, and the trading volume.
        </Typography>
        <CryptoCoinStatsList
          text="Number of Markets"
          icon={<StackedLineChartSharpIcon />}
          coin={coin.numberOfMarkets}
        />
        <CryptoCoinStatsList
          text="Number of Exchanges"
          icon={<CurrencyExchangeIcon />}
          coin={coin.numberOfExchanges}
        />
        <CryptoCoinStatsList
          text="Approved Supply"
          icon={<ErrorSharpIcon />}
          coin={coin.supply.confirmed ? <DoneSharpIcon /> : <CloseSharpIcon />}
        />
        <CryptoCoinStatsList
          text="Total Supply"
          icon={<ErrorSharpIcon />}
          coin={coin.numberOfMarkets}
          dollar
        />
        <CryptoCoinStatsList
          text="Circulating Suply"
          icon={<ErrorSharpIcon />}
          coin={coin.numberOfMarkets}
          dollar
        />
      </Grid>
    </Grid>
  );
}

export default CryptoStats;
