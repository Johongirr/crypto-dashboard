import React from "react";
import Logo from "../../../images/crypto-log.png";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

const LogoBox = styled("div")({
  paddingLeft: "20px",
  marginBottom: "35px",
  display: "flex",
  alignItems: "center",
});
const SidebarImg = styled("img")({
  width: "40px",
  marginRight: "10px",
});

function SidebarLogo() {
  return (
    <LogoBox className="sidebar-logo__box">
      <SidebarImg
        width="40"
        src={Logo}
        alt="app logo"
        className="sidebar-logo__img"
      />
      <Typography variant="h5" component="h2">
        <Link to="/" className="sidebar-logo__link">
          CryptoDashboard
        </Link>
      </Typography>
    </LogoBox>
  );
}

export default SidebarLogo;
