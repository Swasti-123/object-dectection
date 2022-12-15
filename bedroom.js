img1='';
od="";
Status="";
objects="";
function preload(){
    img1=loadImage("bedroom.jpg")
}

function setup(){
canvas= createCanvas(680, 420);
canvas.center();
od=ml5.objectDetector("cocossd" , modelLoaded);
document.getElementById("status").innerHTML= "Status: Detecting Objects"
}

function modelLoaded(){
    console.log("model is loaded");
    od.detect(img1, gotResult);
    Status=true;
}

function gotResult(error, results){
    if (error){
        console.error(error);
    }
    console.log(results);
    objects=results;
    }