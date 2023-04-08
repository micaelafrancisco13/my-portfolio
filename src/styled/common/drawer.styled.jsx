import React from "react";

import { Drawer } from "@mui/material";
import { styled } from "@mui/system";

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiPaper-root": {
    width: "100%",
    background: theme.palette.background.main,
    height: "100vh",
  },
}));

export { StyledDrawer };
