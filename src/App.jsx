import LandingPage from "./components/landingPage";
import ShoppingCart from "./components/shoppingCart";
import ProductPage from "./components/productsPage";
import LoginPage from "./components/loginPage";
import SignupPage from "./components/signupPage";
import Header from "./components/header";
import Footer from "./components/footer";
import useModalHandler from "./components/modalHandler";
import "./App.css";
import "./customCss/landingPage.css";
import "./customCss/form.css";
import "./customCss/footer.css";
import { Routes, Route } from "react-router-dom";

function App() {
  const { activeModal, openModal, closeModal } = useModalHandler();

  return (
    <>
      <Header openModal={openModal} />
      {activeModal === "login" && (
        <LoginPage
          openModal={openModal}
          closeModal={closeModal}
          showModal={activeModal === "login"}
        />
      )}
      {activeModal === "signup" && (
        <SignupPage
          openModal={openModal}
          closeModal={closeModal}
          showModal={activeModal === "signup"}
        />
      )}
      <Routes>
        <Route path="/signup" element={<SignupPage />} />

        <Route exact path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
