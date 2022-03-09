import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import LatestCryptoNewsItem from "./LatestCryptoNewsItem/LatestCryptoNewsItem";

const CryptoListHeader = styled("header")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "30px",
});

function LatestCryptoNewsList({ news, newsPage }) {
  console.log(news, "Crypto News");
  return (
    <div className="latest-news">
      {!newsPage && (
        <header className="latest-news__header">
          <CryptoListHeader className="crypto-list__header">
            <Typography variant="h4" component="h2">
              Latest Crypto News
            </Typography>
            <Link
              to="/news"
              style={{
                fontSize: "1.7rem",
                fontWeight: "bold",
                color: "#40A9FF",
              }}
              className="crypto-list__link"
            >
              Show More
            </Link>
          </CryptoListHeader>
        </header>
      )}
      <Grid container spacing={3}>
        {news?.length &&
          news?.map((news, index) => (
            <LatestCryptoNewsItem key={index} news={news} />
          ))}
      </Grid>
    </div>
  );
}

export default LatestCryptoNewsList;
