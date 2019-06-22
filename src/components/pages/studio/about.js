import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import landing3 from "../../../assets/landing3.jpg";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const AboutImg = styled.div`
  position: relative;
  top: -20vh;
  img {
    width: 35vw;
  }
`;

const AboutText = styled.div`
  position: relative;
  width: 20em;
  padding: 8rem 10rem;
  p {
    font-family: ralewaylight;
    font-size: 1.8em;
    width: 100%;
    text-align: left;
  }
`;

class About extends Component {
  render() {
    return (
      <AboutContainer className="about" >
        <AboutImg>
          <img src={landing3} />
        </AboutImg>
        <AboutText>
          <p>
          We, at S Cubed are obsessed with creating better machines at a cheaper cost, which is the main drive for innovation. We like to stay updated on the bleeding edge of modern technology and start improving from there.
          </p>
        </AboutText>
      </AboutContainer>
    );
  }
}

export default About;