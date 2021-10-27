canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
roverheight=90;
roverwidth=100;
marsimgsarray=["nasaimg1.jpeg", "nasaimg2.jpeg", "nasaimg3.jpg", "nasaimg4.jpeg"];
randomnumber=Math.floor(Math.random()*4);
roverx=10;
rovery=10;
backgroundimage=marsimgsarray[randomnumber];
roverimage="rover.png";
function add(){
    backgroundimgtag= new Image();
    backgroundimgtag.onload=uploadBackground;
    backgroundimgtag.src=backgroundimage;
    roverimgtag= new Image();
    roverimgtag.onload=uploadRover;
    roverimgtag.src=roverimage;
}
function uploadBackground(){
    ctx.drawImage(backgroundimgtag, 0, 0, canvas.width, canvas.height);
}
function uploadRover(){
    ctx.drawImage(roverimgtag, roverx, rovery, roverheight, roverwidth);
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e){
keypressed=e.keyCode;
console.log(keypressed);
if(keypressed=='38'){
    up();
    console.log("up");
}
if(keypressed=='40'){
    down();
    console.log("down");
}
if(keypressed=='37'){
    left();
    console.log("left");
}
if(keypressed=='39'){
    right();
    console.log("right");
}
}
function up(){
    if(rovery>=0){
        rovery=rovery-10;
        console.log("When up is clicked x="+roverx+"y="+rovery);
        uploadBackground();
uploadRover();
    }
}
function down(){
    if(rovery<=500){
        rovery=rovery+10;
        console.log("When down is clicked x="+roverx+"y="+rovery);
        uploadBackground();
uploadRover();
    }
}
function left(){
    if(roverx>=0){
        roverx=roverx-10;
        console.log("When left is clicked x="+roverx+"y="+rovery);
        uploadBackground();
uploadRover();
    }
}
function right(){
    if(roverx<=700){
        roverx=roverx+10;
        console.log("When right is clicked x="+roverx+"y="+rovery);
        uploadBackground();
uploadRover();
    }
}