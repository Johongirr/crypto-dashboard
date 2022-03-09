import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { fetchCoins } from "../../apis/coinRankingApi.js";
import CryptoList from "../../components/CryptoList/CryptoList";
import SearchCrypto from "../../components/SearchCrypto/SearchCrypto";

function Cryptocurrencies() {
  const [cryptoCurrencies, setCryptoCurrencies] = useState(null);
  const [userVal, setUserVal] = useState("");
  useEffect(() => {
    const getCoins = (coins) => {
      setCryptoCurrencies(coins);
    };
    getCoins();
    fetchCoins("https://coinranking1.p.rapidapi.com/coins", getCoins, 100);
  }, []);

  const updateUserVal = (val) => setUserVal(val);
  return (
    <div>
      <Typography variant="h4">
        Top 100 Cryptocurrencies in the world
      </Typography>
      <SearchCrypto updateUserVal={updateUserVal} />
      {cryptoCurrencies ? (
        <CryptoList
          coins={cryptoCurrencies.coins}
          userVal={userVal}
          cryptoCurrencyPage
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Cryptocurrencies;
