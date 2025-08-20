import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Card, Col, Row, Form, Modal } from "react-bootstrap";
import { chooseColor, addToCart } from "../store/productsSlice";

function LandingPage() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const handleColorChange = (product) =>
    dispatch(chooseColor({ id: product.id, color: product.selectedColor }));
  const handleAddToCart = (product) => dispatch(addToCart(product));
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
  const handleClick = () => {};
  return (
    <div className="landing-page">
      <Row xs={1} md={2} lg={5} className="g-4">
        {products.slice(0, 5).map((product) => (
          <>
            <Col key={product.id}>
              <Card>
                <Card.Img
                  variant="top"
                  src={product.src}
                  srcSet={product.srcSet}
                  sizes={product.sizes}
                  alt={product.alt}
                  className="product-image"
                />
                <Card.Body>
                  <Card.Title className="title">{product.title}</Card.Title>
                  <Card.Subtitle className="price">
                    {product.price}
                  </Card.Subtitle>
                  <Button
                    variant="link"
                    onClick={() => openModal(product)}
                    aria-label={`View details for ${product.title}`}
                    className="ms-2 p-0"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="bi bi-info-circle text-secondary"></i>
                  </Button>
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
                <Card.Footer>
                  <label className="form-label">Choose Color</label>
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
                      <option key={color} value={color}>
                        {color}
                      </option>
                    ))}
                  </Form.Select>
                  <Button variant="dark" onClick={handleAddToCart}>
                    Add to Cart
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          </>
        ))}
      </Row>
      <h1 className="welcome">Welcome to 4nez4Mzansi</h1>
      <p className="landing-descrition">
        From Kasi to Cape, We've Got Your Phone!. Shop now to find your perfect
        device!
      </p>
      <Button variant="dark" className="button" onClick={handleClick}>
        Browse Phones
      </Button>
    </div>
  );
}

export default LandingPage;
