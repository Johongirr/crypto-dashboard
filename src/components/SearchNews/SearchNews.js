import React, { useState } from "react";
import { Select, MenuItem } from "@mui/material";

function SearchNews({ getSearchTerm }) {
  const [val, setVal] = useState("cryptocurrency");
  return (
    <Select
      sx={{ width: "400px", backgroundColor: "#fff", marginTop: "20px" }}
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      displayEmpty
      renderProps={() => val}
      value={val}
      label="Search For News"
      onChange={(e) => {
        setVal(e.target.value);
        getSearchTerm(e.target.value);
      }}
    >
      <MenuItem value="bitcoin">Bitcoin</MenuItem>
      <MenuItem value="cryptocurrency">Cryptocurrency</MenuItem>
      <MenuItem value="ethereum">Ethereum</MenuItem>
      <MenuItem value="altcoin">Altcoin</MenuItem>
      <MenuItem value="blockchain">Blockchain</MenuItem>
      <MenuItem value="cryptographu">Cryptography</MenuItem>
      <MenuItem value="decentralised">Decentralised</MenuItem>
      <MenuItem value="fiat currency">Fiat Currency</MenuItem>
      <MenuItem value="mining">Mining</MenuItem>
      <MenuItem value="token">Token</MenuItem>
      <MenuItem value="wallet">Wallet</MenuItem>
      <MenuItem value="airdrop">Airdrop</MenuItem>
      <MenuItem value="block cryptocurrency">Block</MenuItem>
      <MenuItem value="anti money laundering cryptocurrency">
        Anti-money laundering
      </MenuItem>
      <MenuItem value="buy wall cryptocurrency">Buy Wall</MenuItem>
      <MenuItem value="cap cryptocurrency">CAP</MenuItem>
      <MenuItem value="chain linking cryptocurrency">Chain Linking</MenuItem>
    </Select>
  );
}

export default SearchNews;
