import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Card, Col, Row, Form, Modal } from "react-bootstrap";
import { chooseColor } from "../store/productsSlice";
import { incrementQuantity } from "../store/shoppingCartSlice";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  // Get the list of products from Redux store
  const products = useSelector((state) => state.products.products);

  // Initialize dispatch to trigger Redux actions
  const dispatch = useDispatch();

  // React Router hook for navigation
  const navigate = useNavigate();

  // Function to handle color selection for a product
  const handleColorChange = (product) =>
    dispatch(chooseColor({ id: product.id, color: product.selectedColor }));

  // Modal state to show or hide product details
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Open modal and set the currently selected product
  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  // Close modal and reset selected product
  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  // Handle "Browse Phones" button click to navigate to products page
  const handleClick = () => {
    console.log("Navigating to products page");
    navigate("/products");
  };

  return (
    <div className="main container py-5">
      {/* Grid of product cards, responsive from 1 to 5 columns */}
      <Row xs={1} sm={2} md={3} lg={5} className="g-4">
        {products.slice(0, 5).map((product) => (
          <Col key={product.id}>
            <Card className="h-100 shadow-sm">
              {/* Product image */}
              <div className="image-wrapper">
                <Card.Img
                  variant="top"
                  src={product.src}
                  alt={product.alt}
                  className="product-image"
                />
              </div>

              {/* Product details */}
              <Card.Body className="d-flex flex-column">
                <Card.Title className="title">{product.title}</Card.Title>
                <Card.Subtitle className="price text-muted mb-2">
                  {product.price}
                </Card.Subtitle>

                {/* Info button to open modal */}
                <div className="mt-auto">
                  <Button
                    variant="link"
                    onClick={() => openModal(product)}
                    aria-label={`View details for ${product.title}`}
                    className="ms-0 p-0"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="bi bi-info-circle text-secondary"></i>
                  </Button>
                </div>

                {/* Modal showing detailed product description */}
                <Modal
                  show={showModal}
                  onHide={closeModal}
                  centered
                  className="info-modal"
                >
                  <Modal.Header closeButton>
                    <Modal.Title>{selectedProduct?.title}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="product-description">
                    {selectedProduct?.description}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Card.Body>

              {/* Footer with color selector and Add to Cart button */}
              <Card.Footer className="d-flex flex-column gap-2">
                <Form.Select
                  aria-label="select color"
                  className="select-color"
                  value={product.selectedColor}
                  onChange={(e) =>
                    handleColorChange({
                      ...product,
                      selectedColor: e.target.value,
                    })
                  }
                >
                  {/* List of available colors for the product */}
                  {product.color.map((color, index) => (
                    <option
                      key={`${product.id}-${index}`}
                      value={color}
                      className="color-option"
                    >
                      {color}
                    </option>
                  ))}
                </Form.Select>

                {/* Add selected product to cart */}
                <Button
                  variant="dark"
                  onClick={() => dispatch(incrementQuantity(product))}
                >
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Welcome section at the bottom of landing page */}
      <div className="text-center mb-5">
        <h1 className="welcome fw-bold">Welcome to 4nez4Mzansi</h1>
        <p className="landing-description text-muted">
          From Kasi to Cape, We've Got Your Phone!. Shop now to find your
          perfect device!
        </p>

        {/* Browse Phones button */}
        <Button
          variant="dark"
          size="lg"
          className="button"
          onClick={handleClick}
        >
          Browse Phones
        </Button>
      </div>
    </div>
  );
}

export default LandingPage;
