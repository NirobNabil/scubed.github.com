import styled from "styled-components";
import React, { Component } from "react";
import stylevars from "../stylevars";
import { getElem, getStyles } from "../globalFuncs";
import ScrollReveal from "scrollreveal"

let Container = styled.div`
    position       : relative;
    height         : 100%;
    width          : 100%;
    transition     : 3s;
    transform-style: preserve-3d;
    /* &:after{
      top: 0;
      left: 0;
      content: '';
      height: 100%;
      width: 100%;
      background: white;
      position: absolute;
      z-index: 10;
      opacity: 1;
      transition: 1s;
    } */
    img{
        position        : relative;
        height          : ${props => props.height || "auto"};
        width           : ${props => props.width || "100%"};
        filter          : grayscale(${props => props.grayscale || "100%"});
        transform-origin: 50% 50%;
        transform       : translateZ(${props => props.translateZ})
                          scale(${props =>
                            (parseInt(props.perspective) -
                              parseInt(props.translateZ)) /
                            parseInt(props.perspective)});
    }
    /* &.onView{
      &:after{
        opacity: 0;
      }
    } */
`;

const viewport_width = Math.max(
  document.documentElement.clientWidth,
  window.innerWidth || 0
);

class ParallaxImg extends Component {
  constructor() {
    super();
    this.parallax_img_container = React.createRef();
    this.parallax_img = React.createRef();
  }
  componentDidMount() {
    const viewport_width = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    const perspective = parseInt(this.props.perspective); //perspective of the main mother element                                           //translateZ value of mm image
    let imgContainer = this.parallax_img_container.current;
    let mm_translateZ = parseInt(this.props.translateZ);
    let X =
      parseInt(imgContainer.getBoundingClientRect().x) +
      parseInt(getStyles(imgContainer).width) / 2; //x coordinate of the element's middle point
    //console.log(parseInt(getStyles(imgContainer).width) / 2);
    let mm_left = X - viewport_width / 2; //distance of mm from the middle of the viewport
    console.log(getStyles(imgContainer).width);
    imgContainer.querySelector("img").style.left =
      (mm_left * Math.abs(mm_translateZ)) / perspective + "px";
    //console.log((mm_left * Math.abs(mm_translateZ)) / perspective);

    //scrollreveal
    const defaults = {
      //delay: 1400,
      duration: 1500,
      distance: '90px',
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      container: document.querySelector(".home-container"),
      origin: "top",
      reset: false
    };
    const sreveal = ScrollReveal(defaults);
    sreveal.debug = true;
    this.sr = sreveal;
    console.log("doanimation");
    console.log(this.props.doAnimation)
    // if(this.props.doAnimation){
    //   console.log("came in")
    //   this.sr.reveal(this.parallax_img.current, {
    //     delay: 1000,
    //     duration: 1500,
    //     distance: '90px',
    //     easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    //     origin: 'top'
    //   })
    //   setTimeout( () => {
    //     this.parallax_img_container.current.classList.add('onView')
    //   }, 1000 )
    // }else { this.parallax_img_container.current.classList.add('onView') }

  }
  render() {
    return (
      <Container
        ref={this.parallax_img_container}
        height={this.props.height}
        width={this.props.width}
        translateZ={this.props.translateZ}
        grayscale={this.props.grayscale}
        height={this.props.height}
        perspective={this.props.perspective}
      >
        <img ref={this.parallax_img} src={this.props.src} />
      </Container>
    );
  }
}

export default ParallaxImg;
