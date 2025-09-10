import LandingPage from "./components/landingPage";
import ShoppingCart from "./components/shoppingCart";
import ProductPage from "./components/productsPage";
import "./App.css";
import "./customCss/landingPage.css";

function App() {
  return (
    <>
      <LandingPage />
      <ShoppingCart />
      <ProductPage />
    </>
  );
}

export default App;
