import { Toolbar } from "@mui/material";
import { StyledAppBar, StyledToolbar } from "../../styled/navbar/navbar.styled";
import NavbarContent from "./navbar-content";
import React from "react";

const Navbar = ({ navbarRef }) => {
  return (
    <>
      <StyledAppBar elevation={0}>
        <StyledToolbar component="nav">
          <NavbarContent navbarRef={navbarRef} />
        </StyledToolbar>
      </StyledAppBar>
      <Toolbar />
    </>
  );
};

export default Navbar;
