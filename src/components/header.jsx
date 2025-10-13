import { useSelector } from "react-redux";
import LandingPage from "./landingPage";
import ProductPage from "./productsPage";
import ShoppingCart from "./shoppingCart";
import LoginPage from "./loginPage";
import SignupPage from "./signupPage";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header(props) {
  const cartProducts = useSelector((state) => state.shoppingCart.shoppingCart);
  const cartQuantity = cartProducts.map((product) => product.quantity);
  const cartTotalItems = cartQuantity.reduce((total, qty) => total + qty, 0);
  console.log("Total items in cart:", cartTotalItems);
  return (
    <div className="header">
      <Navbar
        bg="dark"
        variant="dark"
        expand={true}
        className="shadow-sm"
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            4nez4Mzansi
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/products"}>
              Products
            </Nav.Link>
            <Nav.Link onClick={props.openModal}>Login</Nav.Link>
            <Nav.Link onClick={props.openModal}>Signup</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link as={Link} to={"/cart"}>
              Cart{""}
              <Badge bg="secondary">{cartTotalItems}</Badge>{" "}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
