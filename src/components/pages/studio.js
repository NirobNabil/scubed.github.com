import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import server from "../../assets/5 server.jpg";
import SpecialText from "../specialText.js";
import Footer from "../footer";
import Landing from "./studio/landing";
import About from "./studio/about";
import Origin from "./studio/origin";
import Skills from "./studio/skills";
import Team from "./studio/team";
import ScrollReveal from "scrollreveal";
import Scrooth from "../../scrooth"

const StudioContainer = styled.div`
  height: 100vh;
  overflow: scroll;
  overflow-x: hidden;
  background: white;
  width: 100vw;
  margin: 0;
  padding: 0;
  transition: 0.4s;
`;

const PostSpecialText = styled.div`
  position: relative;
  left: 50vw;
  padding: 8em 1rem;
  width: 18rem;
  font-family: quicksandmedium;
  line-height: 1.4em;
  font-size: 1.1em;
  margin: 0;
`;

class PostSpecialTextClass extends Component {
  render() {
    return (
      <div>
        <PostSpecialText className="postSpecial">
        S Cubed has started working since April of 2015.
        And has successfully provided service to corporate offices,
        educational institutions and non profit organizations. Our
        customers have always been our top priority. Our team has experts
        who directly contact you to understand and analyze your issues better
        and try to provide the best possible solution tailored to your preferences.
        We give customized and simple solutions to complex problems through our services.
        </PostSpecialText>
      </div>
    );
  }
}


class Studio extends Component {
  constructor() {
    super();
    this.pageWrapper = React.createRef();
    this.state = {
      rendered: false
    };
  }
  componentDidMount() {
    this.setState({
      rendered: true
    });
    const defaults = {
      delay: 300,
      duration: 500,
      distance: "60px",
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      opacity: 0,
      container: document.querySelector(".studioContainer"),
      origin: "bottom",
      reset: false,
      viewFactor: .5
    };
    const sreveal = ScrollReveal(defaults);
    sreveal.debug = true;
    this.sr = sreveal;

    //calling reveals for elements
    this.sr.reveal(".landing > *", { delay: 500, interval: 300, viewFactor: 0});
    this.sr.reveal(".about img", { delay: 900, viewFactor: 0 });


    //smooth scroll
    const scroll = new Scrooth({
      element: document.querySelector('.studioContainer'),
      strength: 18,
      acceleration: 2.5,
      deceleration: .9,
    });
  }
  componentDidUpdate(){
    if(this.state.rendered && this.props.SRdestroyed){
      this.sr.reveal(".origin > *", { delay: 500, interval: 200 })
      this.sr.reveal(".about p", { delay: 500 });

      this.sr.reveal(".skills > div:nth-child(1) > *", { interval: 200 })
      this.sr.reveal(".skills > div:nth-child(2) > *", { interval: 400 })

      this.sr.reveal(".postSpecial", { delay: 700 })

      this.sr.reveal(".team > * > *", { delay: 300, interval: 200 })

      this.sr.reveal(".contact-info-container > *, .about-us > *"); //footer

      this.props.updateSRstatus(false);
    }
  }
  componentWillUnmount() {
    console.log("studio unmount");
    this.sr.destroy();
    this.props.updateSRstatus(true);
  }
  render() {
    return (
      <StudioContainer className="studioContainer" ref={this.pageWrapper}>
        <Landing />
        <About />
        <Skills />

        {this.state.rendered ? (
          <SpecialText
            pageWrapper={this.pageWrapper.current}
            specialText="With sustainability as our goal, we provide simple and secure tools to create and maintain your digital footprint."
            specialImg={server}
          />
        ) : (
          <></>
        )}

        <PostSpecialTextClass />

        {this.state.rendered ? (
          <Origin pageWrapper={this.pageWrapper.current} />
        ) : (
          <></>
        )}

        <Team />
        <Footer />
      </StudioContainer>
    );
  }
}

export default Studio;
