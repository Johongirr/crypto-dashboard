import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import CryptoItem from "./CryptoItem/CryptoItem";
import SearchCrypto from "../../components/SearchCrypto/SearchCrypto";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

const CryptoListHeader = styled("header")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "20px",
});

function CryptoList({ coins, cryptoCurrencyPage, userVal }) {
  // console.log(coins);
  console.log(cryptoCurrencyPage);
  return (
    <div className="crypto-list">
      {!cryptoCurrencyPage && (
        <>
          <CryptoListHeader className="crypto-list__header">
            <Typography
              variant="h4"
              sx={{ fontSize: { xs: "1.8rem", sm: "2.5rem" } }}
              component="h2"
            >
              Top 10 Cryptos In The World
            </Typography>
            <Link
              to="/cryptocurrencies"
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
        </>
      )}

      <Grid mt={4} container className="crypto-list__box" spacing={3}>
        {cryptoCurrencyPage && coins?.length ? (
          coins?.filter((coin) =>
            coin.name.toLowerCase().includes(userVal.toLowerCase())
          ).length < 1 ? (
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                margin: "0 auto",
                fontSize: { xs: "2rem", sm: "2.5rem" },
              }}
            >
              There are (0) Matches
            </Typography>
          ) : (
            coins
              ?.filter((coin) =>
                coin.name.toLowerCase().includes(userVal.toLowerCase())
              )
              .map((coin) => <CryptoItem key={coin.uuid} coin={coin} />)
          )
        ) : (
          coins?.map((coin) => <CryptoItem key={coin.uuid} coin={coin} />)
        )}
      </Grid>
    </div>
  );
}

export default CryptoList;
