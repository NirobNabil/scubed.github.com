import React, { Component } from "react";
import styled from 'styled-components';
import ParallaxImg from '../../parallaxImg.js';
import landing1 from '../../../assets/landing2.png';
import landing2 from '../../../assets/landing1.jpg';
import landing3 from '../../../assets/dummy.jpg';
import stylevars from '../../../stylevars'

let LandingContainer = styled.div`
    display              : grid;
	grid-template-columns: repeat(8, 1fr);
	grid-template-rows   : repeat(12, 8.33%);
	height               : 170vh;
	width                : 100%;
	position             : relative;
`

let LandingText = styled.div`
    margin-left   : 4vw;
    font-family   : ralewayregular;
    font-size     : 7em;
    grid-column   : span 5;
    grid-row      : 3;
    width         : 100%;
    display       : flex;
    flex-direction: column;
    z-index       : 10;
`

let FixedAnimatingObjects = styled.div`
    position   : absolute;
    grid-column: span 8;
    grid-row   : span 12;
    display    : flex;
    height     : 100%;
    width      : 100%;
`

const containerWidth = "28vw";
let ParallaxImageContainer = styled.div`
    position: absolute;
    width   : ${containerWidth};
    height  : 32vw;
    overflow: hidden;
    left: ${props => props.left};
    top: ${props => props.top}
`


class ParallaxImgContainer extends Component{
    render(){
        return(
            <ParallaxImageContainer left={this.props.left} top={this.props.top}>
                <ParallaxImg perspective={stylevars.home.perspective} src= { this.props.src } translateZ="-5px"></ParallaxImg>
            </ParallaxImageContainer>
        )
    }
}
class Landing extends Component{
    render(){
        //console.log(stylevars.home.perspective)
        return (
            <LandingContainer>
                <LandingText>Lorem ipsum dolor sit amet lorem lorem Eius adipisci vitae omnis sit ut eaque voluptatem </LandingText>
                <FixedAnimatingObjects>
                    <ParallaxImgContainer left={100 - parseInt(containerWidth) + "vw"} top="20%" src= {landing1}></ParallaxImgContainer>
                    <ParallaxImgContainer left={60 - parseInt(containerWidth) + "vw"} top="65%" src= {landing2}></ParallaxImgContainer>
                    <ParallaxImgContainer left={0 + "vw"} top="50%" src= {landing3} ></ParallaxImgContainer>
                </FixedAnimatingObjects>
            </LandingContainer>
        )
    }
}

export default Landing;