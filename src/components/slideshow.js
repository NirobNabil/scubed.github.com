import React from 'react'
import ParallaxImg from "./parallaxImg";
import server from "../assets/5 server.jpg";
import styled from "styled-components";

let SlideshowContainer = styled.div`
    position       : relative;
    display: flex;
    //overflow-x: hidden;
    flex-direction   : row;
    height         : 100%;
    width          : 100%;
    transform-style: preserve-3d;
    transition: 3s;
    //flex-wrap: nowrap;
    div{
        flex-shrink: 0;
    }
    &.state0{
        transform: translateX(${props => props.transformValue}px);
    }
    &.state1{
        transform: translateX(${props => props.transformValue*2}px);
    }
    &.state2{
        transform: translateX(${props => props.transformValue*3}px);
    }
`

class SlideShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            transformValue: 0,
        }
        this.totalSlides = this.props.slideshow.length -1;  //set the number of slides here
        this.currentIndex = 0;
        this.container = React.createRef();
        this.button = React.createRef();
        this.timeout = null;
        this.interval = null;
        this.slides = [];
        let slideProps = {}
        let slideImgs = [];
        Object.keys(props).forEach((key, index) => {
            if(key !== "slideshow"){
                slideProps[key] = this.props[key];
            }else if(key === "slideshow"){
                slideImgs = this.props[key]
            }
        });
        slideImgs.forEach( (elem) => {
            slideProps.src = elem;
            this.slides.push(slideProps);
        } )
    }
    componentDidMount() {
        let parallaxImg = this.container.current.querySelector('img');
        let scaleValue = window.getComputedStyle(parallaxImg).transform.replace("matrix3d(","").split(",")[0]
        this.setState({
            transformValue: parseInt(parallaxImg.clientWidth)*scaleValue*(-1)
        })
        let dir = 1;
        let turning = false;
        this.timeout = window.setTimeout( () => {
            this.interval = window.setInterval( () => {
                if(dir == 1){
                    console.log("adding state"+this.currentIndex)
                    this.container.current.classList.add("state"+this.currentIndex);
                }else if(dir == -1){
                    console.log("removing state"+this.currentIndex)
                    this.container.current.classList.remove("state"+this.currentIndex);
                }
    
                if(this.currentIndex==this.totalSlides-1){ if(turning){ turning = false }else{ turning = true } dir = -1;  }
                else if(this.currentIndex==0){ if(turning){ turning = false }else{ turning = true } dir = 1; }
    
                if(!turning){
                    this.currentIndex += dir;
                }
            }, 4000 )
        }, Math.random()*4000 )
    }
    componentWillUnmount() {
        window.clearInterval(this.interval);
        window.clearTimeout(this.timeout);
    }
    render(){
        return (
            <SlideshowContainer transformValue={this.state.transformValue} ref={this.container}>
                {this.slides.map( (slide) => {
                    return <ParallaxImg {...slide} ></ParallaxImg>
                } )}
            </SlideshowContainer>
        )
    }
}

export default SlideShow;