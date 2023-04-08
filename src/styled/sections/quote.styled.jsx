import React from "react";

import { styled } from "@mui/system";
import { Typography } from "@mui/material";

const StyledQuoteSection = styled(Typography)(({ theme }) => ({
  color: "white",
  fontSize: "2.2rem",
  fontWeight: 500,
  lineHeight: "3.6rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.4rem",
  },
}));

export { StyledQuoteSection };
