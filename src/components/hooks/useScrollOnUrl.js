import React, { useEffect } from "react";

export default function useScrollOnUrl() {
  return useEffect(() => {
    setTimeout(() => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.substring(1); // remove the '#'
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }
    }, 250);
  }, [window.location.hash]);
}
