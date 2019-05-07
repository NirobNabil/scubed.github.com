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
        let animContainer = document.querySelector('.special-text-container > .anim-container');
        console.log(parseInt(getComputedStyle(animContainer).height));
        let two = new Two({
            width: parseInt(getComputedStyle(animContainer).width),
            height: parseInt(getComputedStyle(animContainer).height),
            type: "SVGRenderer"
        });
        two.appendTo(animContainer);
    
        let cursor = two.makeCircle(0, 0, 30);
        cursor.fill = "#000000";
    
        var cursorTimeout = 0;
        document.querySelector('.special-text-container').addEventListener('mousemove', function(e){
            let cursorX = e.clientX - document.querySelector('.special-text-container').getBoundingClientRect().x;
            let cursorY = e.clientY - document.querySelector('.special-text-container').getBoundingClientRect().y
            cursor.translation.x = cursorX;
            cursor.translation.y = cursorY;
            cursorTimeout++;
            if(cursorTimeout>0){
                two.update()
                cursorTimeout = 0;
            }
        })

        var specialText = document.querySelector('.special-text-container > .special-text');
        animContainer.addEventListener('click', function(e){
            console.log(e.clientX);
            if(e.clientX >= specialText.getBoundingClientRect().x){
                specialText.classList.add('special-text-onview')
            }
        })

    }, 100)
}



