import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import Crypto from "./components/Crypto/Crypto";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { styled } from "@mui/system";
import Home from "./pages/Home/Home";
import Cryptocurrencies from "./pages/Cryptocurrencies/Cryptocurrencies";
import News from "./pages/News/News";

const AppBox = styled("main")({
  padding: "30px 15px",

  backgroundColor: "#20304c",
  minHeight: "100vh",
  color: "#fff",
});

function App() {
  return (
    <BrowserRouter>
      <MobileMenu />
      <Sidebar />
      <AppBox className="app">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
          <Route path="/news" element={<News />} />
          <Route path="/cryptocurrencies/:cryptoId" element={<Crypto />} />
        </Routes>
      </AppBox>
    </BrowserRouter>
  );
}

export default App;

/**
 *  App
 *    MobileMenu
 *    Sidebar
 *      SidebarLogo
 *      SidebarItem
 *    Home
 *      CryptoStats
 *      CryptoList
 *        CryptoItem
 *      LatestCryptoNewsList
 *        LatestCryptoNewsItem
 *     Cryptocurrencies
 *        SearchCrypto
 *        CryptoList
 *          CryptoItem
 *     Exchanges
 *     News
 *        NewsFilter
 *        LatestCryptoNewsList
 *          LatestCryptoNewsItem
 *
 *   Algorithm
 *  1. Create Components folder and files in it (DONE)
 *  2. Build layout
 *  3. Get data from API and display it in home page
 *
 *
 */
