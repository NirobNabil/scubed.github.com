import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import simple from "../../assets/1 simple.jpg";

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(20, 5vw);
  grid-template-rows: repeat(20, 5vh);
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  overflow-x: hidden;
  background: white;
`;


const SkillContainer = styled.div`
  grid-column: 8/18;
  grid-row: 8/20;
  padding-left: 4rem;
  //border: 1px solid black;
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
	z-index: 10;
  //max-width: 30rem;
`;

const SkillHeadline = styled.h1`
  line-height: .9em;
  color: #111111;
  letter-spacing: 4px;
  font-size: 9em;
  font-family: ralewaylight;
`;

const SkillSubtitle = styled.div`
  width: 90%;
  margin-top: 2em;
  line-height: 1.3em;
  font-size: 1.4em;
  font-family: ralewayregular;
	//background: rgba(255,255,255, .49);
	//box-shadow: 0px 0px 90px 5px white;
`;

const ExtraImgContainer = styled.div`
	position: relative;
  grid-column: 4/10;
  grid-row: 3/15;
	z-index: 1;
  img {
    max-width: 100%;
  }
	/* &:after{
		z-index: 5;
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		//background: rgba(255,255,255,.5);
		background: black;
		width: 100%;
		height: 100%;
	} */
`;

class Skill extends Component {
  render() {
    return (
      <PageContainer>
        <SkillContainer>
          <SkillHeadline>{this.props.match}</SkillHeadline>
          <SkillSubtitle>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </SkillSubtitle>
        </SkillContainer>
        <ExtraImgContainer>
          <img src={simple} />
        </ExtraImgContainer>
      </PageContainer>
    );
  }
}

export default Skill;
