import styled, { keyframes } from "styled-components";
import React, { Component } from "react";

const breathing = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.3);
  }
`

const Cursor = styled.div`
  opacity: 1 !important;
  position: absolute;
  height: 0rem;
  width: 0rem;
  border-radius: 50%;
  background: ${props => props.background || "black"};
  transform-origin: center;
  mix-blend-mode: ${props => props.blendmode || "none"};
  z-index: 10;
  transform: translate(0px, 0px);
  transition: transform 0.1s;
  transition: padding 0.2s;
  padding: ${props => (props.padding || 0) + "rem"};
  overflow: hidden;
    ${"" /* .cursor-onview{
      padding: 2.5rem;
  } */};
`;

const Ham = styled.svg`
  width: 3rem;
  height: 3rem;
  position: absolute;
  left: 13%;
  top: 13%;
  z-index: 20;
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  .line {
    fill:none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    stroke:#fff;
    stroke-width:2.7;
    stroke-linecap:round;
  }
  .top {
    stroke-dasharray: 40 82;
  }
  .middle {
    stroke-dasharray: 40 111;
  }
  .bottom {
    stroke-dasharray: 40 161;
  }
  &.active{
    transform: rotate(45deg);
    .top {
      stroke-dasharray: 17 82;
      stroke-dashoffset: -62px;
    }
    .middle {
      stroke-dashoffset: 23px;
    }
    .bottom {
      stroke-dashoffset: -83px;
    }
  }
`

function addCustomCursor(
  el,
  cursor,
  paddingOnView,
  baseElem = null,
  actualElem = null,
  pageWrapper = document,
  from
) {
  //assuming cursor is defined inside the markup of the main element
  //assuming there is a transform property defined for the cursor element
  setTimeout(function() {
    if (baseElem == null) {
      baseElem = el;
    }
    console.log(baseElem);
    let elPosY;
    baseElem != el
      ? (elPosY = baseElem.offsetTop + el.offsetTop)
      : (elPosY = baseElem.offsetTop);

    let previousDIff = elPosY - pageWrapper.scrollTop;
    function setCursorPositionAfterScroll() {
      let transforms = cursor.style.transform.split(",");
      let currentY = parseInt(transforms[1]);
      let deltaDiff = previousDIff - (elPosY - pageWrapper.scrollTop);
      previousDIff = elPosY - pageWrapper.scrollTop;
      transforms[1] = currentY + deltaDiff + "px)";
      cursor.style.transform = transforms[0] + "," + transforms[1];
    }

    if(!actualElem){ actualElem = el };
    actualElem.addEventListener("mouseenter", function() {
      setCursorPositionAfterScroll();
      cursor.childNodes[0].classList.remove('active');  //removing active triggers the enteringa animation
      cursor.style.padding = paddingOnView;
    });
    actualElem.addEventListener("mouseleave", function() {
      cursor.childNodes[0].classList.add('active');
      cursor.style.padding = "0rem";
    });
    actualElem.addEventListener("mousemove", function(e) {
      cursor.style.transform =
        "translate(" +
        (e.clientX - el.getBoundingClientRect().x) +
        "px," +
        (e.clientY - el.getBoundingClientRect().y) +
        "px)";
    });
    console.log("elposy " + elPosY);
    pageWrapper.addEventListener("scroll", function(e) {
      if (
        pageWrapper.scrollTop >= elPosY - el.clientHeight &&
        pageWrapper.scrollTop <= elPosY + el.clientHeight
      ) {
        setCursorPositionAfterScroll();
      }
    });
  }, 100);
}


class CursorClass extends Component {
  constructor() {
    super();
    this.cursor = React.createRef();
    this.ham = React.createRef();
  }
  componentDidMount() {
    addCustomCursor(
      this.props.elem,
      this.cursor.current,
      this.props.paddingOnView,
      this.props.baseElem,
      this.props.actualElem,
      this.props.pageWrapper,
      this.props.from
    );
    console.log("cursor")
    console.log(this.props.elemRef)
    if(this.props.elemRef){
      this.props.elemRef.current.addEventListener('click', () => {
        this.ham.current.classList.toggle('active')
      })
    }
  }
  render() {
    console.log(this.props.elem);
    return (
      <Cursor
        className="hamburger"
        ref={this.cursor}
        background={this.props.background}
        blendmode={this.props.blendmode}
      >
        {/* using active in the calssname to show the animation when entering */}
        <Ham className="ham hamRotate ham7 active" viewBox="0 0 100 100" width="80" ref={this.ham}>
          <path
                className="line top"
                d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013" />
          <path
                className="line middle"
                d="m 70,50 h -40" />
          <path
                className="line bottom"
                d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40" />
        </Ham>
      </Cursor>
    );
  }
}

export default CursorClass;
