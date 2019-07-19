import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Background = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: white;
  z-index: -1;
  top: 0;
  left: 0;
  transition: 0.3s;
  transition-timing-function: ease-out;
  top: -100%;
`;

const HeaderContainer = styled.div`
  top: 0;
  position: fixed;
  width: 100%;
  z-index: 200 !important;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  &:hover ${Background} {
    top: 0%;
  }
  span,
  h3 {
    color: black;
    //mix-blend-mode: difference;
  }
`;

const Name = styled.div`
  margin-left: 4vw;
  padding: 1em;
  font-family: codebold;
  font-size: 1.6em;
  display: flex;
  flex-direction: row;
  img{
    height: 4vw;
  }
`;

const Nav = styled.div`
  width: 25%;
  display: flex;
  align-self: center;
`;

const NavLink = styled.div`
  position: relative;
  z-index: 2;
  padding: 1.3em 1.5em;
  font-family: ralewayregular;
  a {
    position: relative;
  }
  a:after {
    content: "";
    background: black;
    width: 0%;
    height: 1px;
    position: absolute;
    top: 100%;
    left: 0;
    transition: 0.3s;
  }
  a:hover:after {
    width: 100%;
  }
`;

class header extends Component {
  constructor() {
    super();
    this.state = { selectedTabIndex: 0 };
  }
  render() {
    return (
      <HeaderContainer>
        <Background />
        <Name>
          <Link to="/">
            <img src={logo} />
          </Link>
        </Name>
        <Nav>
          <NavLink>
            <Link to="/Projects">
              <span>Projects</span>
            </Link>
          </NavLink>
          <NavLink>
            <Link to="/Tech">
              <span>Our vision</span>
            </Link>
          </NavLink>
          <NavLink>
            <Link to="/Contact">
              <span>Contact</span>{" "}
            </Link>
          </NavLink>
        </Nav>
      </HeaderContainer>
    );
  }
}

export default header;
