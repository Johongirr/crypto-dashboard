import React, { useState, useEffect } from "react";
import CryptoStats from "../../components/CryptoStats/CryptoStats";
import CryptoList from "../../components/CryptoList/CryptoList";
import LatestCryptoNewsList from "../../components/LatestCryptoNewsList/LatestCryptoNewsList";
import CircularProgress from "@mui/material/CircularProgress";
import { fetchCoins } from "../../apis/coinRankingApi.js";
import { getLatestCryptoNews } from "../../apis/newsSearchApi";
import { Typography, Button, Box } from "@mui/material";
import { Offline, Online, Detector } from "react-detect-offline";
import OfflineUser from "../../components/OfflineUser/OfflineUser";
import axios from "axios";

function Home() {
  const [cryptoCurrencies, setCryptoCurrencies] = useState(null);
  const [news, setNews] = useState([]);
  const [isUserOnline, setIsUserOnline] = useState(false);

  useEffect(() => {
    const getCoins = (coins) => {
      setCryptoCurrencies(coins);
    };
    const getNews = (news) => {
      setNews(news);
    };

    fetchCoins("https://coinranking1.p.rapidapi.com/coins", getCoins, 10);
    getLatestCryptoNews(getNews);
  }, [isUserOnline]);

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Detector
        render={({ online }) => {
          online ? setIsUserOnline(true) : setIsUserOnline(false);
          return <p></p>;
        }}
      />
      {cryptoCurrencies ? (
        <>
          <CryptoStats stats={cryptoCurrencies.stats} />
          <CryptoList coins={cryptoCurrencies.coins} />
          {/* <LatestCryptoNewsList news={news} /> */}
        </>
      ) : (
        <>
          <Online>
            <CircularProgress
              sx={{
                position: "absolute",
                top: { xs: "35%", sm: "40%" },
                left: { xs: "40%", sm: "50%" },

                transform: "translate(-50%, -50%)",
              }}
            />
          </Online>
          <OfflineUser />
        </>
      )}
    </div>
  );
}

export default Home;
