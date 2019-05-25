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
    componentDidMount(){
        console.log("mounted")
        this.forceUpdate()
    }
    render(){
        return (
            <HomeContainer className="home-container">
                <Landing sr={this.props.sr}></Landing>
                <Services sr={this.props.sr}></Services>
                <Projects sr={this.props.sr} projects={projects}></Projects>
                <Footer sr={this.props.sr}></Footer>
            </HomeContainer>
        )
    }
}

export default Home