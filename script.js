var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
let cw = canvas.width = innerWidth;
let ch = canvas.height = innerHeight;

















function drawMovingCircles(){
    var radius = Math.random()*10;
    var x = cw;
    var x2 = 0;
    var y = ch / 2;
    var y2 = ch / 2;
    var step = Math.random()*6;
    var setLineWidth = Math.random()*2;
    
    var hue = Math.random()*360;
    var light = Math.random()*100;
    var saturation = Math.random()*100;

    var bhue = Math.random()*360;
var blight = Math.random()*50;
var bsaturation = Math.random()*100;

function drawBackground(){
ctx.fillStyle = 'hsl('+(370*bhue)+',' + bsaturation + '%,'+(blight)+'%)';
ctx.fillRect(0,0,1920,1080);
}

drawBackground();

    for(i=0; i<500; i++){
        radius += step;
        x -= step;
        x2 += step;
        y2 +=step;
        
        //maina krasas
     hue = radius / 100 ;
    
    ctx.strokeStyle = 'hsl('+(370*hue)+',' + saturation + '%,'+(light)+'%)';



 //zime aplus
ctx.beginPath();
ctx.arc(x, y, radius, 0, 2 * Math.PI);
ctx.lineWidth = setLineWidth;
ctx.stroke();

ctx.beginPath();
ctx.arc(x2, y, radius, 0, 2 * Math.PI);
ctx.lineWidth = setLineWidth;
ctx.stroke();

ctx.beginPath();
ctx.arc(cw/2, ch/2, radius, 0, 2 * Math.PI);
ctx.lineWidth = setLineWidth;
ctx.stroke();

    }
   





   




  
}


    






    
    drawMovingCircles();
   




function saveCanvas() {
    var link = document.createElement('a');
    link.download = 'myCanvas.png';
    link.href = canvas.toDataURL();
    link.click();
}