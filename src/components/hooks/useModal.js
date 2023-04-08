import React, { useState } from "react";

export default function useModal() {
  const [toggleModal, setToggleModal] = useState(false);

  const handleModalOpen = () => setToggleModal(true);
  const handleModalClose = () => setToggleModal(false);

  return [toggleModal, handleModalOpen, handleModalClose];
}
