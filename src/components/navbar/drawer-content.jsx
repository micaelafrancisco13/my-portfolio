import React from 'react'
import { StyledContainer } from '../../styled/app.styled'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getComponentsWithMargin } from '../../utils/withMargin.jsx'
import { getNavbarLinks } from '../../utils/navbarLinks'
import { Box, Typography } from '@mui/material'
import Socials from '../icons/socials'
import { PatternSharp } from '@mui/icons-material'

const DrawerContent = ({ onHandleDrawerClose }) => {
  const links = getComponentsWithMargin([...getNavbarLinks()], 3.2)
  const { pathname } = useLocation()

  const navigate = useNavigate()

  const handleSectionJump = (content) => {
    // pathname === "/home"
    // ? `#${link.content}`
    // : `/home#${link.content}`

    // let path = ''
    // if (pathname === '/home') path = content
    // else
    const path = `/home#${content}`
    console.log('path', path)

    navigate(path, { replace: true })
  }

  return (
    <Box className="flex-y flex-space-between" height="80vh" mt="3.2rem">
      <StyledContainer className="flex-y">
        {links.map((link, index) => (
          <a
            key={index}
            style={{
              marginBottom: link.margin,
            }}
            href={
              pathname === '/home'
                ? `#${link.content}`
                : `/home#${link.content}`
            }
            onClick={onHandleDrawerClose}
            className="navbar-link"
          >
            <span className="accent-text">#</span>
            {link.content}
          </a>
        ))}
      </StyledContainer>
      <Box className="flex flex-center">
        <Socials
          social="github"
          link="https://github.com/micaelafrancisco13?tab=repositories"
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
          link="mailto:micaelafrancisco13@gmail.com"
          linkTitle={`Developer's email address`}
          buttonTitle="Email address"
        />
      </Box>
    </Box>
  )
}

export default DrawerContent

{
  /* <a
key={index}
style={{
  marginBottom: link.margin,
}}
href={
  pathname === "/home"
    ? `#${link.content}`
    : `/home#${link.content}`
}
onClick={onHandleDrawerClose}
className="navbar-link"
>
<span className="accent-text">#</span>
{link.content}
</a> */
}
