import React, { useLayoutEffect } from "react";
import { Box } from "@mui/material";
import Loading from "./loading";
import Sections from "./sections";
import useSpinner from "./hooks/useSpinner";

const Main = ({ linksRef, navbarRef }) => {
  const [isLoading, handleStartLoading, handleStopLoading] = useSpinner();

  useLayoutEffect(() => {
    handleStartLoading();
    setTimeout(() => {
      handleStopLoading();
    }, 247.5);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Box component="main">
          <Sections linksRef={linksRef} navbarRef={navbarRef} />
        </Box>
      )}
    </>
  );
};

export default Main;
