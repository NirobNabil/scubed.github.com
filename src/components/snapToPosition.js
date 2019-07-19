import React from 'react'
import easyScroll from 'easy-scroll'
import bezierEasing from "bezier-easing"

function findMyMom(elem, granny=document.querySelector(".App")){
    while(elem.parentElement != granny){
        elem = elem.parentElement;
    }
    return elem;
}

export default (elem, duration=1000) => {
    let mom = findMyMom(elem);
    let elemPos = elem.offsetTop;
    
    easyScroll({
        'scrollableDomEle': mom,
        'direction': 'bottom',
        'duration': duration,
        'easingPreset': 'easeOutCubic',
        'scrollAmount': elemPos - mom.scrollTop,
    });
}