import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Landing from "./home/landing";
import Services from "./home/services";
import Projects from "./home/projects";
import Footer from "../footer";
import stylevars from "../../stylevars";
import { projects } from "../../data.js";
import ScrollReveal from "scrollreveal";
import Scrooth from "../../scrooth"


let HomeContainer = styled.div`
  //border: .3em solid black;
  height: 100vh;
  perspective: ${stylevars.home.perspective};
  overflow: scroll;
  overflow-x: hidden;
  background: white;
`;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      rendered: false
    };
    this.sr = null;
  }
  componentDidMount() {
    console.log("mounted");
    this.setState({
      rendered: true
    });
    //instantiating new scrollreveal instance on every mount
    const defaults = {
      delay: 100,
      duration: 600,
      distance: "120px",
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      //opacity: 0,
      container: document.querySelector(".home-container"),
      origin: "bottom",
      reset: false,
      viewFactor: 1
    };
    const sreveal = ScrollReveal(defaults);
    sreveal.debug = true;
    this.sr = sreveal;
    //window.sr = sreveal

    //calling reveals for elements
    //this.sr.reveal(".app", { delay: 400 });
    this.sr.reveal(".landing-text > *", { distance: "80px", delay: 400, interval: 200, rotate: { z: -2 }, });



    //smooth scrolling
     const scroll = new Scrooth({
       element: document.querySelector('.home-container'),
       strength: 18,
       acceleration: 2.5,
       deceleration: .9,
     });
  }
  componentDidUpdate(){
    if(this.props.SRdestroyed){
      this.sr.reveal(".skill", {
        interval: 200
      });
      this.sr.reveal(document.querySelectorAll(".tech-container *"), {
        interval: 40,
        //delay: 300
      });

      this.sr.reveal(".project-name,  .show-more", {
        duration: 1000,
        distance: '0px',
        delay: 300,
        viewFactor: 0
      });

      this.sr.reveal(".contact-info-container > *, .about-us > *");

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
