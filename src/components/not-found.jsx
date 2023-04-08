import { Box } from "@mui/material";
import React from "react";

const NotFound = () => {
  return (
    <Box textAlign="center">
      <img
        src={require("../images/404.png")}
        alt={"Illustration of a cat putting up a 404 sign"}
        style={{ maxHeight: `90vh` }}
      />
    </Box>
  );
};

export default NotFound;
