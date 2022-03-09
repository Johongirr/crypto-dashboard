import React from "react";
import { Select, MenuItem } from "@mui/material";

function CryptoFilter({ updateCoinHistoryPeriod }) {
  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      label="Filter Coin History"
      sx={{ width: "300px", backgroundColor: "#fff", marginTop: "40px" }}
      onChange={(e) => updateCoinHistoryPeriod(e.target.value)}
    >
      <MenuItem value="3h">3h</MenuItem>
      <MenuItem value="24h">24h</MenuItem>
      <MenuItem value="7d">7d</MenuItem>
      <MenuItem value="30d">30d</MenuItem>
      <MenuItem value="3m">3m</MenuItem>
      <MenuItem value="1y">1y</MenuItem>
      <MenuItem value="3y">3y</MenuItem>
      <MenuItem value="5y">5y</MenuItem>
    </Select>
  );
}

export default CryptoFilter;
