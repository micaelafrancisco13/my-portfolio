import React from "react";

import { styled } from "@mui/system";
import { Card, CardActions, Typography } from "@mui/material";
import { StyledButton } from "../../common/button.styled";

const StyledCard = styled(Card)(({ theme }) => ({
  background: "transparent",
  border: `1px solid ${theme.palette.text.primary}`,
}));

const StyledProjectDescription = styled(Typography)(() => ({
  margin: "1.6rem 0",
}));

const StyledCardActions = styled(CardActions)(() => ({
  padding: 0,
}));

const StyledCardButton = styled(StyledButton)(() => ({
  whiteSpace: "nowrap",
  minWidth: "auto",
  marginRight: "1rem",
}));

const StyledPrivateRepoButton = styled(StyledButton)(({ theme }) => ({
  borderColor: theme.palette.text.primary,
  color: theme.palette.text.primary,
}));

export {
  StyledCard,
  StyledProjectDescription,
  StyledPrivateRepoButton,
  StyledCardActions,
  StyledCardButton,
};
