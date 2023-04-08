import React from 'react'
import {
  getProjectDetails,
  getOtherProjects,
} from '../../../utils/projectDetails'
import { Grid, Typography } from '@mui/material'
import ProjectCard from './project-card'
import theme from '../../../theme/main'

const AllProjects = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })

  const projectDetails = [...getProjectDetails()]
  const otherProjects = [...getOtherProjects()]

  return (
    <>
      <Typography variant="h2" fontWeight="500" mt="5.7rem" mb="1.5rem">
        <span style={{ color: theme.palette.accent.main }}>/</span>all-projects
      </Typography>
      <Typography mb="8rem">
        A selection of projects I have completed during my college studies
        including both academic assignments and self-initiated projects.
      </Typography>
      <Typography variant="h2" fontWeight="500" mb="4.8rem">
        <span style={{ color: theme.palette.accent.main }}>#</span>featured
      </Typography>
      <Grid container spacing="1.6rem">
        {projectDetails.map((project, index) => (
          <Grid key={index} item xs={12} md={6} lg={4}>
            <ProjectCard project={project} preview={true} />
          </Grid>
        ))}
      </Grid>
      <Typography variant="h2" fontWeight="500" mt="8rem" mb="4.8rem">
        <span style={{ color: theme.palette.accent.main }}>#</span>other-apps
      </Typography>
      <Grid container spacing="1.6rem">
        {otherProjects.map((project, index) => (
          <Grid key={index} item xs={12} md={6} lg={4}>
            <ProjectCard project={project} preview={false} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default AllProjects
