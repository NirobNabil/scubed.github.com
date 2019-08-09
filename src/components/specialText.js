import styled from "styled-components";
import Cursor from "./customCursor.js";
import React, { Component } from "react";
import server from "../assets/5 server.jpg";
import easyScroll from "easy-scroll"
import snapTo from "./snapToPosition"

const SpecialTextContainer = styled.div`
  margin-top: 8em;
  position: relative;
  display: flex;
  flex-direction: row;
`;

const SpecialImg = styled.div`
  position: absolute;
  left: ${props => (props.left || 45) + "vw"};
  transition: 1s;
  transition-delay: .05s;
  //transition-timing-function: cubic-bezier(0.55, 0.94, 0.59, 0.49);
  transition-timing-function: cubic-bezier(.82,.01,.5,.82);
  width: 30rem;
  height: 100%;
  //overflow-x: hidden;
  img {
    top: 50%;
    z-index: 5;
    transform: translateX(-50%) translateY(-50%);
    //max-width: 30rem;
    min-height: 40rem;
    position: absolute;
  }
  &.onView{
    //transition-delay: 0.6s;
    //transition-timing-function: cubic-bezier(0.55, 0.94, 0.59, 0.49);
    left: 5vw;
  }
`;

const SpecialText = styled.div`
  cursor: none;
  width: 65vw;
  line-height: 1em;
  position: relative;
  color: #202020;
  font-family: rzregular;
  font-size: 9rem;
  left: ${props => (props.left || 50) + "vw"};
  transition: 0.9s;
  transition-timing-function: cubic-bezier(.93,.07,.45,.81);
  opacity: ${props => props.opacity || 0.3};
  p{
    margin: 0;
  }
  &.onView{
    left: 30vw;
    opacity: 1;
  }
`;

class SpecialTextClass extends Component {
  constructor() {
    super();
    const baseStyles = {};
    this.specialTextContainer = React.createRef();
    this.specialText = React.createRef();
    this.specialTextCursor = React.createRef();
    this.specialImg = React.createRef();
    this.state = {
      specialTextRef: this.specialText,
      rendered: false,
      onView: false
    };
  }
  componentDidMount() {
    this.setState({ rendered: true });
    this.specialText.current.addEventListener('click', () => {
      let timeout = 0;
      if(!this.specialText.current.classList.contains('onView')){
        snapTo(this.specialTextContainer.current, 900)
        timeout = 500 - 300;
      }
      setTimeout( () => {
        this.specialText.current.classList.toggle('onView');
        this.specialImg.current.classList.toggle('onView');
      }, timeout)
    })
  }
  render() {
    return (
      <SpecialTextContainer ref={this.specialTextContainer}>
        {this.state.rendered && this.state.specialTextRef ? (
          <Cursor
            elemRef={this.state.specialTextRef}
            from="specialtext"
            pageWrapper={this.props.pageWrapper}
            elem={this.specialTextContainer.current}
            //baseElem={this.specialTextContainer.current}
            actualElem={this.specialText.current}
            paddingOnView="2rem"
          />
        ) : (
          <></>
        )}
        <SpecialImg left={this.state.x} ref={this.specialImg}>
          <img src={this.props.specialImg} />
        </SpecialImg>
        <SpecialText className="specialtext" ref={this.specialText}>
          <p>{this.props.specialText}</p>
        </SpecialText>
      </SpecialTextContainer>
    );
  }
}

export default SpecialTextClass;
