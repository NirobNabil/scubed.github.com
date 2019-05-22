import React, {Component} from "react";
import styled from "styled-components"
import Landing from "./home/landing"
import stylevars from "../../stylevars"


let HomeContainer = styled.div`
    height     : 100vh;
	perspective: ${stylevars.home.perspective};
	overflow   : scroll;
	overflow-x : hidden;
`

class Home extends Component{
    render(){
        return (
            <HomeContainer>
                <Landing></Landing>
            </HomeContainer>
        )
    }
}

export default Home