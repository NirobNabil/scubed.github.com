import React, { Component } from "react";
import styled from "styled-components";
import { projects } from "../../data";
import SpecialText from "../specialText.js";
import Footer from "../footer";
import stylevars from "../../stylevars";
import ScrollReveal from "scrollreveal";
import Scrooth from "../../scrooth";
import Landing from "./project/landing";
import SpecialSS from "./project/specialSS";
import SingleImg from "./project/singleImage";

const ProjectPageContainer = styled.div`
  height: 100vh;
  min-width: 100vw;
  perspective: ${stylevars.home.perspective};
  overflow: scroll;
  overflow-x: hidden;
`;


const PostSpecialStuff = styled.div`
  background: #111111;
`;

const Spacer = styled.div`
  height: ${props => props.height};
`;

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rendered: false
    }
    this.pageContainer = React.createRef();
    Object.keys(projects).map(projectName => {
        if (projects[projectName].url == this.props.match) {
          this.project = projects[projectName];
          console.log("found");
          console.log(this.project);
        }
    });
  }
  componentDidMount() {
    this.setState({
      rendered: true
    });

    //instantiating new scrollreveal instance on every mount
    const defaults = {
      delay: 100,
      duration: 600,
      distance: "120px",
      container: this.pageContainer.current,
      opacity: 0,
      origin: "bottom",
      reset: false,
      viewFactor: .5,
    };
    const sreveal = ScrollReveal(defaults);
    sreveal.debug = true;
    this.sr = sreveal;

    //calling reveals for elements
    this.sr.reveal(".project-title", { delay: 100, viewFactor: 0, }); //(this.props.from == "homepage") ? 900 : 1000 });
   
  }
  componentDidUpdate(){
    if(this.state.rendered && this.props.SRdestroyed){
      this.sr.reveal(".project-details-container > * > *");
      this.sr.reveal(".singleImg");

      this.sr.reveal(".contact-info-container > *, .about-us > *"); //footer

      this.props.updateSRstatus(false);
    } 
  }
  componentWillUnmount() {
    console.log("home unmount");
    this.sr.destroy();
    this.props.updateSRstatus(true);
  }
  render() {
    return (
      <ProjectPageContainer ref={this.pageContainer}>
        
        <Landing project={this.project} />
        { 
          this.state.rendered ? ( 
            <SpecialText
              pageWrapper={this.pageContainer.current}
              specialText={this.project.specialText}
              specialImg={this.project.specialImg}
            /> 
          ): (
            <></>
          ) 
        }
        <SpecialSS specialSSes={[this.project.specialSS, this.project.specialSS, this.project.specialSS]} ></SpecialSS>
        <PostSpecialStuff>
          <Spacer height="2rem" />
          <SingleImg img={this.project.img} width="80rem" />

          <Spacer height="2rem" />
          <SingleImg img={this.project.img} width="100rem" />

          <Spacer height="6rem" />
          <SpecialSS specialSSes={[this.project.specialSS, this.project.specialSS, this.project.specialSS]} ></SpecialSS>

        </PostSpecialStuff>
        <Footer />
      </ProjectPageContainer>
    );
  }
}

export default Project;
