import React from "react";
import { Container, Row, Col, Stack, Button } from "react-bootstrap";
import "../scss/landingpage.scss";
import laptop from "../assets/Device - Macbook Air.svg"
const Landingpage = () => {
  return (
    <>
      <Container>
        <Row className="main-sec">
          <Col>
            <Stack>
              <div className="into-text">
                <p>
                  Practice your Interview Skills for Job,Internship, or Graduate
                  School
                </p>
              </div>
              <div className="button-start">
                <Button className="start-btn">Start</Button>
                <Button>Tutorial</Button>

              </div>
            </Stack>
          </Col>
          <Col><img src={laptop} alt="...." /></Col>
        </Row>
      </Container>
    </>
  );
};

export default Landingpage;
