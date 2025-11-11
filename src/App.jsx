// Importing all the necessary components
import LandingPage from "./components/landingPage";
import ShoppingCart from "./components/shoppingCart";
import ProductPage from "./components/productsPage";
import LoginPage from "./components/loginPage";
import SignupPage from "./components/signupPage";
import Header from "./components/header";
import Footer from "./components/footer";
import useModalHandler from "./components/modalHandler";

// Importing CSS files
import "./App.css";
import "./customCss/landingPage.css";
import "./customCss/form.css";
import "./customCss/footer.css";

// Importing React Router components for routing
import { Routes, Route } from "react-router-dom";

function App() {
  // Using custom hook to handle modal state
  const { activeModal, openModal, closeModal } = useModalHandler();

  return (
    <div className="app-container">
      {/* Header component with modal open function */}
      <Header openModal={openModal} />
      <div className="main-content">
        {/* Conditional rendering for Login modal */}
        {activeModal === "login" && (
          <LoginPage
            openModal={openModal}
            closeModal={closeModal}
            showModal={activeModal === "login"} // Pass showModal prop
          />
        )}

        {/* Conditional rendering for Signup modal */}
        {activeModal === "signup" && (
          <SignupPage
            openModal={openModal}
            closeModal={closeModal}
            showModal={activeModal === "signup"} // Pass showModal prop
          />
        )}

        {/* Routes for page navigation */}
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </div>
      {/* Footer component */}
      <Footer />
    </div>
  );
}

// Exporting App component as default
export default App;
