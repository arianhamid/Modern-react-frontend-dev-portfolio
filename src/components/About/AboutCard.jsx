import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="blue">ArianYegane Hamid </span>
            from <span className="blue"> Mashhad, Iran.</span>
            <br />I am an enthusiastic and motivated software engineer with a
            great passion for creating innovative applications and systems.
            <br />
            In addition to my broad knowledge base of programming languages,
            frameworks, I have a growing interest in the world of blockchain and
            web3.
            <br />I find the technology fascinating and I'm excited to explore
            its potential for creating new and innovative solutions.
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play Competitive Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Study New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travel and Discover New Things
            </li>
          </ul>

          <p style={{ color: "rgb(64 88 187)", fontSize: "1.2rem" }}>
            “The best time to plant a tree was 20 years ago. The second best
            time is now.”
          </p>
          <footer className="blockquote-footer">Chinese Proverb</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
