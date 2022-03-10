import React from "react";
import SidebarItem from "./SidebarItem/SidebarItem";
import SidebarLogo from "./SidebarLogo/SidebarLogo";
import { styled } from "@mui/system";
import HomeIcon from "@mui/icons-material/Home";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";

const AppSidebar = styled("aside")({
  backgroundColor: "rgb(0, 21, 41)",
  position: "fixed",
  top: 0,
  bottom: 0,
  width: "clamp(290px, calc(30vw + 20px), 320px)",
  paddingTop: "30px",
  padddingRight: "50px",
});

function Sidebar() {
  return (
    <AppSidebar className="sidebar">
      <SidebarLogo />
      <SidebarItem
        route="/"
        text="Home"
        icon={<HomeIcon className="sidebar__icon" />}
      />
      <SidebarItem
        route="/cryptocurrencies"
        text="Cryptocurrencies"
        icon={<CurrencyBitcoinIcon className="sidebar__icon" />}
      />
      <SidebarItem
        route="/news"
        text="News"
        icon={<LightbulbIcon className="sidebar__icon" />}
      />
    </AppSidebar>
  );
}

export default Sidebar;
