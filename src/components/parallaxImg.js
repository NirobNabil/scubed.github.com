import styled from "styled-components";
import React, { Component } from "react";
import stylevars from "../stylevars"
import { getElem, getStyles } from '../globalFuncs'

let Container = styled.div`
    position       : relative;
    height         : 32vw;
    width          : 100%;
    transform-style: preserve-3d;
    img{
        position        : relative;
        height          : ${ props => props.height || "100%" }
        width           : ${ props => props.width || "auto" };
        filter          : grayscale(${ props => props.grayscale || "100%" });
        transform-origin: 50% 50%;
        transform       : translateZ(${ props => props.translateZ }) scale(${ props => (parseInt(props.perspective) - parseInt(props.translateZ))/parseInt(props.perspective) });
    }
`

// const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
// const perspective = parseInt(getStyles('.home-container').perspective);                                           //perspective of the main mother element
// getElem('.parallax-img-container', true).forEach(function(currentNode, index){                                                //translateZ value of mm image
//     let mm_translateZ = new WebKitCSSMatrix(getStyles(currentNode.querySelector('img')).webkitTransform).m43;
//     let X = parseInt(currentNode.getBoundingClientRect().x) + (parseInt(getStyles(currentNode).width) / 2);                   //x coordinate of the element's middle point
//     let mm_left = X - (viewport_width/2);                                                                                     //distance of mm from the middle of the viewport
//     currentNode.querySelector('img').style.left = (( mm_left * Math.abs(mm_translateZ) ) / perspective) + 'px';
// })

const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);


class ParallaxImg extends Component{
    constructor(){
        super();
        this.parallax_img_container = React.createRef();
    }
    componentDidMount(){
        const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        const perspective = parseInt(this.props.perspective);                                           //perspective of the main mother element
        //getElem('.parallax-img-container', true).forEach(function(currentNode, index){                                                //translateZ value of mm image
        let imgContainer = this.parallax_img_container.current
        let mm_translateZ = parseInt(this.props.translateZ);
        let X = parseInt(imgContainer.getBoundingClientRect().x) + (parseInt(getStyles(imgContainer).width) / 2);                   //x coordinate of the element's middle point
        //console.log(parseInt(getStyles(imgContainer).width) / 2);
        let mm_left = X - (viewport_width/2);                                                                                     //distance of mm from the middle of the viewport
        //console.log(this.props.perspective)
        imgContainer.querySelector('img').style.left = (( mm_left * Math.abs(mm_translateZ) ) / perspective) + 'px';
        //console.log(this.parallax_img_container.current.querySelector('img'));
    }
    render(){
        return (
            <Container ref={this.parallax_img_container} height={this.props.height} width={this.props.width} translateZ={this.props.translateZ} grayscale={this.props.grayscale} height={this.props.height} perspective={this.props.perspective}>
                <img src= { this.props.src }></img>
            </Container>
        )
    }
}

export default ParallaxImg