import { Box, Grid } from "@mui/material";
import React from "react";

const YouTubeVideo = ({ videoId }) => {
  return (
    <Grid item xs={12}>
      <Box className="flex flex-center video-container">
        <iframe
          className="iframe"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </Box>
    </Grid>
  );
};

export default YouTubeVideo;
