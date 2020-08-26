let perfectionsound;




function preload() {
    perfectionsound = loadSound("sounds/thebestquoteever.mp3");
}

function setup() {
    createCanvas(500,500);
    background(0);
    noStroke();
}

function draw() {
    rect (200, 200, 100, 100);
}

function mouseClicked() {
    if (mouseX > 200 && mouseX < 300 && mouseY > 200 && mouseY < 300){
        perfectionsound.play();
    }
}
 