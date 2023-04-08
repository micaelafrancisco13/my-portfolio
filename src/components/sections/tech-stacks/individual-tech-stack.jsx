import { Box, Typography } from "@mui/material";
import React from "react";
import theme from "../../../theme/main";

const IndividualTechStack = ({ category, stacks }) => {
  const TECH_ICON_MARGIN_RIGHT = "1rem";

  return (
    <Box border={`1px solid ${theme.palette.text.primary}`} >
      <Typography
        p="0.8rem"
        fontWeight="600"
        color={theme.palette.text.secondary}
      >
        {category}
      </Typography>
      <Box p="0.8rem" borderTop={`1px solid ${theme.palette.text.primary}`}>
        {stacks.map((stack, index) => (
          <Box className="flex flex-y-center" key={index}>
            <Box mr={TECH_ICON_MARGIN_RIGHT}>{stack.icon}</Box>
            <Typography>{stack.name}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default IndividualTechStack;
