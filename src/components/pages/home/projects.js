import React, { Component } from "react";
import styled from "styled-components";
import { Router, Route, Switch, BrowserRouter, Link } from "react-router-dom";
import ParallaxImg from "../../parallaxImg.js";
import ProjectPage from "../project.js";
import stylevars from "../../../stylevars";
import SlideShow from "../../slideshow";


const PreviousProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Headline = styled.div`
  grid-column: span 3;
  display: flex;
  justify-content: center;
  font-family: quicksandlight;
  font-size: 1em;
  padding: 1em;
  margin-bottom: 7vw;
`;

const Projects = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-column: span 3;
`;

const Spacer = styled.div`
  background: black;
  width: 1px;
  height: 100%;
  grid-column: 10 / 12;
  justify-self: center;
  &:nth-child(1) {
    grid-row: 1 / 2;
  }
  &:nth-child(2) {
    grid-row: 3 / 4;
  }
`;
const ProjectName = styled.h3`
  position: relative;
  box-sizing: border-box;
  //font-family: ralewaythin;
  font-family: rzregular;
  font-size: 2.1em;
  font-weight: 100;
  padding: 1vw 3vw;
  align-self: center;
`;

const ProjectThumbnail = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 31vw;
  overflow: hidden;
  grid-row: 1 / 3;
`;

const Project = styled.div`
  margin-top: -5vw;
  position: relative;
  grid-column: span 3;
  display: grid;
  height: 31vw;
  grid-template-columns: repeat(20, calc(100% / 20));
  grid-template-rows: repeat(3, calc(100% / 3));
  &:nth-child(odd) {
    ${ProjectName} {
      grid-column: 1 / 12;
      justify-content: left;
      text-align: right;
    }
    ${ProjectThumbnail} {
      justify-self: right;
      grid-column: 12 / 21;
    }
  }
  &:nth-child(even) {
    ${ProjectName} {
      grid-column: 10 / 21;
      text-align: left;
    }
    ${ProjectThumbnail} {
      //border: 1px solid green;
      justify-self: left;
      grid-row: 1 / 1;
      grid-column: 1 / 10;
    }
  }
`;

const ShowMore = styled.span`
  position: relative;
  color: black;
  padding: 1em;
  font-family: quicksandmedium;
  margin-top: 1em;
  align-self: center;
  &:after {
    content: "";
    background: black;
    width: 100%;
    height: 0px;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: 0.1s;
    transition-delay: 0.05s;
  }
  &:hover:after {
    height: 2px;
  }
`;

class ProjectClass extends Component {
  constructor() {
    super();
    this.projectPageLink = React.createRef();
  }
  componentDidMount() {
    //console.log(this.props.project);
    // this.projectPageLink.current.addEventListener("click", e => {
    //   e.preventDefault();
    //   this.props.showProjectPage(this.props.project, this.props.currentURL);
    // });
  }
  render() {
    return (
      <Project>
        <Spacer />
        <ProjectName className="project-name">
          {/* <a
            ref={this.projectPageLink}
            href={`/${this.props.currentURL}/${this.props.project.url}`}
          > */}
          <Link to={`/projects/${this.props.project.url}`}>
            {this.props.project.nameHTML}
          </Link> 
        </ProjectName>
        <Spacer />
        <ProjectThumbnail>
          <SlideShow
            height="auto"
            width="100%"
            grayscale="0%"
            perspective={stylevars.home.perspective}
            src={this.props.src}
            translateZ="-5px"
          />
        </ProjectThumbnail>
      </Project>
    );
  }
}

const ProjectPageWrapper = styled.div`
  transform: translateX(-100vw);
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  //perspective: ${stylevars.home.perspective};
  //overflow: scroll;
  //overflow-x: hidden;
  background: white;
  z-index: 20;
  transition: 1s;
  transition-timing-function: ease-in-out;
  &.projectPageOnView {
    transform: translate(0vw, 0vw);
  }
`;

class ProjectPageRenderer extends Component {
  constructor() {
    super();
    this.pageWrapper = React.createRef();
  }
  componentDidUpdate() {
    if (this.props.showingProjectPage) {
      console.log("wrapper");
      console.log(this.pageWrapper.current);
      this.pageWrapper.current.classList.add("projectPageOnView");
      //this.pageWrapper.current.focus();
    } else if (!this.props.showingProjectPage) {
      this.pageWrapper.current.classList.remove("projectPageOnView");
    }
  }
  render() {
    // if (this.props.project && this.props.showingProjectPage) {
    return (
      <ProjectPageWrapper ref={this.pageWrapper}>
        {this.props.project ? (
          <ProjectPage match={this.props.project.url} from="homepage" />
        ) : (
          <></>
        )}
        ;
      </ProjectPageWrapper>
    );
    // } else {
    //   console.log("came in empty");
    //   return <></>;
    // }
  }
}

const SpacerVertical = styled.div`
  height: ${props => props.height};
`;

class ProjectsClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingProjectPage: false,
      currentProject: null
    };
    //project is a project object containing url, name and img. this obj is passed from the parent
    this.showProjectPage = (project, baseURL) => {
      this.setState({ currentProject: project, showingProjectPage: true });
      console.log("called pushstate");
      window.history.pushState(
        {
          projectURL: `${project.url}`
        },
        "",
        `/Projects/${project.url}`
      );
      console.log(
        `called showprojectpage ${this.state.currentProject} ${
          this.state.showingProjectPage
        }`
      );
    };
    this.showProjectPage.bind(this);
    window.onpopstate = e => {
      console.log("inside popstate");
      console.log(e.state);
      if (e.state.currentURL == `${this.props.match.path}`) {
        this.setState({ showingProjectPage: false, currentProject: "" });
      }
    };

    this.projectsToShow = props.projectsToShow ? props.projectsToShow : Object.keys(props.projects);
  }
  componentDidMount() {
    window.history.replaceState(
      {
        currentURL: `${this.props.match.path}`
      },
      "",
      `${this.props.match.path}`
    );
  }
  render() {
    return (
      <>
      <ProjectPageRenderer
        currentURL={this.props.match.path}
        project={this.state.currentProject}
        showingProjectPage={this.state.showingProjectPage}
      />
      <PreviousProjects>
        <Headline>
          {this.props.fromHomePage ? (
            <h1>Previous projects</h1>
          ) : (
            <SpacerVertical height="5vw" />
          )}
        </Headline>
        <Projects>
          {this.projectsToShow.map(i => {
            console.log(i)
            return (
              <ProjectClass
                currentURL={this.props.match.path}
                showProjectPage={this.showProjectPage}
                project={this.props.projects[i]}
                src={this.props.projects[i].img}
              />
            );
          })}
          <ShowMore className="show-more">
            <Link to="/Projects">
              <div>
                <span>Show more</span>
              </div>
            </Link>
          </ShowMore>
        </Projects>
      </PreviousProjects>
      </>
    );
  }
}

export default ProjectsClass;
