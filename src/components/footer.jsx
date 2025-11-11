function Footer() {
  // Get the current year dynamically
  const year = new Date().getFullYear();

  return (
    // Main footer container
    <footer className="footer" aria-labelledby="footer-heading">
      <div className="footer-inner">
        {/* Column 1: Logo and Description */}
        <div className="footer-col">
          {/* Store logo / name */}
          <div className="footer-logo">Online Store</div>

          {/* Short description about the store */}
          <div className="footer-text">
            Curated products, fair prices, fast shipping. Built for a simple and
            delightful shopping experience.
          </div>

          {/* Small copyright text with current year */}
          <div className="footer-small">
            © {year} Online Store. All rights reserved.
          </div>
        </div>

        {/* Column 2: Shop Links */}
        <div className="footer-col">
          <h4>Shop</h4>
          <nav aria-label="footer shop">
            <a href="/">Home</a>
            <a href="/categories">All Products</a>
            <a href="/deals">Deals</a>
            <a href="/gift-cards">Gift Cards</a>
          </nav>
        </div>

        {/* Column 3: Support Links */}
        <div className="footer-col">
          <h4>Support</h4>
          <nav aria-label="footer support">
            <a href="/help">Help Center</a>
            <a href="/shipping">Shipping & Returns</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </nav>
        </div>

        {/* Column 4: Contact Information */}
        <div className="footer-col">
          <h4>Contact</h4>
          <div className="footer-text">
            {/* Contact email */}
            <div>support@4nez4Mzansi.com</div>
            {/* Contact phone number */}
            <div>+27 (67) 027-2882</div>
            {/* Working hours */}
            <div className="footer-small">Mon–Fri, 9am–6pm</div>
          </div>

          {/* Social media links */}
          <div className="footer-social">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Export the Footer component to be used in other parts of the app
export default Footer;
