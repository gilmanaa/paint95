var canvas = document.querySelector('.canvas');
var redColor = document.querySelector('.red');
var greenColor = document.querySelector('.green');
var blueColor = document.querySelector('.blue');
var yellowColor = document.querySelector('.yellow');
var purpleColor = document.querySelector('.purple');
var blackColor = document.querySelector('.black');
var eraserFeature = document.querySelector('.eraser');
var clearFeature = document.querySelector('.clear');
var brushSizeElement = document.getElementById('brushSize');
var canvasHeight = document.getElementById('canvasHeight');
var canvasWidth = document.getElementById('canvasWidth');
var circleBrush = document.getElementById('brushCircle');
var squareBrush = document.getElementById('brushSquare');
var colorPallet = document.getElementById('colorPallet');
var save = document.getElementById('save');
var load = document.getElementById('load');
var paintId = 0;
var clickCheck;
var paintColor = 'black';
var brushSize = 'medium';
var brushShape = 'circle';

function painting(e) {
    if (clickCheck === 1) {
        paintId++;
        var posX = e.clientX;
        var posY = e.clientY;
        var paint = document.createElement('div')
        paint.className = `${brushSize} ${brushShape}`;
        paint.id = paintId;
        paint.style = `left: ${posX}px; top: ${posY}px; background-color: ${paintColor};`;
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
function changeColor() {
    paintColor = this.id;
}
function eraser() {paintColor = 'blanchedalmond'}
function clearScreen() {
    canvas.innerHTML = "";
}
function brushSizeSelection() {
    var selection = brushSizeElement.options[brushSizeElement.selectedIndex].value;
    brushSize = selection;
}
function changeCanvasSize() {
    var canvasHeightValue = document.getElementById('canvasHeight').value;
    var canvasWidthValue = document.getElementById('canvasWidth').value;
    canvas.style = `height: ${canvasHeightValue}px; width: ${canvasWidthValue}px;`
}
function changeBrushCircle() {
    brushShape = 'circle';
}
function changeBrushSquare() {
    brushShape = 'square';
}
function colorPicking() {
    paintColor = colorPallet.value;
}
function saving() {
    localStorage.clear();
    localStorage.save;
    localStorage.setItem("save",canvas.innerHTML);
}
function loading() {
    canvas.innerHTML = localStorage.getItem('save');
}

redColor.addEventListener('click',changeColor);
greenColor.addEventListener('click',changeColor);
blueColor.addEventListener('click',changeColor);
yellowColor.addEventListener('click',changeColor);
purpleColor.addEventListener('click',changeColor);
blackColor.addEventListener('click',changeColor);
eraserFeature.addEventListener('click',eraser);
clearFeature.addEventListener('click',clearScreen);
brushSizeElement.addEventListener('click',brushSizeSelection);
canvasHeight.addEventListener('change',changeCanvasSize);
canvasWidth.addEventListener('change',changeCanvasSize);
circleBrush.addEventListener('click',changeBrushCircle);
squareBrush.addEventListener('click',changeBrushSquare);
colorPallet.addEventListener('change',colorPicking);
save.addEventListener('click',saving);
load.addEventListener('click',loading);