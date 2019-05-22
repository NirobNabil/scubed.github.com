import React, {Component} from "react";
import styled from "styled-components"

const Background = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background: white;
    z-index: -1;
    top: 0;
    left: 0;
    transition: .3s;
    transition-timing-function: ease-out;
    top: -100%;
`

const HeaderContainer = styled.div`
    top            : 0;
	position       : fixed;
	width          : 100%;
	z-index        : 10;
	display        : flex;
	flex-direction : row;
	justify-content: space-between;
    &:hover ${Background}{
        top: 0%;
    }
`

const Name = styled.div`
    margin-left     : 4vw;
    padding    : 1.3em;
    font-family: codebold;
    font-size  : 1.6em;
`

const Nav = styled.div`
    width: 25%;
    display   : flex;
    align-self: center;
`

const Link = styled.div`
    position: relative;
    z-index    : 2;
    padding    : 1.3em 1.5em;
    font-family: ralewayregular;
    a{
        position: relative;
    }
    a:after{
        content: '';
        background: black;
        width: 0%;
        height: 1px;
        position: absolute;
        top: 100%;
        left: 0;
        transition: .3s;
    }
    a:hover:after{
        width: 100%;
    }
`


class header extends Component{
    constructor(){
        super()
        this.state = { selectedTabIndex: 0 }
    }
    render(){

        return (
            <HeaderContainer>
                <Background></Background>
                <Name>
                    <h3>scubed</h3>
                </Name>
                <Nav>
                    <Link><a href="#">Projects </a></Link>
                    <Link><a href="#"> Tech </a></Link>
                    <Link><a href="#"> Contact </a></Link>
                </Nav>
            </HeaderContainer>
        )
    }
}

export default header