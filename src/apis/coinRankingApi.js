var axios = require("axios").default;

export const fetchCoins = (url, method, limit = "50") => {
  var options = {
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
      tiers: "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit,
      offset: "0",
    },
    headers: {
      "x-rapidapi-host": process.env.REACT_APP_COIN_RANKING_HOST,
      "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    },
  };
  try {
    let data;
    axios.get(url, options).then((res) => {
      data = { coins: res.data.data.coins, stats: res.data.data.stats };
      method(data);
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const fetchCoinHistory = (url, method, timePeriod = "24h") => {
  var options = {
    method: "GET",
    url,
    params: { referenceCurrencyUuid: "yhjMzLPhuIDl", timePeriod },
    headers: {
      "x-rapidapi-host": "coinranking1.p.rapidapi.com",
      "x-rapidapi-key": "13c31e2c46mshe091625ebaddd3ep1f6740jsnb6d721c89b72",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      method(response.data.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const getCoin = (url, method) => {
  var options = {
    method: "GET",
    url,
    params: { referenceCurrencyUuid: "yhjMzLPhuIDl", timePeriod: "24h" },
    headers: {
      "x-rapidapi-host": "coinranking1.p.rapidapi.com",
      "x-rapidapi-key": "13c31e2c46mshe091625ebaddd3ep1f6740jsnb6d721c89b72",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      method(response.data.data.coin);
    })
    .catch(function (error) {
      console.error(error);
    });
};
