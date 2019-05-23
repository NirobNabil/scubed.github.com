import styled from "styled-components";
import React, { Component } from "react";

const Cursor = styled.div`
    opacity: 1 !important;
    position: absolute;
    height: 0rem;
    width: 0rem;
    border-radius: 50%;
    background: ${props => props.background || 'black'};
    transform-origin: center;
    z-index: 10;
    transform: translate(0px, 0px);
    transition: transform .1s;
    transition: padding .2s;
    padding: ${props => (props.padding || 0) + 'rem'}
    ${'' /* .cursor-onview{
        padding: 2.5rem;
    } */}
`

function addCustomCursor(el, cursor, paddingOnView, baseElem = null){
    //assuming cursor is defined inside the markup of the main element
    //assuming there is a transform property defined for the cursor element
    setTimeout(function(){
        if(baseElem == null){baseElem = el                                             }
        console.log(baseElem);
        let elPosY;
        (baseElem != el) ? elPosY = baseElem.offsetTop + el.offsetTop : elPosY = baseElem.offsetTop;
        
        let previousDIff = elPosY - window.scrollY;
        function setCursorPositionAfterScroll(){
            let transforms = cursor.style.transform.split(',');
            let currentY = parseInt(transforms[1])
            console.log(elPosY)
            let deltaDiff = previousDIff - (elPosY - window.scrollY);
            previousDIff = elPosY - window.scrollY;
            transforms[1] = (currentY + deltaDiff) + 'px)';
            cursor.style.transform = transforms[0] + ',' + transforms[1];
        }

        el.addEventListener('mouseenter', function(){
            setCursorPositionAfterScroll();
            //cursor.classList.add(cursorClassNameOnView);
            cursor.style.padding = paddingOnView;
        })
        el.addEventListener('mouseleave', function(){
            //cursor.classList.remove(cursorClassNameOnView);
            cursor.style.padding = "0rem";
        })
        el.addEventListener('mousemove', function(e){
            cursor.style.transform = "translate(" + (e.clientX - el.getBoundingClientRect().x) + 'px,' + (e.clientY - el.getBoundingClientRect().y) + 'px)';
        })

        
        document.addEventListener('scroll', function(e){
            if(window.scrollY >= (elPosY - el.clientHeight) && window.scrollY <= (elPosY + el.clientHeight)){
                setCursorPositionAfterScroll();
            }
        })
    }, 100) 
}

class CursorClass extends Component{
    constructor(){
        super()
        this.cursor = React.createRef();
    }
    componentDidMount(){
        //addCustomCursor(this.props.listenerElem.current, this.cursor.current, this.props.padding, this.props.baseElem)
    }
    render(){
        console.log(this.props.listenerElem)
        return (
            <Cursor ref={this.cursor}></Cursor>
        )
    }
}

export default CursorClass;