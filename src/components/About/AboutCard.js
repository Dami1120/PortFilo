import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">akimitsu Dami </span>
            from <span className="purple"> Kyoto, Japan.</span>
            <br />I am a junior pursuing IMSC in Maths and Computing in BIT
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Physical activity
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing gamges
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to create new!"{" "}
          </p>
          <footer className="blockquote-footer">Akimitsu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
