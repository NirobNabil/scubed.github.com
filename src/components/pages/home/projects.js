import React, { Component } from "react";
import styled from 'styled-components';
import ParallaxImg from '../../parallaxImg.js';
import landing1 from '../../../assets/landing2.png';
import landing2 from '../../../assets/landing1.jpg';
import landing3 from '../../../assets/dummy.jpg';
import stylevars from '../../../stylevars'


const PreviousProjects = styled.div`
	display              : grid;
	grid-template-columns: repeat(3, 1fr);
`

const Headline = styled.div`
    grid-column    : span 3;
    display        : flex;
    justify-content: center;
    font-family    : quicksandlight;
    font-size      : 1em;
    padding        : 1em;
    margin-bottom  : 7vw;
`

const Projects = styled.div`
    display       : flex;
    flex-direction: column;
    justify-content: center;
    grid-column   : span 3;
`

const Spacer = styled.div`
    background  : black;
    width       : 1px;
    height      : 100%;
    grid-column : 10 / 12;
    justify-self: center;
    &:nth-child(1){
        grid-row: 1 / 2;
    }
    &:nth-child(2){
        grid-row: 3 / 4;
    }
`
const ProjectName = styled.h3`
    position   : relative;
    box-sizing : border-box;
    font-family: ralewaythin;
    font-size  : 2em;
    padding    : 1vw 3vw;
    align-self : center;
`

const ProjectThumbnail = styled.div`
    position: relative;
    display : flex;
    width     : 100%;
    height    : 31vw;
    overflow  : hidden;
    background: black;
    grid-row  : 1 / 3;
`

const Project = styled.div`
    margin-top : -5vw;
    position   : relative;
    grid-column: span 3;
    display    : grid;
    height     : 31vw;
    grid-template-columns: repeat(20, calc(100%/20));
    grid-template-rows   : repeat(3, calc(100%/3));
    &:nth-child(odd){
        ${ProjectName}{
            grid-column    : 1 / 12;
            justify-content: left;
            text-align     : right;
        }
        ${ProjectThumbnail}{
            justify-self: right;
            grid-column : 12 / 21;
        }
    }
    &:nth-child(even){
        ${ProjectName}{
            grid-column: 10 / 21;
            text-align : left;
        }
        ${ProjectThumbnail}{
            //border: 1px solid green;
            justify-self: left;
            grid-row    : 1 / 1;
            grid-column : 1 / 10;
        }
    }
`

const ShowMore = styled.a`
    position: relative;
    color: black;
    padding: 1em;
    font-family: quicksandmedium;
    margin-top: 1em;
    align-self: center;
    &:after{
        content: '';
        background: black;
        width: 100%;
        height: 0px;
        position: absolute;
        bottom: 0;
        left: 0;
        transition: .1s;
        transition-delay: .05s;
    }
    &:hover:after{
        height: 2px;
    }
`

class ProjectClass extends Component {
    render(){
        return(
            <Project>
                <Spacer></Spacer>
                <ProjectName className="project-name">{this.props.projectName}</ProjectName>
                <Spacer></Spacer>
                <ProjectThumbnail>
                    <ParallaxImg height="auto" width="100%" grayscale="0%" perspective={stylevars.home.perspective} src={ this.props.src } translateZ="-5px"></ParallaxImg>
                </ProjectThumbnail>
            </Project>
        )
    }
}

const projects = {
    'Electronics Based Startup1': {
        name: ["Electronics Based", <br></br> ,"Startup1"], //this name represents a jsx object
        img: landing1
    },
    'Electronics Based Startup2': {
        name: ["Electronics Based", <br></br> ,"Startup2"],
        img: landing2
    },
    'Electronics Based Startup3': {
        name: ["Electronics Based", <br></br> ,"Startup1"], //this name represents a jsx object
        img: landing1
    },
    'Electronics Based Startup4': {
        name: ["Electronics Based", <br></br> ,"Startup2"],
        img: landing2
    },
}


class ProjectsClass extends Component {
    render(){
        return (
            <PreviousProjects>
                <Headline> <h1>Previous projects</h1> </Headline>
                <Projects>
                    {Object.keys(projects)
                        .map(i => {
                            return <ProjectClass projectName={projects[i].name} src={projects[i].img}></ProjectClass>
                        })
                    }
                    <ShowMore href="#" className="show-more">
                        <div>
                            <span>Show more</span>
                        </div>
                    </ShowMore>
                </Projects>
            </PreviousProjects>
        )
    }
}

export default ProjectsClass;