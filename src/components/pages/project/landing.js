import React from 'react';
import styled from 'styled-components';
import ParallaxImgContainer from "../../parallaxImg";
import stylevars from "../../../stylevars";
import SingleImg from "./singleImage"

const LandingContainer = styled.div`
  background-color: #111111;
`;

const ProjectImg = styled.div`
  position: relative;
  display: flex;
  width: 60vw;
  height: 40vw;
  overflow: hidden;
  left: 0vw;
  top: 8vw;
  img{ 
    position: relative;
    left: 0 !important;
  }
  //grid-row: 1 / 3;
`;

const ProjectTitle = styled.h1`
  font-family: ralewaythin;
  color: #fefefe;
  font-size: 6rem;
  position: absolute;
  width: 6em;
  z-index: 10;
  top: ${8 + 38 / 2 + "vw"};
  transform: translateY(-50%);
  left: 50vw;
  line-height: 1em;
`;

const ProjectDetailsContainer = styled.div`
  font-family: ralewayregular;
  margin-top: 20vw;
  display: flex;
  width: 100vw;
  justify-content: center;
`;

const ProjectHistory = styled.div`
  width: 16rem;
  color: white;
  blockquote {
  }
  blockquote::before {
  }
`;
const HistoryBlockquote = styled.blockquote`
  margin-top: 1rem;
  font-size: 0.9rem;
  position: relative;
  opacity: 0.5;
  margin-left: 0.3rem;
  padding-left: 1rem;
  &::before {
    position: absolute;
    height: 100%;
    width: 1px;
    content: "";
    background: white;
    left: 0vw;
  }
`;

const ProjectSummary = styled.div`
  color: white;
  width: 20rem;
`;

// function GG(props){
//   console.log(props.obj);
//   let obj = props.obj;
//   if(obj.toUpperCase().indexOf("HTTP")){
    
//   }
//   return (
    
//   )
// }

class Landing extends React.Component{
    render(){
        return (
            <LandingContainer>
            <ProjectTitle className="project-title">{this.props.project.name}</ProjectTitle>
            <ProjectImg className="project-img">
                <ParallaxImgContainer
                grayscale="0%"
                perspective={stylevars.home.perspective}
                translateZ="-5px"
                src={this.props.project.img}
                />
            </ProjectImg>
            <ProjectDetailsContainer className="project-details-container">
                <ProjectHistory>
                {this.props.project.year}
                { this.props.project.highlights.map( (obj) => {
                    console.log("gg")
                    return (
                      <HistoryBlockquote>
                        { obj.toLowerCase().indexOf("http") == -1 ? obj : <a href={obj} >{obj}</a> }
                      </HistoryBlockquote>
                    )
                    }) 
                }
                </ProjectHistory>
                <ProjectSummary>
                <p>{this.props.project.details}</p>
                </ProjectSummary>
            </ProjectDetailsContainer>
            <SingleImg img={this.props.project.landingSS} />
            </LandingContainer>
        )
    }
}

export default Landing;