import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiAndroid,
  DiGit,
  DiJavascript1,
  DiReact,
  DiSqllite
} from "react-icons/di";
import {
  SiAwsamplify,
  SiFirebase,
  SiIos
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAndroid />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSqllite />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAwsamplify />
      </Col>
    </Row>
  );
}

export default Techstack;
