import React from "react";
import { Box, Toolbar } from "@mui/material";
import { StyledDrawer } from "../../styled/common/drawer.styled";
import CloseIcon from "@mui/icons-material/Close";
import DrawerContent from "../navbar/drawer-content";
import Menu from "../icons/menu";
import MenuIcon from "@mui/icons-material/Menu";
import useDrawer from "../hooks/useDrawer";

const MenuDrawer = ({ anchor }) => {
  const [toggleDrawer, handleDrawerOpen, handleDrawerClose] = useDrawer();

  return (
    <>
      <Box className="flex-self-x-end">
        {!toggleDrawer ? (
          <Menu menuIcon={<MenuIcon />} onClick={handleDrawerOpen} />
        ) : (
          <Menu menuIcon={<CloseIcon />} onClick={handleDrawerClose} />
        )}
      </Box>
      <StyledDrawer
        anchor={anchor}
        open={toggleDrawer}
        onClose={handleDrawerClose}
        variant="temporary"
      >
        <Toolbar />
        <DrawerContent onHandleDrawerClose={handleDrawerClose} />
      </StyledDrawer>
    </>
  );
};

export default MenuDrawer;
