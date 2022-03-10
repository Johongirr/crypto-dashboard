import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../../images/crypto-log.png";
import HomeIcon from "@mui/icons-material/Home";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isMenuOpen]);
  return (
    <header className="mobile-menu" style={{ zIndex: "1" }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        className="mobile-menu__box"
      >
        <Box display="flex">
          <img
            width="40"
            src={Logo}
            alt="App logo"
            className="mobile-menu__logo"
          />
          <Typography
            variant="h5"
            color="white"
            component="h2"
            className="mobile-menu__logo-text"
          >
            <Link
              to="/"
              className="mobile-menu__logo-link"
              onClick={() => setIsMenuOpen(false)}
            >
              CryptoDashboard
            </Link>
          </Typography>
        </Box>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="hamburger__line"></div>
          <div className="hamburger__line"></div>
          <div className="hamburger__line"></div>
        </div>
      </Box>
      {isMenuOpen && (
        <nav className="mobile-menu__nav">
          <ul className="mobile-menu__list">
            <li className="mobile-menu__item">
              <Link to="/" className="mobile-menu__link" onClick={toggleMenu}>
                <HomeIcon className="mobile-menu__icon" />
                <span className="mobile-menu__text">Home</span>
              </Link>
            </li>
            <li className="mobile-menu__item">
              <Link
                to="/cryptocurrencies"
                className="mobile-menu__link"
                onClick={toggleMenu}
              >
                <CurrencyBitcoinIcon className="mobile-menu__icon" />
                <span className="mobile-menu__text">Cryptocurrencies</span>
              </Link>
            </li>

            <li className="mobile-menu__item">
              <Link
                to="/news"
                className="mobile-menu__link"
                onClick={toggleMenu}
              >
                <LightbulbIcon className="mobile-menu__icon" />
                <span className="mobile-menu__text">News</span>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default MobileMenu;
