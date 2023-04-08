import React from "react";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import {
  StyledModalContentContainer,
  StyledModalContentMainContainer,
} from "../../styled/common/modal.styled";
import YouTubeVideo from "./youtube-video";
import {
  StyledButton,
  StyledCloseIcon,
} from "../../styled/common/button.styled";

const ModalPopup = ({ name, videoId, live, toggleModal, onModalClose }) => {
  return (
    <Modal
      open={toggleModal}
      onClose={onModalClose}
      aria-labelledby="Demo video"
      aria-describedby={`Brief video demo of ${name}`}
    >
      <StyledModalContentContainer>
        <Box className="flex flex-center">
          <StyledModalContentMainContainer>
            <Box className="flex flex-self-x-end">
              <IconButton onClick={onModalClose} size="small">
                <StyledCloseIcon />
              </IconButton>
            </Box>
            <Typography
              id="Demo video"
              variant="h3"
              component="p"
              textAlign="center"
              mt={{ xs: "1rem", sm: "0.5rem" }}
            >
              {`Preview {${name}}`}
            </Typography>
            <YouTubeVideo videoId={videoId} autoPlay={toggleModal} />
            <Box className="flex flex-center">
              <StyledButton
                variant="outlined"
                component="a"
                target="_blank"
                rel="noreferrer"
                href={live}
              >
                Continue to site =>
              </StyledButton>
            </Box>
          </StyledModalContentMainContainer>
        </Box>
      </StyledModalContentContainer>
    </Modal>
  );
};

export default ModalPopup;
