import { Button } from "react-bootstrap";

function LandingPage() {
  const handleClick = () => {};
  return (
    <div className="landing-page">
      <h1>Welcome to MobDrip</h1>
      <p className="landing-descrition">
        Mzansi's Plug for Affordable Phone Drip. Shop now to find your perfect
        device!
      </p>
      <Button variant="dark" className="button" onClick={handleClick}>
        Browse Phones
      </Button>
    </div>
  );
}

export default LandingPage;
