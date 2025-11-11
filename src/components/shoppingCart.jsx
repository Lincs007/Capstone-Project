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
  // read cart products from redux store
  const cartProducts = useSelector((state) => state.shoppingCart.shoppingCart);

  const dispatch = useDispatch(); // get dispatch function for actions
  const navigate = useNavigate(); // get navigate function for routing

  // local state for the shipping info modal visibility
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true); // show modal
  const closeModal = () => setShowModal(false); // hide modal

  // calculate total price by summing each product's price * quantity
  const totalPrice = cartProducts.reduce(
    (total, product) =>
      total +
      parseFloat(product.price.replace(/[^\d.-]/g, "")) *
        Number(product.quantity),
    0
  );

  // helper to format a number as South African Rand currency
  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
    }).format(value);

  console.log(formatCurrency(totalPrice)); // debug total price formatting

  return (
    <Container className="shoppingCart-container">
      {/* Page title */}
      <h2>Shopping Cart</h2>

      {/* If cart is empty, show message and Shop Now button */}
      {cartProducts.length === 0 ? (
        <>
          {/* Inform user the cart is empty */}
          <p>Your cart is empty</p>

          {/* navigate to products page when clicked */}
          <Button onClick={() => navigate("/products")} variant="dark">
            Shop Now
          </Button>
        </>
      ) : (
        // When there are items in the cart, render them
        <div>
          {cartProducts.map((product) => {
            // parse price string to number (remove currency symbols)
            const productPrice = parseFloat(
              product.price.replace(/[^\d.-]/g, "")
            );
            // compute subtotal for current product
            const subtotal = productPrice * Number(product.quantity);

            return (
              <Card key={product.id} className=" h-100 shadow-sm">
                <Row className="g-0 align-items-center">
                  <Col md={2}>
                    {/* product image */}
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
                      {/* product title */}
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>
                        {/* price, quantity and subtotal display */}
                        Price:{product.price} <br />
                        Quantity: {product.quantity} <br />
                        Subtotal: {formatCurrency(subtotal)}{" "}
                      </Card.Text>
                    </Card.Body>
                  </Col>

                  <Col md={1} className="text-end p-3">
                    {/* quantity controls and remove button */}
                    <div className="d-flex justify-content-end align-items-center gap-2">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="remove-button"
                        onClick={() => dispatch(decrementQuantity(product.id))}
                      >
                        -
                      </Button>

                      {/* current quantity */}
                      <span>{product.quantity}</span>

                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => dispatch(incrementQuantity(product))}
                      >
                        +
                      </Button>

                      {/* remove item from cart */}
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

          {/* Actions area: shipping selection, info modal trigger, checkout */}
          <div className="text-end mt-3">
            <Row>
              <Col>
                {/* shipping method selector */}
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
                {/* button that opens the shipping info modal */}
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
                {/* close modal button */}
                <Button variant="dark" onClick={closeModal}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>

            {/* proceed to checkout button */}
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
