import React, { useState } from "react";

export default function useSocials() {
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const handleIconHover = () => setToggleDrawer(true);

  return [toggleDrawer, handleIconHover];
}
