import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bicGroup from "../../Assets/Projects/bic_group.png";
import bicChat from "../../Assets/Projects/bic_chat.png";
import youVersion from "../../Assets/Projects/you_version.png";
import eveHr from "../../Assets/Projects/eve_hr.png";
import kwilt from "../../Assets/Projects/kwilt.png";
import hakobiya from "../../Assets/Projects/hakobiya.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bicGroup}
              title="BIC Group | A Plaform for all community"
              description="During my three-year tenure as a Mobile Developer at Beincom, I had the privilege of being a part of the initial team responsible for building the app from the ground up."
              iosLink="https://apps.apple.com/vn/app/bic-group/id6444276276"
              androidLink="https://play.google.com/store/apps/details?id=com.beincom.group"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bicChat}
              title="BIC Chat"
              description="Besides the BIC Group app, the Beincom platform has the BIC Chat app to connect everyone in direct conversation. People can be easy to continue the communication stream of a community conveniently."
              iosLink="https://testflight.apple.com/join/QT4Lepbi"
              androidLink="https://play.google.com/store/apps/details?id=com.beincom.chat"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youVersion}
              title="YouVersion Bible App + Audio"
              description="I have freelanced at Futurify, an open-source company, where I was a member of the team responsible for rebuilding the Holy Bible for YouVersion."
              iosLink="https://apps.apple.com/us/app/bible/id282935706"
              androidLink="https://play.google.com/store/apps/details?id=com.sirma.mobile.bible.android"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eveHr}
              title="EveHR | Benefits & Recognition"
              description="During my one-year tenure as a Mobile Developer at Futurify, I had the opportunity to work as a part of a team that developed EveHR and created customized versions for other prominent companies, including AIA, DHL, Suntory, and Nestle"
              iosLink="https://apps.apple.com/us/app/evehr-recognition/id1493266245"
              androidLink="https://play.google.com/store/apps/details?id=com.evehr.demo&hl=en"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kwilt}
              title="Kwilt | Photo & Video Cloud Storage"
              description="During my one-year tenure as a Mobile Developer at Futurify, I had the opportunity to develop a native android app that upload files to a physical storage that works as  a cloud storage"
              androidLink="https://play.google.com/store/apps/details?id=com.kwiltapp.companion&hl=en&gl=US"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hakobiya}
              title="HAKOBIYA | Delivery Service"
              description="A mobile app designed to simplify logistics and delivery management, providing real-time tracking and essential shipment details for efficient and reliable package delivery."
              androidLink="https://play.google.com/store/apps/details?id=com.adnet.spacesharingpr&hl=en&gl=US"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
