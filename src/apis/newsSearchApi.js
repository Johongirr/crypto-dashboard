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
      "x-rapidapi-host": process.env.REACT_APP_NEWS_SEARCH_HOST,
      "x-rapidapi-key": process.env.REACT_APP_API_KEY,
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
