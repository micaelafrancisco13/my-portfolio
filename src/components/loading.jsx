import { Box } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Box height="100vh" className="flex flex-center">
      <span className="loader" />
    </Box>
  );
};

export default Loading;
