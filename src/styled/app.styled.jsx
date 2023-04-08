import React from "react";

import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { getContainerPadding } from "./common-styles";

const StyledContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.background.main,
  ...getContainerPadding(),
}));

export { StyledContainer };
