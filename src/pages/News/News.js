import React, { useState, useEffect } from "react";
import { Typography, Button, Box } from "@mui/material";
import LatestCryptoNewsList from "../../components/LatestCryptoNewsList/LatestCryptoNewsList";
import { getLatestCryptoNews } from "../../apis/newsSearchApi";
import SearchNews from "../../components/SearchNews/SearchNews";
import CircularProgress from "@mui/material/CircularProgress";
import { Offline, Online, Detector } from "react-detect-offline";
import OfflineUser from "../../components/OfflineUser/OfflineUser";

function News() {
  const [news, setNews] = useState(null);
  const [searchTerm, setSearchTerm] = useState("cryptocurrency");
  const [isUserOnline, setIsUserOnline] = useState(false);
  useEffect(() => {
    const getNews = (news) => {
      setNews(news);
    };
    getLatestCryptoNews(getNews, searchTerm);
  }, [searchTerm, isUserOnline]);

  const getSearchTerm = (val) => setSearchTerm(val);

  return (
    <div className="news" style={{ position: "relative", minHeight: "100vh" }}>
      <Detector
        render={({ online }) => {
          online ? setIsUserOnline(true) : setIsUserOnline(false);
          return <p></p>;
        }}
      />
      <Typography
        variant="h4"
        sx={{ fontSize: { xs: "1.8rem", sm: "2.5rem" } }}
      >
        Search For Latest News on Cryptocurrency
      </Typography>
      <SearchNews getSearchTerm={getSearchTerm} />
      {news ? (
        <LatestCryptoNewsList newsPage news={news} />
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
          <Box sx={{ position: "relative", top: "250px" }}>
            <OfflineUser />
          </Box>
        </>
      )}
    </div>
  );
}

export default News;
