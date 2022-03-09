import React, { useState, useEffect } from "react";
import CryptoStats from "../../components/CryptoStats/CryptoStats";
import CryptoList from "../../components/CryptoList/CryptoList";
import LatestCryptoNewsList from "../../components/LatestCryptoNewsList/LatestCryptoNewsList";

import { fetchCoins } from "../../apis/coinRankingApi.js";
import { getLatestCryptoNews } from "../../apis/newsSearchApi";
import axios from "axios";

function Home() {
  const [cryptoCurrencies, setCryptoCurrencies] = useState(null);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getCoins = (coins) => {
      setCryptoCurrencies(coins);
    };
    fetchCoins("https://coinranking1.p.rapidapi.com/coins", getCoins, 10);
    const getNews = (news) => {
      setNews(news);
    };
    getLatestCryptoNews(getNews);
  }, []);
  // console.log(cryptoCurrencies);
  return (
    <div>
      {cryptoCurrencies ? (
        <>
          <CryptoStats stats={cryptoCurrencies.stats} />
          <CryptoList coins={cryptoCurrencies.coins} />
          {/* <LatestCryptoNewsList news={news} /> */}
        </>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
}

export default Home;
