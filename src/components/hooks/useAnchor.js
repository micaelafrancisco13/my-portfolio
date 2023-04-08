import React, { useEffect } from "react";
import useScrollOnUrl from "./useScrollOnUrl";

export default function useAnchor(linksRef, navbarRef) {
  useScrollOnUrl();
  useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach(
        (entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            // --- URL HASH MODIFICATION ---
            const hash = "#" + entry.target.id;
            setTimeout(() => {
              if (id === "hero") {
                let currentURL = window.location.href;
                currentURL = currentURL.split("#")[0];
                window.history.pushState({}, "", currentURL);
              } else window.history.pushState({}, window.title, hash);
            }, 255);

            if (navbarRef.current) {
              const activeAnchor = navbarRef.current.querySelector(
                `[href="#${id}"]`
              );
              const anchors = navbarRef.current.querySelectorAll("a");
              anchors.forEach((anchor) => {
                anchor.classList.remove("active-anchor-link");
                anchor.classList.add("navbar-link");
              });
              if (activeAnchor) {
                activeAnchor.classList.remove("navbar-link");
                activeAnchor.classList.add("active-anchor-link");
              }
            }
          }
        },
        {
          threshold: 1.0,
        }
      );
    };

    const observer = new IntersectionObserver(handleScroll);
    for (let linkRef of linksRef) observer.observe(linkRef.current);

    return () => {
      observer.disconnect();
    };
  }, [linksRef, navbarRef]);
}
