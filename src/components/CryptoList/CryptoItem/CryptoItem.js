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
import { convertToMonetaryValue } from "../../../utils/converToMonetaryValue";

function CryptoItem({ coin }) {
  console.log("CryptoItem", coin);
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Link style={{ width: "100%" }} to={`/cryptocurrencies/${coin.uuid}`}>
        <Card
          className="crypto-card"
          sx={{
            backgroundColor: "#0c1a32",
            color: "#fff",
          }}
        >
          <CardContent className="crypto-card__body">
            <Box
              position="relative"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              className="crypto-card__header"
            >
              <Typography variant="h6" sx={{ color: coin["color"] }}>
                {coin.rank}. {coin.name}
              </Typography>
              <CardMedia
                sx={{ width: "40px" }}
                component="img"
                image={coin.iconUrl}
                alt={coin.name}
                className="crypto-card__img"
              />
            </Box>
            <Box mt={3}>
              <Typography mb={2} gutterBottom>
                Price: {convertToMonetaryValue(coin.price)}
              </Typography>
              <Typography mb={2} gutterBottom>
                Market Cap: {convertToMonetaryValue(coin.marketCap)}
              </Typography>
              <Typography mb={2} gutterBottom>
                Daily Change: {coin.change}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
}

export default CryptoItem;
