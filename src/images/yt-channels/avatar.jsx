import React from "react";
import { Box, Typography } from "@mui/material";
import theme from "../../theme/main";

const Avatar = ({ ytChannel }) => {
  const { name, avatarFileName, alt } = ytChannel;

  return (
    <Box className="flex flex-y-center yt-channel-container">
      <img
        alt={alt}
        className="yt-channel-avatar"
        height="25"
        width="25"
        src={require(`../yt-channels/${avatarFileName}`)}
      />
      <Typography
        fontSize="1.3rem"
        fontWeight="700"
        color={theme.palette.text.secondary}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default Avatar;
