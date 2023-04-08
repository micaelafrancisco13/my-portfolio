import React from "react";
import { useLocation } from "react-router-dom";
import { getComponentsWithMargin } from "../../utils/withMargin.jsx";
import { getNavbarLinks } from "../../utils/navbarLinks";

const NavbarLinks = ({ navbarRef }) => {
  const links = getComponentsWithMargin([...getNavbarLinks()], 6);
  const { pathname } = useLocation();

  return (
    <div ref={navbarRef}>
      {links.map((link, index) => (
        <a
          key={index}
          style={{
            marginRight: link.margin,
          }}
          href={
            pathname === "/home" ? `#${link.content}` : `/home#${link.content}`
          }
          className="navbar-link"
        >
          <span className="accent-text">#</span>
          {link.content}
        </a>
      ))}
    </div>
  );
};

export default NavbarLinks;
