import React, {Component} from "react";
import styled, { keyframes } from "styled-components"
import Landing from "./home/landing"
import Services from "./home/services"
import Projects from "./home/projects"
import Footer from "../footer"
import stylevars from "../../stylevars"

let HomeContainer = styled.div`
    height     : 100vh;
	perspective: ${stylevars.home.perspective};
	overflow   : scroll;
	overflow-x : hidden;
    background: white;
`

class Home extends Component{
    render(){
        return (
            <HomeContainer>
                <Landing></Landing>
                <Services></Services>
                <Projects></Projects>
                <Footer></Footer>
            </HomeContainer>
        )
    }
}

export default Home