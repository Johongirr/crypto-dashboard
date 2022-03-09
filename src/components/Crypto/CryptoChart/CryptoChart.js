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
import { DateTime } from "luxon";
import { convertToMonetaryValue } from "../../../utils/converToMonetaryValue";

import { Typography, Box } from "@mui/material";

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
      labels: coinHistory?.history?.map((history) => {
        let day = DateTime.now(history.timestamp).toJSDate().getDay();
        let month = DateTime.now(history.timestamp).toJSDate().getMonth() + 1;
        let year = DateTime.now(history.timestamp).toJSDate().getFullYear();
        return `${day.toString().padStart(2, "0")}/${month
          .toString()
          .padStart(2, "0")}/${year}`;
      }),
      datasets: [
        {
          label: `${coinName} Price in USD`,
          data: coinHistory?.history?.map((history) => history.price),
          backgroundColor: "rgba(153, 102, 255,.1)",
          fill: true,
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });
  }, []);
  console.log("coinChart", coinHistory);
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        className="crypto-chart"
        alignItems="center"
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
