import React from "react";

import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

const StyledLine = styled(Box)(({ theme }) => ({
  height: "1px",
  width: "130px",
  background: theme.palette.accent.main,
  marginLeft: "2rem",
}));

const StyledViewAllText = styled(Typography)(({ theme }) => ({
  color: "white",
  cursor: "pointer",
  fontSize: "1.4rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.6rem",
  },
}));

export { StyledLine, StyledViewAllText };
