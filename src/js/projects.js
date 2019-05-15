//initializes smooth scrolling on home-container
// const scroll = new Scrooth({
//     element: document.querySelector('.home-container'),
//     strength: 18,
//     acceleration: 2.5,
//     deceleration: .935,
// });
document.addEventListener('load', main())

function main(){
    setTimeout(function(){

        //TODO: when entering an element by just scrolling and not moving the mouse, the position of the cursor
        //      is not set correctly
        function addCustomCursor(el, cursorClassName, cursorClassNameOnView, baseElem = null){
            //assuming cursor is defined inside the markup of the main element
            //assuming there is a transform property defined for the cursor element
            setTimeout(function(){
                if(baseElem == null){baseElem = el}
                console.log(baseElem);
                let cursor = el.querySelector('.' + cursorClassName);
                let elPosY;
                (baseElem != el) ? elPosY = baseElem.offsetTop + el.offsetTop : elPosY = baseElem.offsetTop;
                
                let previousDIff = elPosY - window.scrollY;
                function setCursorPositionAfterScroll(){
                    transforms = cursor.style.transform.split(',');
                    currentY = parseInt(transforms[1])
                    console.log(elPosY)
                    deltaDiff = previousDIff - (elPosY - window.scrollY);
                    previousDIff = elPosY - window.scrollY;
                    transforms[1] = (currentY + deltaDiff) + 'px)';
                    cursor.style.transform = transforms[0] + ',' + transforms[1];
                }

                el.addEventListener('mouseenter', function(){
                    setCursorPositionAfterScroll();
                    cursor.classList.add(cursorClassNameOnView);
                })
                el.addEventListener('mouseleave', function(){
                    cursor.classList.remove(cursorClassNameOnView);
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

        let specialText = document.querySelector('.special-text');
        let specialImg = document.querySelector('.special-img');
        addCustomCursor(specialText, 'cursor', 'cursor-onview', document.querySelector('.special-text-container'))
        const baseSpecialTextLeft = parseInt(window.getComputedStyle(specialText).left);
        specialText.addEventListener('click', function(e){
            if(e.clientX >= specialText.getBoundingClientRect().x){
                let cursor = specialText.querySelector('.cursor');
                specialText.classList.toggle('special-text-onview');
                specialImg.classList.toggle('special-img-onview');
                // let transforms = cursor.style.transform.split(',');
                // let currentX = parseInt(transforms[0])
                // cursor.style.transform = "translate(" + currentX + (baseSpecialTextLeft - parseInt(window.getComputedStyle(specialText).left) ) + "px," + transforms[1] + 'px)';
                // console.log("translate(" + currentX + (baseSpecialTextLeft - parseInt(window.getComputedStyle(specialText).left) ) + "px," + transforms[1] + 'px)');
                // console.log( parseInt(window.getComputedStyle(document.querySelector('.special-text-onview')).left) );
            }
        })

        addCustomCursor(document.querySelector('.origin-container'), 'cursor', 'cursor-onview')

    }, 100)
}



