var mouseDown = function(element,i){
    element.addEventListener('mousedown',(event) =>{
        isDown[i] = true;
        offset[i].x = element.offsetLeft - event.clientX;
        offset[i].y = element.offsetTop - event.clientY;
        console.log( offset[i].x,offset[i].y)
    });
}

var mouseUp = function(element,i){
    element.addEventListener('mouseup',(event) =>{
        isDown[i] = false;
    });
}

var mouseMove = function(element,i){
    document.body.addEventListener('mousemove',(event) => {
        if(!isDown[i]) return;
        element.style.left = `${event.clientX + offset[i].x}px`;
        element.style.top =  `${event.clientY + offset[i].y}px`;

    });
}

var mouseEvent = function(element,i){
    mouseDown(element,i);
    mouseUp(element,i);
    mouseMove(element,i);
}

const $box1 = document.querySelector('.box');
const $box2 = document.querySelector('.box.box1');

let i;
let offset =[1];
let isDown =[false];

//박스 갯수
const elementnum = 2;

for(i=1; i<elementnum+1; i++){
    offset[i] ={ x: 0, y: 0 };
    isDown[i] = false;
    console.log(offset[i],isDown[i]);
}

mouseEvent($box1,1);
mouseEvent($box2,2);
