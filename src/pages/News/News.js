import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import LatestCryptoNewsList from "../../components/LatestCryptoNewsList/LatestCryptoNewsList";
import { getLatestCryptoNews } from "../../apis/newsSearchApi";
import SearchNews from "../../components/SearchNews/SearchNews";

function News() {
  const [news, setNews] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getNews = (news) => {
      setNews(news);
    };
    getNews();
    getLatestCryptoNews(getNews, searchTerm);
  }, [searchTerm]);

  const getSearchTerm = (val) => setSearchTerm(val);

  return (
    <div className="news">
      <Typography variant="h4">
        Search For Latest News on Cryptocurrency
      </Typography>
      <SearchNews getSearchTerm={getSearchTerm} />
      {news ? <LatestCryptoNewsList newsPage news={news} /> : <p>Loading...</p>}
    </div>
  );
}

export default News;
