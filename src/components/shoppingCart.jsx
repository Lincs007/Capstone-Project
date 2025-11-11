import {
  Container,
  Card,
  Row,
  Col,
  Button,
  Form,
  Modal,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../store/shoppingCartSlice";
import { useNavigate } from "react-router-dom";

function ShoppingCart() {
  const cartProducts = useSelector((state) => state.shoppingCart.shoppingCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const totalPrice = cartProducts.reduce(
    (total, product) =>
      total +
      parseFloat(product.price.replace(/[^\d.-]/g, "")) *
        Number(product.quantity),
    0
  );
  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
    }).format(value);
  console.log(formatCurrency(totalPrice));
  return (
    <Container className="shoppingCart-container">
      <h2>Shopping Cart</h2>
      {cartProducts.length === 0 ? (
        <>
          <p>Your cart is empty</p>
          <Button onClick={() => navigate("/products")} variant="dark">
            Shop Now
          </Button>
        </>
      ) : (
        <div>
          {cartProducts.map((product) => {
            const productPrice = parseFloat(
              product.price.replace(/[^\d.-]/g, "")
            );
            const subtotal = productPrice * Number(product.quantity);
            return (
              <Card key={product.id} className=" h-100 shadow-sm">
                <Row className="g-0 align-items-center">
                  <Col md={2}>
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
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>
                        Price:{product.price} <br />
                        Quantity: {product.quantity} <br />
                        Subtotal: {formatCurrency(subtotal)}{" "}
                      </Card.Text>
                    </Card.Body>
                  </Col>
                  <Col md={1} className="text-end p-3">
                    <div className="d-flex justify-content-end align-items-center gap-2">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="remove-button"
                        onClick={() => dispatch(decrementQuantity(product.id))}
                      >
                        -
                      </Button>
                      <span>{product.quantity}</span>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => dispatch(incrementQuantity(product))}
                      >
                        +
                      </Button>
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
          <hr />
          <h3> Total amount :{formatCurrency(totalPrice)} </h3>
          <div className="text-end mt-3">
            <Row>
              <Col>
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
                <Button variant="dark" onClick={closeModal}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
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
