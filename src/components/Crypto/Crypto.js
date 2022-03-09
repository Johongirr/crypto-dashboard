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

function Crypto() {
  const [coinHistory, setCoinHistory] = useState(null);
  const [coin, setCoin] = useState(null);
  const [coinHistoryDate, setCoinHistoryDate] = useState("24h");
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
  }, [coinHistoryDate]);
  const updateCoinHistoryPeriod = (val) => setCoinHistoryDate(val);

  // console.log(coinHistory, coin);
  return (
    <div className="crypto" style={{ padding: "0 25px" }}>
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
        <p>Loading...</p>
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
 *
 *
 */
