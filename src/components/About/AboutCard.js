import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I am <span className="purple">Diep Lam Minh Thu (aka Jun Diep) </span>
            from <br /> <span className="purple"> Ho Chi Minh, Vietnam.</span>
            <br /> I am a dedicated Mobile Developer at Beincom, specializing in React Native development. 
            <br />
            With a strong background in creating user-friendly and efficient mobile applications, I take pride in contributing to projects that have a positive impact.
            <br />
            <br />
            Apart from coding, some activities I enjoy doing are:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Life is about taking chances, trying new things, having fun, making mistakes and learning from it!"{" "}
          </p>
          <footer className="blockquote-footer">Jun Diep</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
