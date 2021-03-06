import React, { useState, useEffect } from "react";
import { Typography, Button, Box } from "@mui/material";
import { fetchCoins } from "../../apis/coinRankingApi.js";
import CryptoList from "../../components/CryptoList/CryptoList";
import SearchCrypto from "../../components/SearchCrypto/SearchCrypto";
import CircularProgress from "@mui/material/CircularProgress";
import { Offline, Online, Detector } from "react-detect-offline";

function Cryptocurrencies() {
  const [cryptoCurrencies, setCryptoCurrencies] = useState(null);
  const [userVal, setUserVal] = useState("");
  const [isUserOnline, setIsUserOnline] = useState(false);

  useEffect(() => {
    console.log("online");
    const getCoins = (coins) => {
      setCryptoCurrencies(coins);
    };
    fetchCoins("https://coinranking1.p.rapidapi.com/coins", getCoins, 100);
  }, [isUserOnline]);

  const updateUserVal = (val) => setUserVal(val);

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Typography
        variant="h4"
        sx={{
          marginBottom: "15px",
          fontSize: { xs: "1.7rem", sm: "2.5rem" },
        }}
      >
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
        <CircularProgress
          sx={{
            position: "absolute",
            top: { xs: "35%", sm: "40%" },
            left: { xs: "40%", sm: "50%" },

            transform: "translate(-50%, -50%)",
          }}
        />
      )}
    </div>
  );
}

export default Cryptocurrencies;
