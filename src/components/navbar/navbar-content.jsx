import React from "react";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import NavbarSVG from "./navbar-svg";
import theme from "../../theme/main";
import MenuDrawer from "./../common/drawer";
import NavbarLinks from "./navbar-links";
import { StyledVerticalLine } from "../../styled/navbar/navbar.styled";
import Socials from "../icons/socials";

const NavbarContent = ({ navbarRef }) => {
  const largeAndAbove = useMediaQuery(theme.breakpoints.up("lg"));
  const extraLargeAndAbove = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <Box className="flex full-width">
      {extraLargeAndAbove && (
        <Box className="side-links">
          <StyledVerticalLine />
          <Box className="flex-y">
            <Socials
              social="github"
              link="https://github.com/elaaa13?tab=repositories"
              linkTitle={`Developer's GitHub link`}
              buttonTitle="GitHub"
            />
            <Socials
              social="linkedin"
              link="https://www.linkedin.com/in/micaelafrancisco13/"
              linkTitle={`Developer's LinkedIn link`}
              buttonTitle="LinkedIn"
            />
            <Socials
              social="email"
              link="mailto:micaela.francisco.s@bulsu.edu.ph"
              linkTitle={`Developer's email address`}
              buttonTitle="Email address"
            />
          </Box>
        </Box>
      )}
      <Stack direction="row" spacing={2} component="a" href="/">
        <NavbarSVG />
        <Box className="flex flex-center">
          <Typography color={theme.palette.text.secondary} fontWeight="600">
            Micaela
          </Typography>
        </Box>
      </Stack>
      {largeAndAbove ? (
        <Box className="flex-self-x-end" ref={navbarRef}>
          <NavbarLinks navbarRef={navbarRef} />
        </Box>
      ) : (
        <MenuDrawer anchor="right" />
      )}
    </Box>
  );
};

export default NavbarContent;
