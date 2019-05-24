import React, {Component} from "react";
import styled, { keyframes } from "styled-components"
import Landing from "./home/landing"
import Services from "./home/services"
import Projects from "./home/projects"
import Footer from "../footer"
import stylevars from "../../stylevars"
import ScrollReveal from 'scrollreveal'
import { getElem, getStyles } from '../../globalFuncs'

let HomeContainer = styled.div`
    height     : 100vh;
	perspective: ${stylevars.home.perspective};
	overflow   : scroll;
	overflow-x : hidden;
    background: white;
`

class Home extends Component{
    constructor(){
        super()
        
    }
    componentDidMount(){
        const defaults = {
            delay: 100,
            duration: 600,
            distance: '120px',
            container: document.querySelector('.home-container'),
            origin: 'bottom',
            reset: false
        }
        var sr = ScrollReveal(defaults);
        sr.debug = true; 
        sr.reveal('.landing-text', {delay: 400});
        sr.reveal(getElem('.tech-container *', true), {
            //distance: '450px',
            interval: 40,
            delay: 100
        });
        sr.reveal('.skill',{
            interval: 40,
        })
        sr.reveal('.project-name,  .show-more',{
            distance: '300px',
        });
        sr.reveal('.social-links', {
            distance: getStyles('.social-links').width,
            origin: 'right'
        })
        sr.reveal('.contact-info-container > *, .about-us > *')
    }
    render(){
        return (
            <HomeContainer className="home-container">
                <Landing></Landing>
                <Services></Services>
                <Projects></Projects>
                <Footer></Footer>
            </HomeContainer>
        )
    }
}

export default Home