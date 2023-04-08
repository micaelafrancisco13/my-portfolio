import { Box, Typography } from "@mui/material";
import React from "react";
import { StyledQuoteSection } from "../../styled/sections/quote.styled";

const Quote = () => {
  return (
    <Box className="flex flex-center quote-block">
      <Box>
        <Box  className="figure-quote">
          <Box
            component="blockquote"
            cite="https://softwarequotes.com/quote/the-best-thing-about-a-boolean-is-even-if-you-are-"
            className="block-quote"
          >
            <StyledQuoteSection>
              The best thing about a boolean is even if you are wrong, you are
              only off by a bit.
            </StyledQuoteSection>
          </Box>
        </Box>
        <Box className="flex-self-x-end">
          <Box className="quote-by-container">
            <Typography textAlign="right">- Anonymous</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Quote;
