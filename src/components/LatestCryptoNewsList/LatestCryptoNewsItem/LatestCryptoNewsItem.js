import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Box,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import { DateTime } from "luxon";
import { truncateText } from "../../../utils/textTruncate";
import CryptoPlaceholderImg from "../../../images/crypto-image.jpg";

function LatestCryptoNewsItem({ news }) {
  console.log("News item", news.name.length);
  return (
    <Grid item xs="12" sm="6" md="6" lg="4">
      <a style={{ width: "100%" }} href={news?.url} target="_blank">
        <Card
          className="news-card"
          sx={{
            backgroundColor: "#0c1a32",
            color: "#fff",
          }}
        >
          <CardMedia
            component="img"
            height="250"
            alt={news.name}
            image={
              news?.image?.thumbnail?.contentUrl
                ? news?.image?.thumbnail?.contentUrl
                : CryptoPlaceholderImg
            }
          />
          <CardContent className="news-card__body">
            <Box className="news-card__header">
              <Typography variant="h6" gutterBottom mb={2}>
                {truncateText(news.name, 60)}
              </Typography>
              <Typography mb={3}>
                {truncateText(news.description, 80)}
              </Typography>
              <Typography mb={3} color="gray">
                Published at:{" "}
                {DateTime.fromISO(news.datePublished).toFormat(
                  "yyyy LLL dd hh:mm:ss"
                )}
              </Typography>
              <Button variant="contained">Read More</Button>
            </Box>
          </CardContent>
        </Card>
      </a>
    </Grid>
  );
}

export default LatestCryptoNewsItem;
