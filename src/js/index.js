particlesJS.load('particles-js', 'settings/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});

var Scrollbar = window.Scrollbar;
Scrollbar.init(document.querySelector('.home-container'));


document.querySelectorAll('.our-services .skill').forEach(function(currentNode){
  console.log(currentNode);
  currentNode.addEventListener('click', function(){
    currentNode.style.height += window.getComputedStyle(currentNode.querySelector('.skill-list')).height
  })
})


//********* failed attempts ************//
//(left*distance)/perspective
// const perspective = parseInt(window.getComputedStyle(document.querySelector('.home-container')).perspective);    //perspective of the main mother element
// const mm_translateZ = new WebKitCSSMatrix(window.getComputedStyle(document.querySelector('.mm .parallax-img')).webkitTransform).m43;  //translateZ value of mm image
// document.querySelectorAll('.mm').forEach(function(currentNode, index){
//   let mm_left = parseInt(window.getComputedStyle(currentNode).getPropertyValue('left'));  //X coordinate fo the current mm
//   console.log( ( mm_left * Math.abs(mm_translateZ) ) / perspective );
//   currentNode.querySelector('.parallax-img').style.left = ( mm_left * Math.abs(mm_translateZ) ) / perspective - (parseInt(window.getComputedStyle(currentNode).width)/2) + 'px';
// })