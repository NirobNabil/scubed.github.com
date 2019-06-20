import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const LandingContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(10vw, 25vw) 10vw minmax(20vw, 40vw) 1fr;
  grid-template-rows: 1fr minmax(25rem, 20rem) 1fr;
  height: 100vh;
  width: 100vw;
  margin: 0;
  top: 0;
  background: black;
  color: white;
`;

const Logo = styled.div`
  grid-column: 1;
  grid-row: 2;
  position: relative;
  font-family: codelight;
  font-size: 5vw;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Headline = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  grid-column: 3;
  grid-row: 2;
  line-height: 0.95em;
  font-size: 9vw;
  font-family: rzregular;
`;

class Landing extends Component {
  render() {
    return (
      <LandingContainer>
        <Logo>
          <h1>
            S<sup>3</sup>
          </h1>
        </Logo>
        <Headline>
          Studio <br /> & vision
        </Headline>
      </LandingContainer>
    );
  }
}

export default Landing;