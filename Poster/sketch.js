var col = {
    r: 255,
    g: 0,
    b: 0
}
var fade;
var fadeAmount;
var comença = 0;
var x;
var y;
var Lx;
var con;
var myFont;
var pos = [];



function preload() {
    myFont = loadFont("Square.ttf");
}

function setup() {
    pos = [[50, 100], [50, 200], [50, 300], [50, 400], [150, 100], [150, 200], [150, 300], [150, 400], [250, 100], [250, 200], [250, 300], [250, 400]];
    createCanvas(400, 600);
    background(255, 230, 204);
    textFont(myFont);
    con = 12;
    fade = 0;
}

function draw() {
    if (comença == 1) {
        animacio(col);
    }   
}

function keyPressed() {
    if (keyCode === ENTER) {
        if (pos.length == 12) {
            comença = 1;
            crear();
        }
        else if (pos.length <= 0) {
            comença = 0;
            setup();
        }
    }

}

function deviceShaken() {
    if (pos.length == 12) {
        comença = 1;
        crear();
    }
    else if (pos.length <= 0) {
        comença = 0;
        setup();
    }
}

function crear() {
    valor = int(random(0, pos.length));
    col.r = random(0, 255);
    col.g = random(0, 255);
    col.b = random(0, 255);
    x = pos[valor][0];
    y = pos[valor][1];
    Lx = pos[valor][0];
    stroke(0);
    rect(x, y, 45, 45);
    pos.splice(valor, 1);
}

function animacio(col) {
    if (x <= Lx + 50) {
        x = x + 1;
        y = y - 1;
        stroke(0);
        fill(col.r, col.g, col.b);
        rect(x, y, 45, 45);
    }
    else {
        stroke(col.r, col.g, col.b);
        fill(col.r, col.g, col.b);
        rect(x, y, 45, 45);
        con = con - 1;
        if (con > 0) {
            crear();
        } else {
            escriptura();
        }
    }
}

function escriptura() {
    stroke(0);
    fill(0, 0, 0);
    textSize(40);
    text("BAUHAUS", 50, 500);
    textSize(20);
    text("AUSTELLUM", 220, 486);
    text("JULY, AUGUST, SEPTEMBER", 50, 530);
    textSize(40);
    text("1923", 300, 530);
}