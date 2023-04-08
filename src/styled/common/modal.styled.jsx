import React from "react";

import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { getContainerMargin } from "./../common-styles";

const StyledModalContentContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
}));

const StyledModalContentMainContainer = styled(Box)(({ theme }) => ({
  ...getContainerMargin(),
  padding: "1rem",
  background: theme.palette.background.main,
  border: `2px solid ${theme.palette.text.primary}`,
  boxShadow: "0 3px 7px rgba(0, 0, 0, 0.3)",
  margin: "0 1.6rem",
  display: "inline-block",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "90%",
  },
  [theme.breakpoints.up("md")]: {
    width: "80%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "70%",
  },
}));

export { StyledModalContentContainer, StyledModalContentMainContainer };
