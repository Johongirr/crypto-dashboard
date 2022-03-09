import React from "react";
import { styled } from "@mui/system";
import { NavLink } from "react-router-dom";

const SidebarItemBox = styled("div")({
  paddingLeft: "20px",
});

function SidebarItem({ icon, text, route }) {
  return (
    <SidebarItemBox className="sidebar-item__box">
      <NavLink to={route} className="sidebar-item__link">
        <span className="sidebar-item__icon">{icon}</span>
        <span className="sidebar-item__text">{text}</span>
      </NavLink>
    </SidebarItemBox>
  );
}

export default SidebarItem;
