import React from "react";
import { Box, CardMedia, Typography, useMediaQuery } from "@mui/material";
import {
  StyledCard,
  StyledCardActions,
  StyledCardButton,
  StyledPrivateRepoButton,
  StyledProjectDescription,
} from "../../../styled/sections/projects/project-card.styled";
import useModal from "../../hooks/useModal";
import ModalPopup from "../../common/modal";
import theme from "../../../theme/main";

const ProjectCard = ({ project, preview }) => {
  const { name, screenshot, description, techStacks, videoId, live, github } =
    project;
  const [toggleModal, handleModalOpen, handleModalClose] = useModal();
  const smallAndAbove = useMediaQuery(theme.breakpoints.up("sm"));
  const largeAndAbove = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box className={largeAndAbove && "/all-projects" ? "zoom" : ""}>
      <StyledCard elevation={0}>
        {screenshot && (
          <CardMedia
            component="img"
            height="100%"
            image={screenshot}
            alt={`Landing page of ${name}`}
          />
        )}
        <Box>
          <Box
            className="flex flex-wrap tech-stacks-container"
            borderTop={!screenshot && "none"}
          >
            {techStacks.map((stack, index) => (
              <Typography key={index}>{stack}</Typography>
            ))}
          </Box>
          <Box className="project-details-container">
            <Typography variant="h3">{name}</Typography>
            <StyledProjectDescription>{description}</StyledProjectDescription>
            <StyledCardActions>
              {live &&
                (preview ? (
                  <StyledCardButton
                    variant="outlined"
                    onClick={handleModalOpen}
                  >
                    {`Live <~>`}
                  </StyledCardButton>
                ) : (
                  <StyledCardButton
                    variant="outlined"
                    component="a"
                    target="_blank"
                    rel="noreferrer"
                    href={live}
                  >
                    {`Live <~>`}
                  </StyledCardButton>
                ))}
              {github ? (
                <StyledCardButton
                  variant="outlined"
                  component="a"
                  target="_blank"
                  rel="noreferrer"
                  href={github}
                >
                  GitHub =>
                </StyledCardButton>
              ) : (
                <StyledPrivateRepoButton
                  variant="outlined"
                  component="a"
                  target="_blank"
                  rel="noreferrer"
                  href={github}
                >
                  {!smallAndAbove ? "Private" : "Private repo >="}
                </StyledPrivateRepoButton>
              )}
            </StyledCardActions>
          </Box>
        </Box>
      </StyledCard>
      <ModalPopup
        name={name}
        videoId={videoId}
        live={live}
        toggleModal={toggleModal}
        onModalClose={handleModalClose}
      />
    </Box>
  );
};

export default ProjectCard;
