var canvas = document.querySelector('.canvas');
var redColor = document.querySelector('.red');
var greenColor = document.querySelector('.green');
var blueColor = document.querySelector('.blue');
var yellowColor = document.querySelector('.yellow');
var purpleColor = document.querySelector('.purple');
var blackColor = document.querySelector('.black');
var eraserFeature = document.querySelector('.eraser');
var clearFeature = document.querySelector('.clear');
var paintId = 0;
var clickCheck;
var paintColor = 'black';

function painting(e) {
    if (clickCheck === 1) {
        paintId++;
        var posX = e.clientX;
        var posY = e.clientY;
        var paint = document.createElement('div')
        paint.className = `painting ${paintColor}`;
        paint.id = paintId;
        paint.style = `left: ${posX}px; top: ${posY}px`;
        canvas.appendChild(paint);
    }
}
function clickDown() {
    canvas.addEventListener('mousemove',painting); 
}
canvas.addEventListener('mousedown',function() {
    clickCheck = 1;
    clickDown();
});
canvas.addEventListener('mouseup',function() {
    clickCheck = 0;
})

// function changeColor() {
//     var colors = document.getElementsByClassName('color');
//     for (var i = 0; i < colors.length; i++) {
//         console.log(colors.className);
//     }
//    paintColor = 
// }
// changeColor();

function changeRed() {paintColor = 'red';}
function changeGreen() {paintColor = 'green';}
function changeBlue() {paintColor = 'blue';}
function changeYellow() {paintColor = 'yellow';}
function changePurple() {paintColor = 'purple';}
function changeBlack() {paintColor = 'black';}
function eraser() {paintColor = 'eraser'}
function clearScreen() {
    for (var i = 1; i <= paintId; i++) {
        var remove = document.getElementById(`${i}`);
        canvas.removeChild(remove);
    }
    paintId = 0;
}

redColor.addEventListener('click',changeRed);
greenColor.addEventListener('click',changeGreen);
blueColor.addEventListener('click',changeBlue);
yellowColor.addEventListener('click',changeYellow);
purpleColor.addEventListener('click',changePurple);
blackColor.addEventListener('click',changeBlack);
eraserFeature.addEventListener('click',eraser);
clearFeature.addEventListener('click',clearScreen);