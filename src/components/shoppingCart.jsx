import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../store/shoppingCartSlice";

function ShoppingCart() {
  const cartProducts = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();
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
  console.log(formatCurrency(value));
  return (
    <Container className="shoppingCart-container">
      <h2>Shopping Cart</h2>
      {cartProducts.length === 0 ? (
        <p>Your cart is empty</p>
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
                  <Col md={3}>
                    <Card.Img
                      src={product.src}
                      srcSet={product.srcSet}
                      sizes={product.sizes}
                      alt={product.alt}
                      className="img-fluid p-2"
                    />
                  </Col>

                  <Col md={6}>
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>
                        Price:{product.price} <br />
                        Quantity: {product.quantity} <br />
                        Subtotal: {formatCurrency(subtotal)}{" "}
                      </Card.Text>
                    </Card.Body>
                  </Col>
                  <Col md={3} className="text-end p-3">
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
          <h3> Total:{formatCurrency(totalPrice)} </h3>
          <div className="text-end mt-3">
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
