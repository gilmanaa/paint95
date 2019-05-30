var canvas = document.querySelector('.canvas');
var redColor = document.querySelector('.red');
var greenColor = document.querySelector('.green');
var blueColor = document.querySelector('.blue');
var yellowColor = document.querySelector('.yellow');
var purpleColor = document.querySelector('.purple');
var pinkColor = document.querySelector('.pink');
var eraserFeature = document.querySelector('.eraser');
var clearFeature = document.querySelector('.clear');
var paintId = 0;
var clickCheck;

function painting(e) {
    if (clickCheck === 1) {
        paintId++;
        var posX = e.clientX;
        var posY = e.clientY;
        var paint = document.createElement('div')
        paint.className = "painting";
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