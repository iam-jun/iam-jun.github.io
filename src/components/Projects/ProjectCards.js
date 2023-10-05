import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { DiApple } from "react-icons/di";
import { DiAndroid } from "react-icons/di";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.iosLink && 
          <Button variant="primary" href={props.iosLink} target="_blank">
            <DiApple /> &nbsp;
            {"App Store"}
          </Button>
        }

        {props.androidLink &&
          <Button
            variant="primary"
            href={props.androidLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <DiAndroid /> &nbsp;
            {"Play Store"}
          </Button>
        }
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
