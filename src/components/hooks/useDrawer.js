import React, { useState } from "react";

export default function useDrawer() {
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const handleDrawerOpen = () => setToggleDrawer(true);
  const handleDrawerClose = () => setToggleDrawer(false);

  return [toggleDrawer, handleDrawerOpen, handleDrawerClose];
}
