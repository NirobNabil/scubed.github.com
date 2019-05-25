import React, {Component} from "react";
import styled, { keyframes } from "styled-components"
import Landing from "./home/landing"
import Services from "./home/services"
import Projects from "./home/projects"
import Footer from "../footer"
import stylevars from "../../stylevars"
import { getElem, getStyles } from '../../globalFuncs'
import landing1 from '../../assets/landing2.png';
import landing2 from '../../assets/landing1.jpg';
import landing3 from '../../assets/dummy.jpg';
import ScrollReveal from 'scrollreveal'

let HomeContainer = styled.div`
    height     : 100vh;
	perspective: ${stylevars.home.perspective};
	overflow   : scroll;
	overflow-x : hidden;
    background: white;
`

const projects = {
    'Electronics Based Startup1': {
        name: ["Electronics Based", <br></br> ,"Startup1"], //this name represents a jsx object
        img: landing1
    },
    'Electronics Based Startup2': {
        name: ["Electronics Based", <br></br> ,"Startup2"],
        img: landing2
    },
    'Electronics Based Startup3': {
        name: ["Electronics Based", <br></br> ,"Startup1"], //this name represents a jsx object
        img: landing1
    },
    'Electronics Based Startup4': {
        name: ["Electronics Based", <br></br> ,"Startup2"],
        img: landing2
    },
}

class Home extends Component{
    constructor(){
        super();
        this.sr = null
    }
    componentDidMount(){
        console.log("mounted");
        //instantiating new scrollreveal instance on every mount
        const defaults = {
            delay: 100,
            duration: 600,
            distance: '120px',
            container: document.querySelector('.home-container'),
            origin: 'bottom',
            reset: false,
        }
        const sreveal = ScrollReveal(defaults);
        sreveal.debug = true; 
        this.sr = sreveal
        window.sr = sreveal

        //calling reveals for elements
        this.sr.reveal('.app', {delay: 400});
        this.sr.reveal('.landing-text', {delay: 400});
        this.sr.reveal('.contact-info-container > *, .about-us > *')
        this.sr.reveal(document.querySelectorAll('.tech-container *'), {
            //distance: '450px',
            interval: 40,
            delay: 100
        });
        this.sr.reveal('.skill',{
            interval: 40,
        })
        this.sr.reveal('.project-name,  .show-more',{
            distance: '300px',
        });
        //this.revealCalled = true
        console.log("updated home")
        console.log(this.sr.store);
        //this.forceUpdate()
    }
    componentWillUnmount(){
        this.sr.destroy();
        console.log("cleaned home")
        console.log(this.sr.store);
    }
    render(){
        return (
            <HomeContainer className="home-container">
                <Landing></Landing>
                <Services></Services>
                <Projects projects={projects}></Projects>
                <Footer></Footer>
            </HomeContainer>
        )
    }
}

export default Home