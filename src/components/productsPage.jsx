import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Card, Col, Row, Form, Modal } from "react-bootstrap";
import { chooseColor } from "../store/productsSlice";
import { incrementQuantity } from "../store/shoppingCartSlice";

function ProductPage() {
  // Get all products from Redux store
  const products = useSelector((state) => state.products.products);

  // Initialize Redux dispatch
  const dispatch = useDispatch();

  // Function to handle color selection for a product
  const handleColorChange = (product) =>
    dispatch(chooseColor({ id: product.id, color: product.selectedColor }));

  // State for controlling product details modal
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Open modal and set the selected product
  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  // Close modal and reset selected product
  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className="main container py-5">
      {/* Grid layout for products, responsive from 1 to 5 columns */}
      <Row xs={1} sm={2} md={3} lg={5} className="g-4">
        {products.map((product) => (
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

                {/* Modal showing product description */}
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
                {/* Color selection dropdown */}
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

                {/* Add product to cart */}
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
    </div>
  );
}

export default ProductPage;
