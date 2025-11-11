import { useSelector, useDispatch } from "react-redux";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { logout } from "../store/authSlice";

function Header(props) {
  // Get products in cart from Redux store
  const cartProducts = useSelector((state) => state.shoppingCart.shoppingCart);

  // Get current logged-in user from Redux store
  const currentUser = useSelector((state) => state.auth.currentUser);
  console.log("Current user in header:", currentUser);

  // Calculate total quantity of products in the cart
  const cartQuantity = cartProducts.map((product) => product.quantity);
  const cartTotalItems = cartQuantity.reduce((total, qty) => total + qty, 0);
  console.log("Total items in cart:", cartTotalItems);

  // Initialize dispatch for Redux actions
  const dispatch = useDispatch();

  // Handle logout action
  const handleLogout = () => dispatch(logout());

  return (
    <div className="header">
      {/* Main navigation bar */}
      <Navbar
        bg="dark"
        variant="dark"
        expand={true} // allows navbar to expand for larger screens
        className="shadow-sm"
        sticky="top" // makes navbar stick to the top on scroll
      >
        <Container>
          {/* Brand / Logo */}
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

          {/* Left side navigation links */}
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={"/products"} className="navItem">
              Products
            </Nav.Link>

            {/* Conditional rendering based on user login status */}
            {currentUser ? (
              // Display greeting if user is logged in
              <Nav.Link disabled>Hi {currentUser.userName}</Nav.Link>
            ) : (
              // Show login link if no user is logged in
              <Nav.Link onClick={() => props.openModal("login")}>
                Login
              </Nav.Link>
            )}

            {currentUser ? (
              // Logout link if user is logged in
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            ) : (
              // Signup link if no user is logged in
              <Nav.Link onClick={() => props.openModal("signup")}>
                Signup
              </Nav.Link>
            )}
          </Nav>

          {/* Right side: Cart link with total items */}
          <Nav>
            <Nav.Link as={NavLink} to={"/cart"} className="navItem">
              Cart
              {/* Badge showing number of items in cart */}
              <Badge bg="secondary"> {cartTotalItems}</Badge>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

// Export Header component to use in other parts of the app
export default Header;
