import { useState } from "react";

function useModalHandler() {
  const [activeModal, setActiveModal] = useState(null);
  const openModal = (modalName) => {
    setActiveModal(modalName);
  };
  const closeModal = () => {
    setActiveModal(null);
  };

  return { activeModal, openModal, closeModal };
}

export default useModalHandler;
