import React, { Component } from "react";
import styled from "styled-components";
import Projects from "./home/projects";
import { projects } from "../../data";
import Footer from "../footer";
import stylevars from "../../stylevars";
import Scrooth from "../../scrooth"

const PageWrapper = styled.div`
  height: 100vh;
  perspective: ${stylevars.home.perspective};
  overflow: scroll;
  overflow-x: hidden;
  background: white;
  width: 100vw;
  //border: .3em solid black;
`;

class ProjectsPage extends Component {
  componentDidMount(){
    const scroll = new Scrooth({
      element: document.querySelector('.projectsWrapper'),
      strength: 18,
      acceleration: 2.5,
      deceleration: .9,
    });
  }
  render() {
    return (
      <PageWrapper className="projectsWrapper">
        <Projects match={this.props.match} projects={projects} />
        <Footer />
      </PageWrapper>
    );
  }
}

export default ProjectsPage;
