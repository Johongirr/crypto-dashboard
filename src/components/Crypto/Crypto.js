import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  CryptoHeader,
  CryptoFilter,
  CryptoChart,
  CryptoCoinStats,
  CryptoInfo,
} from "./index";
import { fetchCoinHistory, getCoin } from "../../apis/coinRankingApi";
import CircularProgress from "@mui/material/CircularProgress";
import { Offline, Online, Detector } from "react-detect-offline";
import { Typography, Button, Box } from "@mui/material";
import OfflineUser from "../OfflineUser/OfflineUser";

function Crypto() {
  const [coinHistory, setCoinHistory] = useState(null);
  const [coin, setCoin] = useState(null);
  const [coinHistoryDate, setCoinHistoryDate] = useState("24h");
  const [isUserOnline, setIsUserOnline] = useState(false);
  const { cryptoId } = useParams();
  useEffect(() => {
    console.log(coinHistoryDate);
    const getCoinHistory = (history) => {
      setCoinHistory(history);
    };

    fetchCoinHistory(
      `https://coinranking1.p.rapidapi.com/coin/${cryptoId}/history`,
      getCoinHistory,
      coinHistoryDate
    );
    const getSingleCoin = (coin) => {
      setCoin(coin);
    };
    getCoin(
      `https://coinranking1.p.rapidapi.com/coin/${cryptoId}`,
      getSingleCoin
    );
  }, [coinHistoryDate, isUserOnline]);
  const updateCoinHistoryPeriod = (val) => setCoinHistoryDate(val);

  // console.log(coinHistory, coin);
  return (
    <div
      className="crypto"
      style={{ position: "relative", padding: "0 25px", minHeight: "100vh" }}
    >
      {coin && coinHistory ? (
        <>
          <CryptoHeader coin={coin} />
          <CryptoFilter updateCoinHistoryPeriod={updateCoinHistoryPeriod} />
          <CryptoChart
            coinHistory={coinHistory}
            coinName={coin.name}
            coinPrice={coin.price}
            coinChange={coin.change}
          />
          <CryptoCoinStats coin={coin} />
          <CryptoInfo
            coinInfo={coin.description}
            coinName={coin.name}
            coin={coin}
          />
        </>
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

export default Crypto;

/**
 *  Crypto
 *    CryptoHeader
 *    CryptoFilter
 *    CryptoChart
 *    CryptoStats
 *    CryptoInfo
 *    CryptoLinks
 */
