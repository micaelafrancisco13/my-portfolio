import React from 'react'
import { Box, Grid, Typography, useMediaQuery, Grow } from '@mui/material'
import { getProjectDetails } from '../../../utils/projectDetails'
import { Link } from 'react-router-dom'
import { StyledButton } from '../../../styled/common/button.styled'
import { StyledLine } from '../../../styled/sections/projects/projects.styled'
import ProjectCard from './project-card'
import theme from '../../../theme/main'
import { useInView } from 'react-intersection-observer'

const Projects = ({ projectsRef }) => {
  const projectDetails = [...getProjectDetails()]
  const smallAndAbove = useMediaQuery(theme.breakpoints.up('sm'))
  const { ref: topProjectsRef, inView: areAllTopProjectsInView } = useInView()

  return (
    <Box
      mb={{ xs: '10rem', lg: '14rem', xl: '18rem', xxl: '22rem' }}
      sx={{ height: { lg: '100vh' } }}
      component="section"
    >
      <Box className="flex flex-center flex-space-between" mb="4.8rem">
        <Box className="flex flex-center">
          <Typography
            fontWeight="500"
            className="offset-section"
            id="projects"
            ref={projectsRef}
            variant="h2"
          >
            <span style={{ color: theme.palette.accent.main }}>#</span>
            projects
          </Typography>
          {smallAndAbove && <StyledLine />}
        </Box>
        <StyledButton component={Link} to="/all-projects">
          {!smallAndAbove ? 'All =>' : 'View all =>'}
        </StyledButton>
      </Box>
      <Grid
        container
        spacing={{ xs: '1.6rem', lg: '2rem' }}
        ref={topProjectsRef}
      >
        {projectDetails.map((project, index) => (
          <Grow
            key={index}
            in={areAllTopProjectsInView}
            style={{ transformOrigin: '0 0 0' }}
            {...(areAllTopProjectsInView ? { timeout: project.timeout } : {})}
          >
            <Grid item xs={12} md={6} lg={4}>
              <ProjectCard project={project} preview={true} />
            </Grid>
          </Grow>
        ))}
      </Grid>
    </Box>
  )
}

export default Projects
