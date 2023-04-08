import "./App.css";
import React, { useRef } from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { StyledContainer } from "./styled/app.styled";
import { ThemeProvider, CssBaseline } from "@mui/material";
import AllProjects from "./components/sections/projects/all-projects";
import Main from "./components/main";
import Navbar from "./components/navbar/navbar";
import theme from "./theme/main";
import NotFound from "./components/not-found";
import Footer from './components/sections/footer';

function App() {
  const navbarRef = useRef(null);
  const linksRef = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StyledContainer>
          <Navbar navbarRef={navbarRef} />
          <Routes>
            <Route path="/all-projects" element={<AllProjects />} />
            <Route
              path="/home"
              element={<Main linksRef={linksRef} navbarRef={navbarRef} />}
            />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/" element={<Navigate to={`/home`} replace />} />
            <Route path="*" element={<Navigate to={`/not-found`} replace />} />
          </Routes>
          <Footer />
        </StyledContainer>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
