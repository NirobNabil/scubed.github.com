import styled from "styled-components";
import Cursor from "./customCursor.js";
import React, { Component } from "react";
import landing3 from "../assets/landing3.jpg";

const SpecialTextContainer = styled.div`
  margin-top: 8em;
  position: relative;
  display: flex;
  flex-direction: row;
`;

const SpecialImg = styled.div`
  position: relative;
  left: ${props => (props.left || 45) + "vw"};
  transition: 0.5s;
  transition-delay: 0.3s;
  transition-timing-function: cubic-bezier(0.55, 0.94, 0.59, 0.49);
  img {
    top: 50%;
    z-index: 5;
    transform: translateX(-50%) translateY(-50%);
    max-width: 30rem;
    position: absolute;
  }
  &.onView{
    transition-delay: 0.3s;
    transition-timing-function: cubic-bezier(0.55, 0.94, 0.59, 0.49);
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
  transition: 0.5s;
  transition-timing-function: cubic-bezier(0.55, 0.94, 0.59, 0.49);
  p{
    transition: 0.5s;
    transition-timing-function: cubic-bezier(0.55, 0.94, 0.59, 0.49);
    opacity: ${props => props.opacity || 0.3};
  }
  &.onView{
    left: 30vw;
    p{
      opacity: 1;
    }
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
      this.specialText.current.classList.toggle('onView');
      this.specialImg.current.classList.toggle('onView');
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
        <SpecialText ref={this.specialText}>
          <p>{this.props.specialText}</p>
        </SpecialText>
      </SpecialTextContainer>
    );
  }
}

export default SpecialTextClass;
