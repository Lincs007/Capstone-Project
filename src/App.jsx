import LandingPage from "./components/landingPage";
import ShoppingCart from "./components/shoppingCart";
import ProductPage from "./components/productsPage";
import LoginPage from "./components/loginPage";
import SignupPage from "./components/signupPage";
import Header from "./components/header";
import "./App.css";
import "./customCss/landingPage.css";
import "./customCss/form.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <>
      <Header openModal={openModal} />
      {showModal && (
        <LoginPage
          openModal={openModal}
          closeModal={closeModal}
          showModal={showModal}
        />
      )}
      {showModal && (
        <SignupPage
          openModal={openModal}
          closeModal={closeModal}
          showModal={showModal}
        />
      )}
      <Routes>
        <Route path="/signup" element={<SignupPage />} />

        <Route exact path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </>
  );
}

export default App;
