import { Button } from "react-bootstrap";

function LandingPage() {
  const handleClick = () => {};
  return (
    <div className="landing-page">
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
