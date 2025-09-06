import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Card, Col, Row, Form, Modal } from "react-bootstrap";
import { chooseColor } from "../store/productsSlice";
import { incrementQuantity } from "../store/shoppingCartSlice";

function ProductPage() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const handleColorChange = (product) =>
    dispatch(chooseColor({ id: product.id, color: product.selectedColor }));
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };
  return (
    <div className="main container py-5">
      <Row xs={1} sm={2} md={3} lg={5} className="g-4">
        {products.map((product) => (
          <>
            <Col key={product.id}>
              <Card className="h-100 shadow-sm">
                <div className="image-wrapper">
                  <Card.Img
                    variant="top"
                    src={product.src}
                    alt={product.alt}
                    className="product-image"
                  />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="title">{product.title}</Card.Title>
                  <Card.Subtitle className="price text-muted mb-2">
                    {product.price}
                  </Card.Subtitle>
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
                  <Modal show={showModal} onHide={closeModal} centered>
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
                    {product.color.map((color) => (
                      <option
                        key={color}
                        value={color}
                        className="color-option"
                      >
                        {color}
                      </option>
                    ))}
                  </Form.Select>
                  <Button
                    variant="dark"
                    onClick={() => dispatch(incrementQuantity(product))}
                  >
                    Add to Cart
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          </>
        ))}
      </Row>
    </div>
  );
}

export default ProductPage;
