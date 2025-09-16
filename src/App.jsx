import LandingPage from "./components/landingPage";
import ShoppingCart from "./components/shoppingCart";
import ProductPage from "./components/productsPage";
import LoginPage from "./components/loginPage";
import SignupPage from "./components/signupPage";
import "./App.css";
import "./customCss/landingPage.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </>
  );
}

export default App;
