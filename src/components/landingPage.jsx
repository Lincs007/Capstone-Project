import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Card, Col, Row, Form, Collapse } from "react-bootstrap";
import { chooseColor, addToCart } from "../store/productsSlice";

function LandingPage() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const handleColorChange = (product) =>
    dispatch(chooseColor({ id: product.id, color: product.selectedColor }));
  const handleAddToCart = (product) => dispatch(addToCart(product));
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleCollapse = () => setIsExpanded(!isExpanded);
  const handleClick = () => {};
  return (
    <div className="landing-page">
      <Row xs={1} md={2} lg={4} className="g-4">
        {products.slice(0, 4).map((product) => (
          <Col key={product.id}>
            <Card>
              <Card.Img
                variant="top"
                src={product.src}
                srcSet={product.srcSet}
                sizes={product.sizes}
                alt={product.alt}
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <Card.Body>
                <Card.Title className="title">{product.title}</Card.Title>
                <Card.Subtitle className="price">{product.price}</Card.Subtitle>
                <Button
                  variant="outline-dark"
                  onClick={toggleCollapse}
                  aria-expanded={isExpanded}
                  aria-controls={`collapse-${product.id}`}
                >
                  {isExpanded ? "Less" : "More"}
                </Button>
                <Collapse in={isExpanded}>
                  <div id={`collapse-${product.id}`} className="mt-3">
                    <Card.Text>{product.description}</Card.Text>
                  </div>
                </Collapse>
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
        ))}
      </Row>
      <h1>Welcome to 4nez4Mzansi</h1>
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
