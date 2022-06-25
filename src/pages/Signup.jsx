import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import image1 from "../assets/signuphuman.svg";
import logo from "../assets/whitelogo.svg";
import "../scss/signup.scss";
import Footer from "../components/Footer";
import fb from "../assets/fb.svg"
import google from "../assets/google.svg"
const Signup = () => {
  return (
    <>
      <div className="signup-page-sec">
        <div className="image-side">
          <img className="signup-logo" src={logo} alt="...." />
          <img className="signup-human" src={image1} alt="...." />{" "}
        </div>
        <Container>
          <Col className="form-side">
            <Form.Select aria-label="Default " className="language-dropdown">
              <option>English (US) </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
          <Row>
            <Col>
              <div className="signup-from">
                <h1>Create Account</h1>
                <div className="sign-up-with-btn">
                  <Button><img src={google} alt="...." /> Sign up with Google</Button>
                  <Button><img src={fb} alt="..." /> Sign up with Facebook</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
