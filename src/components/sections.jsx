import React from 'react'
import { Box } from '@mui/material'
import AboutMe from './sections/about-me'
import Contacts from './sections/contacts'
import Hero from './sections/hero'
import Projects from './sections/projects/projects'
import Quote from './sections/quote'
import TechStacks from './sections/tech-stacks/tech-stacks'
import useAnchor from './hooks/useAnchor'

const Sections = ({ linksRef, navbarRef }) => {
    useAnchor(linksRef, navbarRef)
    const [heroRef, projectsRef, techStackRef, aboutMeRef, contactsRef] =
        linksRef

    return (
        <>
            <Box component="section">
                <Hero heroRef={heroRef} />
                <Quote />
            </Box>
            <Projects projectsRef={projectsRef} />
            <TechStacks techStackRef={techStackRef} />
            <AboutMe aboutMeRef={aboutMeRef} />
            <Contacts contactsRef={contactsRef} />
        </>
    )
}

export default Sections
