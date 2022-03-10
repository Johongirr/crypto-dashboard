import React, { useEffect, useState } from "react";
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
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function CryptoItem({ coin }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = [
      {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
    ];
    setData(coin.sparkline.map((val, i) => ({ uv: val, pv: val, amt: val })));
  }, []);

  console.log("CryptoItem", coin, data);
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Link style={{ width: "100%" }} to={`/cryptocurrencies/${coin.uuid}`}>
        <Card
          className="crypto-card"
          sx={{
            backgroundColor: "#0c1a32",
            color: "#fff",
            transition: "all .5s ease-out",
            boxShadow: "0 0 15px rgba(0, 0, 0, .2)",
            "&:hover": {
              transform: "scale(1.03)",
            },
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
              {data && (
                <ResponsiveContainer width="100%" aspect={10}>
                  <LineChart
                    style={{ "@media(max-width: 500px)": { width: "200px" } }}
                    width={200}
                    height={40}
                    data={data}
                  >
                    <Line
                      type="monotone"
                      dataKey="uv"
                      stroke="#8884d8"
                      strokeWidth={1}
                    />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </Box>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
}

export default CryptoItem;
