import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const SkillsPassionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  div {
    padding: 0em 6rem;
    font-family: rzregular;
    font-weight: 50;
    width: 20rem;
    li {
      line-height: 1.3em;
      font-size: 1.95em;
      word-spacing: 3px;
      list-style-type: none;
      &:nth-child(1){
        margin-top: 4rem;
      }
    }
    p {
      width: 17rem;
      font-family: quicksandregular;
      line-height: 1.4em;
      font-size: 1.1em;
      margin: 0;
    }
  }
`;

const Title = styled.h6`
  margin: 0;
  padding-bottom: 1.2rem;
  font-size: 0.9rem;
  font-weight: 400;
  font-family: monospace;
`;

class SkillPassion extends Component {
  render() {
    return (
      <SkillsPassionContainer className="skills">
        <div>
          <Title>Skills</Title>
          <li>Web and Software Development</li>
          <li>Brand Identity Design</li>
          <li>Digital Marketing</li>
          <li>Technical Consultant</li>
          <li>Computing Infrastructure Design</li>
          <li>SEO</li>
          
        </div>
        <div>
          <Title>Passion</Title>
          <p>
          S Cubed has a mission of automating industries, workplaces and homes to create value to lives. Automation is the future, it can be used in your household and even in the production line of an industry. S Cubed is opening doors to the future by providing better technology focusing on three key factors: Sustainability, Security and Simplicity.
          </p>
        </div>
      </SkillsPassionContainer>
    );
  }
}

export default SkillPassion;