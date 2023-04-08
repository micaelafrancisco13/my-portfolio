import React from "react";

import { AppBar, Box, Toolbar } from "@mui/material";
import { styled } from "@mui/system";
import { getContainerPadding } from "../common-styles";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  position: "fixed",
  background: theme.palette.background.main,
}));

const StyledToolbar = styled(Toolbar)(() => ({
  ...getContainerPadding(),
}));

const StyledVerticalLine = styled(Box)(({ theme }) => ({
  background: theme.palette.text.primary,
  margin: "auto",
  width: "0.2rem",
  height: "33vh",
  marginBottom: "1rem",
}));

export { StyledAppBar, StyledToolbar, StyledVerticalLine };
