import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Landing from "./home/landing";
import Services from "./home/services";
import Projects from "./home/projects";
import Footer from "../footer";
import stylevars from "../../stylevars";
import { getElem, getStyles } from "../../globalFuncs";
import landing1 from "../../assets/landing2.png";
import landing2 from "../../assets/landing1.jpg";
import landing3 from "../../assets/dummy.jpg";
import { projects } from "../../data.js";
import ScrollReveal from "scrollreveal";

let HomeContainer = styled.div`
  height: 100vh;
  perspective: ${stylevars.home.perspective};
  overflow: scroll;
  overflow-x: hidden;
  background: white;
  &:after{
    content: '';
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: 50;
    position: absolute;
    background: black;
    opacity: 1;
  }
`;

class Home extends Component {
  constructor() {
    super();
    this.sr = null;
  }
  componentDidMount() {
    console.log("mounted");
    //instantiating new scrollreveal instance on every mount
    const defaults = {
      delay: 100,
      duration: 600,
      distance: "120px",
      container: document.querySelector(".home-container"),
      origin: "bottom",
      reset: false
    };
    const sreveal = ScrollReveal(defaults);
    sreveal.debug = true;
    this.sr = sreveal;
    //window.sr = sreveal

    //calling reveals for elements
    this.sr.reveal(".app", { delay: 400 });
    this.sr.reveal(".landing-text > *", { distance: "80px", delay: 400, interval: 100 });
    this.sr.reveal(".contact-info-container > *, .about-us > *");
    this.sr.reveal(document.querySelectorAll(".tech-container *"), {
      interval: 40,
      delay: 500
    });
    this.sr.reveal(".skill", {
      interval: 200
    });
    this.sr.reveal(".project-name,  .show-more", {
      delay: 500,
      distance: "300px"
    });
    //this.revealCalled = true
    console.log("updated home");
    console.log(this.sr.store);
    //this.forceUpdate()
  }
  componentWillUnmount() {
    this.sr.destroy();
    console.log("cleaned home");
    console.log(this.sr.store);
  }
  render() {
    return (
      <HomeContainer className="home-container">
        <Landing />
        <Services />
        <Projects
          fromHomePage={true}
          match={this.props.match}
          projects={projects}
        />
        <Footer />
      </HomeContainer>
    );
  }
}

export default Home;
