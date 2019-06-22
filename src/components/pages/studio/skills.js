import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const SkillsPassionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  div {
    padding: 0em 3rem;
    font-family: quicksandmedium;
    width: 18rem;
    li {
      line-height: 1.2em;
      font-size: 1.9em;
      list-style-type: none;
    }
    p {
      font-family: quicksandmedium;
      line-height: 1.4em;
      font-size: 1.1em;
      margin: 0;
    }
  }
`;

const Title = styled.span`
  font-size: 0.9rem;
  padding-bottom: 0.4rem;
  font-family: monospace;
`;

class SkillPassion extends Component {
  render() {
    return (
      <SkillsPassionContainer className="skills">
        <div>
          <Title>Skills</Title>
          <li>Strategy</li>
          <li>Brand Identities</li>
          <li>Print Design</li>
          <li>UI/UX Design</li>
          <li>Art Direction</li>
          <li>Back End</li>
          <li>Admin System</li>
          <li>Front End</li>
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