import { Box, Fade, Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { StyledLine } from '../../styled/sections/projects/projects.styled'
import theme from '../../theme/main'
import Socials from '../icons/socials'
import { useInView } from 'react-intersection-observer'

function getSocials(largeAndLarger) {
  const INITIAL_TIMEOUT = 850

  return [
    {
      name: 'discord',
      link: 'https://discord.com/users/1049128124031443014',
      linkTitle: `Developer's discord link`,
      buttonTitle: 'Discord',
      text: `ela13 #2746`,
      timeout: INITIAL_TIMEOUT * 1,
    },
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/micaelafrancisco13/',
      linkTitle: `Developer's LinkedIn link`,
      buttonTitle: 'LinkedIn',
      text: `Micaela Francisco`,
      timeout: INITIAL_TIMEOUT * 2,
    },
    {
      name: 'email',
      link: 'mailto:micaela.francisco.s@bulsu.edu.ph',
      linkTitle: `Developer's email address`,
      buttonTitle: 'Email address',
      text: !largeAndLarger
        ? `micaela.francisco\n.s@bulsu.edu.ph`
        : `micaela.francisco.s@bulsu.edu.ph`,
      timeout: INITIAL_TIMEOUT * 3,
    },
  ]
}

const Contacts = ({ contactsRef }) => {
  const smallAndLarger = useMediaQuery(theme.breakpoints.up('sm'))
  const largeAndLarger = useMediaQuery(theme.breakpoints.up('lg'))

  const { ref: socialsRef, inView: areSocialsInView } = useInView()
  const socials = [...getSocials(largeAndLarger)]

  return (
    <Box component="section">
      <Box className="flex flex-y-center" mb="4.8rem">
        <Typography
          fontWeight="500"
          variant="h2"
          className="offset-section"
          id="contacts"
          ref={contactsRef}
        >
          <span style={{ color: theme.palette.accent.main }}>#</span>contacts
        </Typography>
        {smallAndLarger && <StyledLine />}
      </Box>
      <Grid container spacing={{ xs: '4rem', sm: '2rem' }}>
        <Grid item xs={12} sm={6} md={7}>
          <Typography>
            {`Thank you for visiting my portfolio and I hope you enjoy exploring my
work! If you have any questions or project ideas, please don't hesitate
to contact me! :)`}
          </Typography>
        </Grid>
        <Grid item xs md>
          <Box p="1.6rem" border={`1px solid ${theme.palette.text.primary}`}>
            <Typography
              fontWeight="600"
              mb="1.6rem"
              color={theme.palette.text.secondary}
            >
              Message me here
            </Typography>
            <Box className="flex-y" ref={socialsRef}>
              {socials.map((social, index) => (
                <Fade
                  key={index}
                  in={areSocialsInView}
                  {...(areSocialsInView ? { timeout: social.timeout } : {})}
                >
                  <Box className="flex flex-y-center">
                    <Socials
                      social={social.name}
                      link={social.link}
                      linkTitle={social.linkTitle}
                      buttonTitle={social.buttonTitle}
                    />
                    <Typography>{social.text}</Typography>
                  </Box>
                </Fade>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Contacts
