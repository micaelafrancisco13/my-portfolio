import React from 'react'
import { Box, Grid, Typography, Zoom, useMediaQuery } from '@mui/material'
import { getTechStacks } from '../../../utils/techStacks'
import { StyledLine } from '../../../styled/sections/projects/projects.styled'
import DotsBox from '../../shapes/dots-box'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import theme from '../../../theme/main'
import _ from 'lodash'
import OutlinedBox from '../../shapes/outlined-box'
import WeirdShape from '../../shapes/weird-shape'
import IndividualTechStack from './individual-tech-stack'
import { useInView } from 'react-intersection-observer'

const TechStacks = ({ techStackRef }) => {
  const smallAndLarger = useMediaQuery(theme.breakpoints.up('sm'))
  const largeAndLarger = useMediaQuery(theme.breakpoints.up('lg'))

  let techStacks = _.sortBy(getTechStacks(), 'showPriority')
  if (largeAndLarger) techStacks = _.sortBy(getTechStacks(), 'inLayout')

  const INITIAL_TIMEOUT = 500
  let timeout = INITIAL_TIMEOUT
  techStacks = techStacks.map((stack) => {
    stack.timeout = timeout
    timeout += INITIAL_TIMEOUT
    return stack
  })

  const { ref: techStacksRef, inView: areAllTechStacksInView } = useInView()

  return (
    <Box
      // mb={{ xs: "10rem", lg: "13rem", xl: "16rem", xxl: "23rem" }}
      mb={{ xs: '10rem', lg: '14rem', xl: '18rem', xxl: '22rem' }}
      sx={{ height: { lg: '100vh' } }}
      component="section"
    >
      <Box className="flex flex-y-center">
        <Typography
          variant="h2"
          fontWeight="500"
          mb={{ xs: '1.3rem', lg: 0 }}
          className="offset-section"
          id="tech-stacks"
          ref={techStackRef}
        >
          <span style={{ color: theme.palette.accent.main }}>#</span>tech-stacks
        </Typography>
        {smallAndLarger && <StyledLine />}
      </Box>
      {!largeAndLarger && (
        <Box className="flex flex-self-x-end">
          <DotsBox />
        </Box>
      )}
      <Grid container spacing="1.6rem" mt={{ xs: 0, lg: '3.2rem' }}>
        {largeAndLarger && (
          <Grid item lg={5}>
            <Grid container>
              <Grid item lg={6}>
                <DotsBox large={true} />
              </Grid>
              <Grid item lg={6} className="flex flex-center">
                <OutlinedBox large={true} />
              </Grid>
              <Grid item lg={6} className="flex flex-center">
                <WeirdShape />
              </Grid>
              <Grid item lg={6} className="flex flex-y-center">
                <DotsBox large={true} />
              </Grid>
              <Grid item lg={12} ml="80%">
                <OutlinedBox />
              </Grid>
            </Grid>
          </Grid>
        )}
        <Grid item xs lg>
          {!largeAndLarger ? (
            <Grid container spacing="1.6rem" ref={techStacksRef}>
              {techStacks.map(({ category, stacks, timeout }, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <IndividualTechStack
                    techStacks={techStacks}
                    category={category}
                    stacks={stacks}
                  />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Box ref={techStacksRef}>
              <ResponsiveMasonry>
                <Masonry>
                  {techStacks.map(({ category, stacks, timeout }, index) => (
                    <Zoom
                      key={index}
                      in={areAllTechStacksInView}
                      {...(areAllTechStacksInView ? { timeout } : {})}
                    >
                      <Box
                        mb={index !== techStacks.length - 1 ? '1.6rem' : '0'}
                        mr={{
                          lg:
                            index !== techStacks.length - 1 && index !== 2
                              ? '1.6rem'
                              : '0',
                        }}
                      >
                        <IndividualTechStack
                          techStacks={techStacks}
                          category={category}
                          stacks={stacks}
                        />
                      </Box>
                    </Zoom>
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  )
}

export default TechStacks
