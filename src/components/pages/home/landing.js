import React, { Component } from "react";
import styled from 'styled-components';
import ParallaxImg from '../../parallaxImg.js';
import simple from '../../../assets/1 simple.jpg';
import secure from '../../../assets/2 secure.jpg';
import sustainable from '../../../assets/3 sustainable.jpg';
import stylevars from '../../../stylevars'

let LandingContainer = styled.div`
    display              : grid;
	grid-template-columns: repeat(8, 1fr);
	grid-template-rows   : repeat(12, 8.33%);
	height               : 170vh;
	width                : 100%;
	position             : relative;
    transform-style: preserve-3d;
`;

let LandingText = styled.div`
    margin-left   : 4vw;
    font-family   : rzregular;//ralewayregular;
    line-height: 1.1em;
    font-size     : 7vw;
    grid-column   : span 5;
    grid-row      : 3;
    width         : 100%;
    display       : flex;
    flex-direction: column;
    z-index       : 10;
    position: relative;
`;

let FixedAnimatingObjects = styled.div`
    position   : absolute; //new
    grid-column: span 8;
    grid-row   : span 12;
    display    : flex;
    height     : 100%;
    width      : 100%;
    transform-style: preserve-3d;
`;

const containerWidth = "28vw";
let ParallaxImageContainer = styled.div`
    position: absolute;
    width   : ${containerWidth};
    height  : 32vw;
    /* opacity: 0; */
    overflow: hidden;
    left: ${props => props.left};
    top: ${props => props.top};
    transition: .6s;
    //transform-style: preserve-3d;     //adding preserve-3d here breaks the effect. why?
    /* &.onView{
      //height:32vw;
      opacity: 1;
    } */
`;

class ParallaxImgContainer extends Component{
    // constructor(){
    //     super();
    //     this.parallax_img_container = React.createRef();
    // }
    // componentDidMount(){
    //     setTimeout( () => {
    //         this.parallax_img_container.current.classList.add('onView')
    //     }, 2000 )
    // }
    render(){
        return(
            <ParallaxImageContainer ref={this.parallax_img_container} left={this.props.left} top={this.props.top}>
                <ParallaxImg doAnimation="1" perspective={stylevars.home.perspective} src= { this.props.src } translateZ="-5px"></ParallaxImg>
            </ParallaxImageContainer>
        )
    }
}
class Landing extends Component{
    componentDidUpdate(){
        if(this.props.sr){
            //this.props.sr.sync();
            //console.log("landing updated")
            // this.props.sr.reveal('.landing-text', {delay: 400});
        }
    }
    componentWillUnmount(){
        //console.log("landing cleaned")
        //this.props.sr.destroy();
        // console.log(this.props.sr.store)
    }
    render(){
        //console.log(stylevars.home.perspective)
        return (
            <LandingContainer>
                <LandingText className="landing-text">
                    <span>Where simplicity, </span>
                    <span>sustainability, and </span>
                    <span>security come </span>
                    <span>together through </span>
                    <span>technology and </span>
                    <span>innovation. </span>
                </LandingText>
                <FixedAnimatingObjects className="parallaxImgs">
                    <ParallaxImgContainer left={100 - parseInt(containerWidth) + "vw"} top="20%" src= {simple}></ParallaxImgContainer>
                    <ParallaxImgContainer left={65 - parseInt(containerWidth) + "vw"} top="65%" src= {secure}></ParallaxImgContainer>
                    <ParallaxImgContainer left={0 + "vw"} top="50%" src= {sustainable} ></ParallaxImgContainer>
                </FixedAnimatingObjects>
            </LandingContainer>
        )
    }
}

export default Landing;
