import { Box, Grid, Slide, Typography, useMediaQuery } from "@mui/material";
import Me from "../../images/Me.png";
import theme from "./../../theme/main";
import React from "react";
import { StyledSeeProjectsButton } from "../../styled/sections/hero.styled";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const Hero = ({ heroRef }) => {
  const largeAndAbove = useMediaQuery(theme.breakpoints.up("lg"));
  const { ref: titleRef, inView: isTitleInView } = useInView();

  return (
    <Box className="hero-block">
      <Grid container columnSpacing={{ sm: "3.2rem" }}>
        <Grid item xs={12} sm={6} className="flex flex-y-center">
          <Box>
            <Box className="offset-section" ref={heroRef} id="hero">
              {largeAndAbove ? (
                <Box ref={titleRef}>
                  <Slide
                    in={isTitleInView}
                    direction={isTitleInView ? "up" : "right"}
                    timeout={1500}
                  >
                    <Typography variant="h1">
                      Hi! My name is <span className="accent-text">Ela</span>{" "}
                      and I
                      <br /> am a
                      <span className="accent-text"> full-stack developer</span>
                      .
                    </Typography>
                  </Slide>
                </Box>
              ) : (
                <Box ref={titleRef}>
                  <Slide
                    in={isTitleInView}
                    direction={isTitleInView ? "up" : "right"}
                    timeout={1500}
                  >
                    <Typography variant="h1">
                      Hi! My name is <br />
                      <span className="accent-text">Ela</span> and I am a <br />
                      <span className="accent-text">full-stack</span> <br />
                      <span className="accent-text"> developer</span>.
                    </Typography>
                  </Slide>
                </Box>
              )}
            </Box>
            <Box className="info-text">
              <Typography>
                With a background in Information Technology, I have the skills
                and knowledge to bring your ideas to life on the web.
              </Typography>
            </Box>
            <StyledSeeProjectsButton
              variant="outlined"
              component={Link}
              to="/all-projects"
            >
              See my projects
            </StyledSeeProjectsButton>
          </Box>
        </Grid>
        <Grid item xs={12} sm>
          <Box className="my-photo-container">
            <img alt={`Developer`} src={Me} className="my-photo" />
          </Box>
          <Box className="working-on-container">
            <Box className="working-on-inner-container">
              <Box className="flex flex-center">
                <Box className="square-bullet" />
                <Typography>
                  Currently learning{" "}
                  <span style={{ color: "white", textDecoration: "underline" }}>
                    Design Patterns
                  </span>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
