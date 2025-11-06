import { useSelector } from "react-redux";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";

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
          <Navbar.Brand as={NavLink} to={"/"} className="navItem">
            <img
              src="/images/logo/logo.jpg"
              alt="4nez4Mzansi"
              style={{
                width: "80px",
                height: "60px",
                marginRight: "10px",
                borderRadius: "50%",
              }}
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={"/products"} className="navItem">
              Products
            </Nav.Link>
            <Nav.Link onClick={() => props.openModal("login")}>Login</Nav.Link>
            <Nav.Link onClick={() => props.openModal("signup")}>
              Signup
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link as={NavLink} to={"/cart"} className="navItem">
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
