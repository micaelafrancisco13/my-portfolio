import React from "react";

import { Button } from "@mui/material";
import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";

const StyledButton = styled(Button)(({ theme }) => ({
  color: "white",
  padding: "0.8rem 1.6rem",
  borderRadius: 0,
}));

const StyledCloseIcon = styled(CloseIcon)(({ theme }) => ({
  color: "white",
}));

export { StyledButton, StyledCloseIcon };
