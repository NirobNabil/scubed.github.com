import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Cursor from "../../customCursor.js";

const OriginContainer = styled.div`
  cursor: none;
  position: relative;
  background: #111111;
  color: #eeeeee;
  height: 100vh;
  width: 100vw;
  display: flex;
  overflow: hidden;
`;



const Origin = styled.div`
  align-self: center;
  margin-left: 20%;
  font-family: quicksandmedium;
  width: 21rem;
  p {
    font-family: rzregular;
    font-size: 1.7rem;
    margin: 0;
  }
`;
const OriginTitle = styled.div`
  font-size: 1rem;
  padding-bottom: 0.9rem;
  font-family: monospace;
  margin: 0.5em 0em;
`;

class OriginClass extends Component {
  constructor() {
    super();
    this.originContainer = React.createRef();
    this.originCursor = React.createRef();
    this.state = {
      rendered: false
    };
  }
  componentDidMount() {
    this.setState({ rendered: true });
  }
  render() {
    return (
      <OriginContainer ref={this.originContainer}>
        {this.state.rendered? (
          
          <Cursor
            from="origin"
            elem={this.originContainer.current}
            pageWrapper={this.props.pageWrapper}
            background="white"
            blendmode="difference"
            paddingOnView="2.5rem"
          />
        ) : (
          <></>
        )}
        <Origin className="origin">
          <OriginTitle>Origin</OriginTitle>
          <p>
          The name "S Cubed" comes from the name of our founder, Sakib Sadman Shajib. He was called S³ in school by his friends, which became a nickname soon after. Whenever people needed tech support, they'd call for S³. One person's passion became his profession and many joined their passions to create this team.
          </p>
        </Origin>
      </OriginContainer>
    );
  }
}

export default OriginClass;