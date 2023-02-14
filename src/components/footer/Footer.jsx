import "./Footer.scss";
import { FaEnvelope, FaPhone } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer py-5 bg-dark">
      <div className="container">
        <div className="footer-content text-white grid">
          <div className="footer-item text-center">
            <h6 className="fs-17 fw-6">Links</h6>
            <ul>
              <li>
                <a href="/aboutus" className="fs-15">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="fs-15">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/blog" className="fs-15">
                  Blog
                </a>
              </li>
              <li>
                <a href="faq" className="fs-15">
                  FAQ's
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-item text-center">
            <h6 className="fs-17 fw-6">Policies</h6>
            <ul>
              <li>
                <a href="/terms" className="fs-15">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/cookies" className="fs-15">
                  Cookies Policy
                </a>
              </li>
              <li>
                <a href="/policy" className="fs-15">
                  Data Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-item text-center">
            <h6 className="fs-17 fw-6">About Shopping Hub</h6>
            <ul>
              <li>
                <a href="/terms" className="fs-15">
                  Company Info
                </a>
              </li>
              <li>
                <a href="/cookies" className="fs-15">
                  Branches
                </a>
              </li>
              <li>
                <a href="/policy" className="fs-15">
                  Store
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-item text-center">
            <h6 className="fs-17 fw-6">Contact</h6>
            <ul>
              <li>
                <span>
                  <FaPhone />
                </span>
                <span className="fs-15">+20 10234 333 22</span>
              </li>
              <li>
                <span>
                  <FaEnvelope />
                </span>
                <span className="fs-15">alielzayat07@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
