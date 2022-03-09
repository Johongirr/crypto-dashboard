var axios = require("axios").default;

export const getLatestCryptoNews = (method, q = "cryptocurrency") => {
  var options = {
    method: "GET",
    url: "https://bing-news-search1.p.rapidapi.com/news/search",
    params: {
      q,
      freshness: "Day",
      textFormat: "Raw",
      safeSearch: "Off",
    },
    headers: {
      "x-bingapis-sdk": "true",
      "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
      "x-rapidapi-key": "13c31e2c46mshe091625ebaddd3ep1f6740jsnb6d721c89b72",
    },
  };
  axios
    .request(options)
    .then(function (response) {
      console.log(response);
      method(response.data.value);
    })
    .catch(function (error) {
      console.error(error.message);
    });
};
