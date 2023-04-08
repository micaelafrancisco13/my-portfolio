import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import theme from "./../../theme/main";

const NavbarSVG = () => {
  let width = "16";
  let height = "16";
  const smallAndLarger = useMediaQuery(theme.breakpoints.up("sm"));
  const largeAndAbove = useMediaQuery(theme.breakpoints.up("lg"));

  if (smallAndLarger) {
    width = "18";
    height = "18";
  }
  if (largeAndAbove) {
    width = "20";
    height = "20";
  }

  return (
    <Box className="flex-y-center">
      <svg
        width={width}
        height={height}
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M39 0H26V13H13H0V26V39V52H13H26V39H39H52V26V13V0H39ZM13 39H26V26H39V13H26V26H13V39Z"
          fill="white"
        />
      </svg>
    </Box>
  );
};

export default NavbarSVG;
