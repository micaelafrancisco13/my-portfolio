import { IconButton } from "@mui/material";
import React from "react";
import theme from "../../theme/main";

const Menu = ({ menuIcon, onClick }) => {
  return (
    <IconButton sx={{ color: theme.palette.text.primary }} onClick={onClick}>
      {menuIcon}
    </IconButton>
  );
};

export default Menu;
