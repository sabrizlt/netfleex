import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Button from "react-bootstrap/Button";

function Footer() {
  return (
    <div className="bg-black text-light">
      <Container fluid className="py-5">
        <Row className="d-flex">
          <Col
            md={2}
            className="text-center text-md-start mb-3 mb-md-0"
            style={{ fontSize: "0.5em" }}
          >
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-start">
              <div className="me-md-3 mb-3 mb-md-0">
                <FaFacebookSquare size={18} className="me-3 mb-3 mt-5 mx-5" />
                <FaInstagram size={18} className="me-3 mb-3 mt-5 " />
                <FaTwitter size={18} className="me-3 mb-3 mt-5 " />
                <FaYoutube size={18} className=" mb-3 mt-5 " />
                <ul className="list-unstyled text-center text-md-start  mx-5">
                  <li className="mb-2">Audio and Subtitles</li>
                  <li className="mb-2">Media Center</li>
                  <li className="mb-2">Privacy</li>
                  <li className="mb-4">Contact Us</li>
                  <Button
                    variant="outline-light"
                    className="mb-2 rounded-0"
                    style={{ fontSize: "0.8em" }}
                  >
                    Service Code
                  </Button>
                  <p className="mb-0 ">
                    &copy; 1997-2023 Netflix, Inc. i-0023456789
                  </p>
                </ul>
              </div>
            </div>
          </Col>
          <Col
            md={2}
            className="text-center text-md-start mb-3 mb-md-0"
            style={{ fontSize: "0.5em" }}
          >
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-start">
              <div className="me-md-3 mb-3 mb-md-0">
                <FaFacebookSquare
                  size={18}
                  className="text-black me-3 mb-3 mt-5 "
                />
                <FaInstagram size={18} className="text-black me-3 mb-3 mt-5 " />
                <FaTwitter size={18} className="text-black me-3 mb-3 mt-5 " />
                <FaYoutube size={18} className="text-black mb-3 mt-5 " />
                <ul className="list-unstyled text-center text-md-start  ">
                  <li className="mb-2">Audio and Subtitles</li>
                  <li className="mb-2">Media Center</li>
                  <li className="mb-2">Privacy</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col
            md={2}
            className="text-center text-md-start mb-3 mb-md-0"
            style={{ fontSize: "0.5em" }}
          >
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-start">
              <div className="me-md-3 mb-3 mb-md-0">
                <FaFacebookSquare
                  size={18}
                  className="text-black me-3 mb-3 mt-5 "
                />
                <FaInstagram size={18} className="text-black me-3 mb-3 mt-5 " />
                <FaTwitter size={18} className="text-black me-3 mb-3 mt-5 " />
                <FaYoutube size={18} className="text-black mb-3 mt-5 " />
                <ul className="list-unstyled text-center text-md-start  ">
                  <li className="mb-2">Help Center</li>
                  <li className="mb-2">Jobs</li>
                  <li className="mb-2">Cookie Preferences</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col
            md={2}
            className="text-center text-md-start mb-3 mb-md-0"
            style={{ fontSize: "0.5em" }}
          >
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-start">
              <div className="me-md-3 mb-3 mb-md-0">
                <FaFacebookSquare
                  size={18}
                  className="text-black me-3 mb-3 mt-5 "
                />
                <FaInstagram size={18} className="text-black me-3 mb-3 mt-5 " />
                <FaTwitter size={18} className="text-black me-3 mb-3 mt-5 " />
                <FaYoutube size={18} className="text-black mb-3 mt-5 " />
                <ul className="list-unstyled text-center text-md-start  ">
                  <li className="mb-2">Gift cards</li>
                  <li className="mb-2">Terms of Use</li>
                  <li className="mb-2">Corporate information</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
