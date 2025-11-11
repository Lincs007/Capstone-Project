import {
  Container,
  Card,
  Row,
  Col,
  Button,
  Form,
  Modal,
} from "react-bootstrap"; // UI components from react-bootstrap

import { useSelector, useDispatch } from "react-redux"; // hooks to read state and dispatch actions
import { useState } from "react"; // local state hook

import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../store/shoppingCartSlice"; // cart actions

import { useNavigate } from "react-router-dom"; // programmatic navigation

function ShoppingCart() {
  // Get cart products from Redux store
  const cartProducts = useSelector((state) => state.shoppingCart.shoppingCart);

  const dispatch = useDispatch(); // dispatch actions to Redux
  const navigate = useNavigate(); // navigate programmatically

  // State for controlling the shipping info modal
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true); // open modal
  const closeModal = () => setShowModal(false); // close modal

  // Calculate total price of all items in cart
  const totalPrice = cartProducts.reduce(
    (total, product) =>
      total +
      parseFloat(product.price.replace(/[^\d.-]/g, "")) *
        Number(product.quantity),
    0
  );

  // Helper to format a number as South African Rand
  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
    }).format(value);

  console.log(formatCurrency(totalPrice)); // debug total price

  return (
    <Container className="shoppingCart-container fluid">
      {/* Page title */}
      <h2>Shopping Cart</h2>

      {/* Show message if cart is empty */}
      {cartProducts.length === 0 ? (
        <div className="empty-cart-container">
          <p>Your cart is empty</p>
          <Button onClick={() => navigate("/products")} variant="dark">
            Shop Now
          </Button>
        </div>
      ) : (
        // Render cart items if available
        <div>
          {cartProducts.map((product) => {
            // Convert price string to number
            const productPrice = parseFloat(
              product.price.replace(/[^\d.-]/g, "")
            );
            const subtotal = productPrice * Number(product.quantity); // subtotal for this product

            return (
              <Card key={product.id} className=" h-100 shadow-sm">
                <Row className="g-0 align-items-center">
                  <Col md={2}>
                    {/* Product image */}
                    <Card.Img
                      src={product.src}
                      srcSet={product.srcSet}
                      sizes={product.sizes}
                      alt={product.alt}
                      className="img-fluid p-2"
                    />
                  </Col>

                  <Col md={4}>
                    <Card.Body>
                      {/* Product title */}
                      <Card.Title>{product.title}</Card.Title>
                      {/* Price, quantity, and subtotal */}
                      <Card.Text>
                        Price:{product.price} <br />
                        Quantity: {product.quantity} <br />
                        Subtotal: {formatCurrency(subtotal)}{" "}
                      </Card.Text>
                    </Card.Body>
                  </Col>

                  <Col md={1} className="text-end p-3">
                    {/* Quantity controls and remove button */}
                    <div className="d-flex justify-content-end align-items-center gap-2">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="remove-button"
                        onClick={() => dispatch(decrementQuantity(product.id))}
                      >
                        -
                      </Button>

                      {/* Current quantity */}
                      <span>{product.quantity}</span>

                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => dispatch(incrementQuantity(product))}
                      >
                        +
                      </Button>

                      {/* Remove item from cart */}
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => dispatch(removeFromCart(product.id))}
                      >
                        x
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card>
            );
          })}

          {/* Separator and total amount */}
          <hr />
          <h3> Total amount :{formatCurrency(totalPrice)} </h3>

          {/* Shipping and checkout section */}
          <div className="text-end mt-3">
            <Row>
              <Col>
                {/* Shipping method selector */}
                <Form.Select
                  aria-label="shipping-method"
                  className="shipping-method mb-3"
                >
                  <option value="standard">Standard Shipping</option>
                  <option value="express">Express Shipping</option>
                  <option value="overnight">Overnight Shipping</option>
                  <option value="same-day">Same Day Delivery</option>
                  <option value="pickup">In-Store Pickup</option>
                </Form.Select>
              </Col>

              <Col>
                {/* Info button for shipping details modal */}
                <Button
                  variant="info"
                  className="me-2"
                  onClick={openModal}
                  aria-label="view shipping options info"
                  style={{ textDecoration: "none" }}
                >
                  <i className="bi bi-info-circle text-secondary"></i>
                </Button>
              </Col>
            </Row>

            {/* Shipping information modal */}
            <Modal
              show={showModal}
              onHide={closeModal}
              centered
              className="shipping-info-modal"
            >
              <Modal.Header closeButton>
                <Modal.Title>Shipping Information</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p className="shipping-info">
                  Shipping costs are calculated based on the selected shipping
                  method and your location. Standard shipping typically takes
                  3-5 business days, while express shipping takes 1-2 businees
                  days. Overnight and same-day delivery options are also
                  available for an additional fee. In-store pickup is free and
                  allows you to collect your order from our physical store
                  location at your convenience.
                </p>
              </Modal.Body>
              <Modal.Footer>
                {/* Close modal button */}
                <Button variant="dark" onClick={closeModal}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>

            {/* Proceed to checkout button */}
            <Button variant="success" size="lg">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      )}
    </Container>
  );
}

export default ShoppingCart;
