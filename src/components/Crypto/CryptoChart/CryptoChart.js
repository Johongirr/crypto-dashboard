import React, { useState, useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment";
import { convertToMonetaryValue } from "../../../utils/converToMonetaryValue";
import { Typography, Box } from "@mui/material";
import ArrowDropDownUpIcon from "@mui/icons-material/ArrowDropDown";
import ArrowUpIcon from "@mui/icons-material/ArrowDropUp";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

function CryptoChart({ coinHistory, coinName, coinPrice, coinChange }) {
  const [chartData, setChartData] = useState([]);
  const [options, setOptions] = useState("");

  useEffect(() => {
    console.log(coinHistory);
    const options = {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Cryptocurrency prices",
        },
        legend: {
          position: "top as const",
        },
        title: {
          display: true,
          text: `${coinName} Price in USD`,
        },
      },
    };
    setOptions(options);
    setChartData({
      labels: coinHistory?.history?.reverse()?.map((history) => {
        return moment.unix(history.timestamp).format("MM/DD/YYYY");
      }),
      datasets: [
        {
          label: `${coinName} Price in USD`,
          data: coinHistory?.history?.map((history) => history.price),
          backgroundColor: "rgba(153, 102, 255,.1)",
          fill: true,
          borderColor: ["pink"],
          borderWidth: 1,
          color: "#fff",
        },
      ],
    });
  }, [coinHistory]);
  console.log("coinChart", coinHistory);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          className: "crypto-chart",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
        mt={2}
        mb={4}
      >
        <Typography variant="h4">{coinName} Price Chart</Typography>
        <Box display="flex" alignItems="center">
          <Typography fontWeight="bold" mr={4}>
            Change: {coinHistory.change}%
          </Typography>
          <Typography fontWeight="bold">
            Current {coinName} Price: ${convertToMonetaryValue(coinPrice)}
          </Typography>
        </Box>
      </Box>
      {options && chartData && <Line options={options} data={chartData} />}
    </>
  );
}

export default CryptoChart;
