import React from "react";
import {
  Box,
  Fade,
  Grid,
  Slide,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { StyledLine } from "../../styled/sections/projects/projects.styled";
import theme from "../../theme/main";
import Avatar from "../../images/yt-channels/avatar";
import { getYtChannels } from "../../utils/yt-channels";
import { useInView } from "react-intersection-observer";

const AboutMe = ({ aboutMeRef }) => {
  const smallAndLarger = useMediaQuery(theme.breakpoints.up("sm"));
  const largeAndLarger = useMediaQuery(theme.breakpoints.up("lg"));
  const ytChannels = [...getYtChannels()];
  const { ref: channelsRef, inView: areChannelsInView } = useInView();
  const { ref: digitalArtRef, inView: isDigitalArtInView } = useInView();

  const digitalArtComponent = (
    <img
      className="digital-art-borealis"
      src={require("../../images/dall-e-image.png")}
      alt="Digital art of a woman sitting on a computer chair with her laptop, outside, overlooking the Auora Borealis above her"
    />
  );

  return (
    <Box
      // mb={{ xs: "10rem", lg: "14rem", xl: "16rem", xxl: "25rem" }}
      mb={{ xs: "10rem", lg: "14rem", xl: "18rem", xxl: "22rem" }}
      sx={{ height: { lg: "100vh" } }}
      component="section"
    >
      <Grid container>
        <Grid item xs={12} md={7}>
          <Box className="flex flex-y-center flex-no-wrap" mb="4.8rem">
            <Typography
              fontWeight="500"
              variant="h2"
              className="offset-section"
              id="about-me"
              ref={aboutMeRef}
            >
              <span style={{ color: theme.palette.accent.main }}>#</span>
              about-me
            </Typography>
            {smallAndLarger && <StyledLine sx={{ flexGrow: 1 }} />}
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        spacing="2.5rem"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={7}>
          <Typography>
            Hi, I'm Ela! A 4th year undergraduate IT student at Bulacan State
            University. With my passion for technology and love for learning, I
            always strive to keep up with the latest trends. Below are some of
            my favorite tech-related YouTube channels - I enjoy watching them
            all, they're a must-see!
            {/* I have experience in HTML, CSS, JavaScript, and web
            development libraries and frameworks such as React and Express.
            Although I am well-versed in web development, I am currently looking
            to expand my skill set and learn more about mobile development. */}
          </Typography>
          <br />
          {/* <Typography>
            With my passion for technology and love for learning, I always
            strive to keep up with the latest trends. Below are some of my
            favorite tech-related YouTube channels - I enjoy watching them all,
            they're a must-see!
          </Typography> */}
          <br />
          <Grid container spacing="2rem" ref={channelsRef}>
            {ytChannels.map((channel, index) => (
              <Fade
                key={index}
                in={areChannelsInView}
                {...(areChannelsInView ? { timeout: channel.timeout } : {})}
              >
                <Grid
                  item
                  xs={12}
                  sm={6}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Avatar ytChannel={channel} />
                </Grid>
              </Fade>
            ))}
          </Grid>
        </Grid>
        <Grid item xs md ref={digitalArtRef} orientation="horizontal">
          {!largeAndLarger ? (
            digitalArtComponent
          ) : (
            <Slide
              direction="right"
              in={isDigitalArtInView}
              mountOnEnter
              unmountOnExit
              {...(isDigitalArtInView ? { timeout: 2000 } : {})}
            >
              {digitalArtComponent}
            </Slide>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;

{
  /* <Typography>
I have worked on various projects and have a strong communication
skills. As the group leader for our capstone, I also took on the
responsibility of being the sole developer for the project.
</Typography>  */
}
