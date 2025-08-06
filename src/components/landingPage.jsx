import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Card, Col, Row } from "react-bootstrap";

function LandingPage() {
  const products = useSelector((state) => state.products.products);
  const handleClick = () => {};
  return (
    <div className="landing-page">
      <Row xs={1} md={2} lg={3} className="g-4">
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
                <Card.Title> {product.title} </Card.Title>
                <Card.Text> {product.description} </Card.Text>
              </Card.Body>
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
