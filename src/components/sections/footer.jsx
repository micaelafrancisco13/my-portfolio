import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import theme from "../../theme/main";
import NavbarSVG from "../navbar/navbar-svg";
import Socials from "../icons/socials";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      mt={{ xs: "13rem", lg: "15rem" }}
      pt={{ xs: "1.6rem", lg: "3.2rem" }}
      pb={{ xs: "1.6rem" }}
      borderTop={`1px solid ${theme.palette.text.primary}`}
    >
      <Box className="footer-block">
        <Box>
          <Stack direction="row" spacing={2} component="a" href="/">
            <NavbarSVG />
            <Typography color={theme.palette.text.secondary} fontWeight="600">
              Micaela
            </Typography>
          </Stack>
          <Typography color={theme.palette.text.secondary} my="1.6rem">
            Software developer based in the{" "}
            <span component="img" aria-label="Philippine flag emoji">
              🇵🇭
            </span>
          </Typography>
        </Box>
        <Box>
          <Typography
            color={theme.palette.text.secondary}
            fontWeight="600"
            mt="3.2rem"
            mb="0.8rem"
          >
            Other socials
          </Typography>
          <Socials
            social="facebook"
            link="https://www.facebook.com/micaelafrancisco13/"
            linkTitle={`Developer's Facebook link`}
            buttonTitle="Facebook"
          />
        </Box>
      </Box>
      <Typography
        fontSize="1.5rem"
        textAlign="center"
        mt="3.2rem"
      >{`Developed by Ela | ${currentYear}`}</Typography>
    </Box>
  );
};

export default Footer;
