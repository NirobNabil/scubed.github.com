//some handy functions
//shorthand for queryselector and queryselectorall
//2nd parameter is a boolean and if true returns array of elements from querselectorall
function getElem(selector, array=false){
    if(array){
        return document.querySelectorAll(selector);
    }else{
        return document.querySelector(selector);
    }
}

//returns a CSSStyleDeclaration object of the selector
function getStyles(selector){
    let elem;
    if(typeof selector == 'object'){
        elem = selector;
    }else{ 
        elem = getElem(selector);
    }
    console.log(elem);
    return window.getComputedStyle(elem);
}



//setting up scrollreveal
const defaults = {
    delay: 100,
    duration: 600,
    distance: '120px',
    container: '.home-container',
    origin: 'bottom',
    reset: false
}
var sr = ScrollReveal(defaults);

sr.debug = true;                         //debug mode
sr.reveal('.landing-text', {delay: 400});
sr.reveal(getElem('.tech-container *', true), {
    //distance: '450px',
    interval: 40,
    delay: 100
});
sr.reveal('.skill',{
    interval: 40,
})
sr.reveal('.project-name,  .show-more',{
    distance: '300px',
});
sr.reveal('.social-links', {
    distance: getStyles('.social-links').width,
    origin: 'right'
})
sr.reveal('.contact-info-container > *, .about-us > *')


//start the script on contentload
if (document.readyState === "loading") {  // Loading hasn't finished yet
    document.addEventListener('DOMContentLoaded', init, false);
} else {  // `DOMContentLoaded` has already fired
    init();
}


function init(){

    //applies appropriate positioning(correcting the positioning in Z axis) on the elements that have been pushed backward using translateZ
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const perspective = parseInt(getStyles('.home-container').perspective);                                           //perspective of the main mother element
    getElem('.parallax-img-container', true).forEach(function(currentNode, index){                                                //translateZ value of mm image
        let mm_translateZ = new WebKitCSSMatrix(getStyles(currentNode.querySelector('img')).webkitTransform).m43;
        let X = parseInt(currentNode.getBoundingClientRect().x) + (parseInt(getStyles(currentNode).width) / 2);                   //x coordinate of the element's middle point
        let mm_left = X - (viewport_width/2);                                                                                     //distance of mm from the middle of the viewport
        currentNode.querySelector('img').style.left = (( mm_left * Math.abs(mm_translateZ) ) / perspective) + 'px';
    })

    //loads the particle js animation
    particlesJS.load('particles-js', 'settings/particlesjs-config.json', function() {
        console.log('callback - particles.js config loaded');
    });

    //initializes smooth scrolling on home-container
    const scroll = new Scrooth({
        element: document.querySelector('.home-container'),
        strength: 18,
        acceleration: 2.5,
        deceleration: .935,
    });
}