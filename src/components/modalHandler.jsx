import { useState } from "react";

// Custom hook to manage modal state
function useModalHandler() {
  // State to track which modal is currently active; null means no modal is open
  const [activeModal, setActiveModal] = useState(null);

  // Function to open a modal by setting its name
  const openModal = (modalName) => {
    setActiveModal(modalName);
  };

  // Function to close any open modal
  const closeModal = () => {
    setActiveModal(null);
  };

  // Return the modal state and functions for use in components
  return { activeModal, openModal, closeModal };
}

export default useModalHandler;
