/*
	The Game Project Part 4 - Character Interaction
*/

var gameChar_x;
var gameChar_y;
var floorPos_y;

var canyon;

var isRight;
var isLeft;
var isFalling;

function setup() {
  createCanvas(1024, 576);
  floorPos_y = (height * 3) / 4;
  gameChar_x = width / 2;
  gameChar_y = floorPos_y;

  canyon = { x_pos: 200, width: 150 };

  isRight = false;
  isLeft = false;
  isFalling = false;
}

function draw() {
  ///////////DRAWING CODE//////////

  background(100, 155, 255); //fill the sky blue

  noStroke();
  fill(0, 155, 0);
  rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

  //draw the canyon
  noStroke();
  fill(92, 40, 0);
  rect(canyon.x_pos, floorPos_y, canyon.width, height - floorPos_y);

  //the game characters

  // moving right

  if (keyIsDown(68)) {
    gameChar_x += 1;
    isRight = true;
  } else {
    isRight = false;
  }

  //moving left

  if (keyIsDown(65)) {
    gameChar_x -= 1;
    isLeft = true;
  } else {
    isLeft = false;
  }

  //jumping

  if (gameChar_y < floorPos_y) {
    isFalling = true;
    gameChar_y += 1;
  } else {
    isFalling = false;
  }

  if (isLeft && isFalling) {
    // add your jumping-left code

    //triangles (left to right)

    stroke(0);
    strokeWeight(2);
    fill("a9a9a9");
    ellipse(gameChar_x, gameChar_y - 47, 30, 30);
    rect(gameChar_x - 15, gameChar_y - 47, 30, 22.5);
    triangle(
      gameChar_x - 15,
      gameChar_y - 24.5,
      gameChar_x - 7,
      gameChar_y - 24.5,
      gameChar_x - 24,
      gameChar_y - 17.5
    ); //first corner
    triangle(
      gameChar_x - 10,
      gameChar_y - 24.5,
      gameChar_x + 2,
      gameChar_y - 24.5,
      gameChar_x - 16,
      gameChar_y - 14.5
    ); //2nd tri
    triangle(
      gameChar_x,
      gameChar_y - 24.5,
      gameChar_x + 11,
      gameChar_y - 24.5,
      gameChar_x + 17,
      gameChar_y
    ); //3rd tri
    triangle(
      gameChar_x + 5.8,
      gameChar_y - 24.5,
      gameChar_x + 14.8,
      gameChar_y - 24.5,
      gameChar_x + 27,
      gameChar_y - 1
    ); //4THcorner tri

    //filler rect to hide stroke

    noStroke();
    fill("a9a9a9");
    rect(gameChar_x - 14.15, gameChar_y - 49, 28, 27.9);

    //eyes

    fill(0);
    noStroke();
    circle(gameChar_x - 6.5, gameChar_y - 47, 6);
    circle(gameChar_x + 5.5, gameChar_y - 47, 6);

    //mouth

    rect(gameChar_x - 10, gameChar_y - 37, 19, 1);
    stroke(0);
    strokeWeight(0.8);
    fill(255, 0, 0);
    triangle(
      gameChar_x + 8.5,
      gameChar_y - 36,
      gameChar_x + 6.5,
      gameChar_y - 33,
      gameChar_x + 4.5,
      gameChar_y - 36
    );
    triangle(
      gameChar_x - 5.5,
      gameChar_y - 36,
      gameChar_x - 7.5,
      gameChar_y - 33,
      gameChar_x - 9.5,
      gameChar_y - 36
    );

    //BLOOD

    //bottom half of blood (circle)

    fill(255, 0, 0);
    stroke("#740707");
    strokeWeight(1.1);
    circle(gameChar_x + 7, gameChar_y - 25, 1.5);

    //top half of blood (triangle ish shape)
    push();
    beginShape();
    translate(gameChar_x - 43, gameChar_y - 138);
    curveVertex(194.5 / 3.8, 215.5 / 1.9151);
    curveVertex(194.5 / 3.8, 215.5 / 1.9151);
    curveVertex(190 / 3.8, 203 / 1.9151);
    curveVertex(185 / 3.8, 215.5 / 1.9151);
    curveVertex(185 / 3.8, 215.5 / 1.9151);
    endShape();
    pop();

    //white blood shade

    fill(255);
    noStroke();
    ellipse(gameChar_x + 7.5, gameChar_y - 25, 1, 1.5);

    //shade for ghost

    push();
    fill(0, 0, 0, 50);
    translate(gameChar_x - 43, gameChar_y - 137);
    beginShape();
    curveVertex(46, 78);
    curveVertex(46, 78);
    curveVertex(52, 81);
    curveVertex(55, 86);
    curveVertex(55, 86);
    endShape();
    pop();
  } else if (isRight && isFalling) {
    // add your jumping-right code

    stroke(0);
    strokeWeight(1.8);
    fill("a9a9a9");
    ellipse(gameChar_x - 1, gameChar_y - 47, 30, 30);
    rect(gameChar_x - 16, gameChar_y - 47, 30, 22.5);
    triangle(
      gameChar_x - 16,
      gameChar_y - 24.5,
      gameChar_x - 8,
      gameChar_y - 24.5,
      gameChar_x - 36,
      gameChar_y - 1
    ); //first corner
    triangle(
      gameChar_x - 11,
      gameChar_y - 24.5,
      gameChar_x - 1,
      gameChar_y - 24.5,
      gameChar_x - 25,
      gameChar_y - 2.5
    ); //2nd tri
    triangle(
      gameChar_x - 2,
      gameChar_y - 24.5,
      gameChar_x + 10,
      gameChar_y - 24.5,
      gameChar_x + 15,
      gameChar_y - 11
    ); //3rd tri
    triangle(
      gameChar_x - 4.8,
      gameChar_y - 24.5,
      gameChar_x + 13.8,
      gameChar_y - 24.5,
      gameChar_x + 25,
      gameChar_y - 13
    ); //4THcorner tri

    //filler rect to hide stroke

    noStroke();
    fill("a9a9a9");
    rect(gameChar_x - 15.1, gameChar_y - 49, 28, 27.9);

    //eyes

    fill(0);
    noStroke();
    circle(gameChar_x - 7.5, gameChar_y - 47, 6);
    circle(gameChar_x + 4.5, gameChar_y - 47, 6);

    //mouth

    rect(gameChar_x - 11, gameChar_y - 37, 19, 1);
    stroke(0);
    strokeWeight(0.8);
    fill(255, 0, 0);
    triangle(
      gameChar_x + 7.5,
      gameChar_y - 36,
      gameChar_x + 5.5,
      gameChar_y - 33,
      gameChar_x + 3.5,
      gameChar_y - 36
    );
    triangle(
      gameChar_x - 6.5,
      gameChar_y - 36,
      gameChar_x - 8.5,
      gameChar_y - 33,
      gameChar_x - 10.5,
      gameChar_y - 36
    );

    //BLOOD

    //bottom half of blood (circle)

    fill(255, 0, 0);
    stroke("#740707");
    strokeWeight(1.1);
    circle(gameChar_x + 6, gameChar_y - 25, 1.5);

    //top half of blood (triangle ish shape)

    push();
    beginShape();
    translate(gameChar_x - 44, gameChar_y - 138);
    curveVertex(194.5 / 3.8, 215.5 / 1.9151);
    curveVertex(194.5 / 3.8, 215.5 / 1.9151);
    curveVertex(190 / 3.8, 203 / 1.9151);
    curveVertex(185 / 3.8, 215.5 / 1.9151);
    curveVertex(185 / 3.8, 215.5 / 1.9151);
    endShape();
    pop();

    //white blood shade

    fill(255);
    noStroke();
    ellipse(gameChar_x + 6.35, gameChar_y - 25, 1, 1.5);

    //shade for ghost

    push();
    fill(0, 0, 0, 50);
    translate(gameChar_x - 45, gameChar_y - 137);
    beginShape();
    curveVertex(46, 78);
    curveVertex(46, 78);
    curveVertex(52, 81);
    curveVertex(55, 86);
    curveVertex(55, 86);
    endShape();
    pop();
  } else if (isLeft) {
    // add your walking left code
    stroke(0);
    strokeWeight(1.8);
    fill("a9a9a9");
    ellipse(gameChar_x - 1, gameChar_y - 47, 30, 30);
    rect(gameChar_x - 16, gameChar_y - 47, 30, 22.5);
    triangle(
      gameChar_x - 16,
      gameChar_y - 24.5,
      gameChar_x - 8,
      gameChar_y - 24.5,
      gameChar_x - 16,
      gameChar_y - 15.5
    ); //first corner
    triangle(
      gameChar_x - 11,
      gameChar_y - 24.5,
      gameChar_x + 1,
      gameChar_y - 24.5,
      gameChar_x - 7,
      gameChar_y - 12.5
    ); //2nd tri
    triangle(
      gameChar_x - 2,
      gameChar_y - 24.5,
      gameChar_x + 10,
      gameChar_y - 24.5,
      gameChar_x + 2,
      gameChar_y - 4.5
    ); //3rd tri
    triangle(
      gameChar_x + 4.8,
      gameChar_y - 24.5,
      gameChar_x + 13.8,
      gameChar_y - 24.5,
      gameChar_x + 14,
      gameChar_y - 1
    ); //4THcorner tri

    //filler rect to hide stroke

    noStroke();
    fill("a9a9a9");
    rect(gameChar_x - 15.1, gameChar_y - 49, 28, 27.9);

    //eyes

    fill(0);
    noStroke();
    circle(gameChar_x - 7.5, gameChar_y - 47, 6);
    circle(gameChar_x + 4.5, gameChar_y - 47, 6);

    //mouth

    rect(gameChar_x - 11, gameChar_y - 37, 19, 1);
    stroke(0);
    strokeWeight(0.8);
    fill(255, 0, 0);
    triangle(
      gameChar_x + 7.5,
      gameChar_y - 36,
      gameChar_x + 5.5,
      gameChar_y - 33,
      gameChar_x + 3.5,
      gameChar_y - 36
    );
    triangle(
      gameChar_x - 6.5,
      gameChar_y - 36,
      gameChar_x - 8.5,
      gameChar_y - 33,
      gameChar_x - 10.5,
      gameChar_y - 36
    );

    //BLOOD

    //bottom half of blood (circle)

    fill(255, 0, 0);
    stroke("#740707");
    strokeWeight(1.1);
    circle(gameChar_x + 6, gameChar_y - 25, 1.5);

    //top half of blood (triangle ish shape)

    push();
    beginShape();
    translate(gameChar_x - 44, gameChar_y - 138);
    curveVertex(194.5 / 3.8, 215.5 / 1.9151);
    curveVertex(194.5 / 3.8, 215.5 / 1.9151);
    curveVertex(190 / 3.8, 203 / 1.9151);
    curveVertex(185 / 3.8, 215.5 / 1.9151);
    curveVertex(185 / 3.8, 215.5 / 1.9151);
    endShape();
    pop();

    //white blood shade

    fill(255);
    noStroke();
    ellipse(gameChar_x + 6.35, gameChar_y - 25, 1, 1.5);

    //shade for ghost

    push();
    fill(0, 0, 0, 50);
    translate(gameChar_x - 45, gameChar_y - 137);
    beginShape();
    curveVertex(46, 78);
    curveVertex(46, 78);
    curveVertex(52, 81);
    curveVertex(55, 86);
    curveVertex(55, 86);
    endShape();
    pop();
  } else if (isRight) {
    // add your walking right code

    stroke(0);
    strokeWeight(2);
    fill("a9a9a9");
    ellipse(gameChar_x, gameChar_y - 47, 30, 30);
    rect(gameChar_x - 15, gameChar_y - 47, 30, 22.5);
    triangle(
      gameChar_x - 15,
      gameChar_y - 24.5,
      gameChar_x - 7,
      gameChar_y - 24.5,
      gameChar_x - 15,
      gameChar_y - 1
    ); //first corner
    triangle(
      gameChar_x - 10,
      gameChar_y - 24.5,
      gameChar_x + 2,
      gameChar_y - 24.5,
      gameChar_x - 7,
      gameChar_y - 4.5
    ); //2nd tri
    triangle(
      gameChar_x - 1,
      gameChar_y - 24.5,
      gameChar_x + 9,
      gameChar_y - 24.5,
      gameChar_x + 3,
      gameChar_y - 12.5
    ); //3rd tri
    triangle(
      gameChar_x + 5.8,
      gameChar_y - 24.5,
      gameChar_x + 14.8,
      gameChar_y - 24.5,
      gameChar_x + 14.7,
      gameChar_y - 15.5
    ); //4THcorner tri

    //filler rect to hide stroke

    noStroke();
    fill("a9a9a9");
    rect(gameChar_x - 14.15, gameChar_y - 49, 28, 27.9);

    //eyes

    fill(0);
    noStroke();
    circle(gameChar_x - 6.5, gameChar_y - 47, 6);
    circle(gameChar_x + 5.5, gameChar_y - 47, 6);

    //mouth

    rect(gameChar_x - 10, gameChar_y - 37, 19, 1);
    stroke(0);
    strokeWeight(0.8);
    fill(255, 0, 0);
    triangle(
      gameChar_x + 8.5,
      gameChar_y - 36,
      gameChar_x + 6.5,
      gameChar_y - 33,
      gameChar_x + 4.5,
      gameChar_y - 36
    );
    triangle(
      gameChar_x - 5.5,
      gameChar_y - 36,
      gameChar_x - 7.5,
      gameChar_y - 33,
      gameChar_x - 9.5,
      gameChar_y - 36
    );

    //BLOOD

    //bottom half of blood (circle)

    fill(255, 0, 0);
    stroke("#740707");
    strokeWeight(1.1);
    circle(gameChar_x + 7, gameChar_y - 25, 1.5);

    //top half of blood (triangle ish shape)
    push();
    beginShape();
    translate(gameChar_x - 43, gameChar_y - 138);
    curveVertex(194.5 / 3.8, 215.5 / 1.9151);
    curveVertex(194.5 / 3.8, 215.5 / 1.9151);
    curveVertex(190 / 3.8, 203 / 1.9151);
    curveVertex(185 / 3.8, 215.5 / 1.9151);
    curveVertex(185 / 3.8, 215.5 / 1.9151);
    endShape();
    pop();

    //white blood shade

    fill(255);
    noStroke();
    ellipse(gameChar_x + 7.5, gameChar_y - 25, 1, 1.5);

    //shade for ghost

    push();
    fill(0, 0, 0, 50);
    translate(gameChar_x - 43, gameChar_y - 137);
    beginShape();
    curveVertex(46, 78);
    curveVertex(46, 78);
    curveVertex(52, 81);
    curveVertex(55, 86);
    curveVertex(55, 86);
    endShape();
    pop();
  } else if (isFalling) {
    // add your jumping facing forwards code

    stroke(0);
    strokeWeight(2);
    fill("a9a9a9");
    ellipse(gameChar_x, gameChar_y - 47, 30, 30);
    rect(gameChar_x - 15, gameChar_y - 47, 30, 22.5);
    triangle(
      gameChar_x - 15,
      gameChar_y - 24.5,
      gameChar_x - 7,
      gameChar_y - 24.5,
      gameChar_x - 25,
      gameChar_y - 9
    ); //first corner
    triangle(
      gameChar_x - 10,
      gameChar_y - 24.5,
      gameChar_x + 2,
      gameChar_y - 24.5,
      gameChar_x - 15,
      gameChar_y - 12.5
    ); //2nd tri
    triangle(
      gameChar_x - 1,
      gameChar_y - 24.5,
      gameChar_x + 11,
      gameChar_y - 24.5,
      gameChar_x + 11,
      gameChar_y - 12.5
    ); //3rd tri
    triangle(
      gameChar_x + 5.8,
      gameChar_y - 24.5,
      gameChar_x + 14.8,
      gameChar_y - 24.5,
      gameChar_x + 23,
      gameChar_y - 9
    ); //4THcorner tri

    //filler rect to hide stroke

    noStroke();
    fill("a9a9a9");
    rect(gameChar_x - 14.15, gameChar_y - 49, 28, 27.9);

    //eyes

    fill(0);
    noStroke();
    circle(gameChar_x - 6.5, gameChar_y - 47, 6);
    circle(gameChar_x + 5.5, gameChar_y - 47, 6);

    //mouth

    rect(gameChar_x - 10, gameChar_y - 37, 19, 1);
    stroke(0);
    strokeWeight(0.8);
    fill(255, 0, 0);
    triangle(
      gameChar_x + 8.5,
      gameChar_y - 36,
      gameChar_x + 6.5,
      gameChar_y - 33,
      gameChar_x + 4.5,
      gameChar_y - 36
    );
    triangle(
      gameChar_x - 5.5,
      gameChar_y - 36,
      gameChar_x - 7.5,
      gameChar_y - 33,
      gameChar_x - 9.5,
      gameChar_y - 36
    );

    //BLOOD

    //bottom half of blood (circle)

    fill(255, 0, 0);
    stroke("#740707");
    strokeWeight(1.1);
    circle(gameChar_x + 7, gameChar_y - 25, 1.5);

    //top half of blood (triangle ish shape)
    push();
    beginShape();
    translate(gameChar_x - 43, gameChar_y - 138);
    curveVertex(194.5 / 3.8, 215.5 / 1.9151);
    curveVertex(194.5 / 3.8, 215.5 / 1.9151);
    curveVertex(190 / 3.8, 203 / 1.9151);
    curveVertex(185 / 3.8, 215.5 / 1.9151);
    curveVertex(185 / 3.8, 215.5 / 1.9151);
    endShape();
    pop();

    //white blood shade

    fill(255);
    noStroke();
    ellipse(gameChar_x + 7.5, gameChar_y - 25, 1, 1.5);

    //shade for ghost

    push();
    fill(0, 0, 0, 50);
    translate(gameChar_x - 43, gameChar_y - 137);
    beginShape();
    curveVertex(46, 78);
    curveVertex(46, 78);
    curveVertex(52, 81);
    curveVertex(55, 86);
    curveVertex(55, 86);
    endShape();
    pop();
  } else {
    // add your standing front facing code

    stroke(0);
    strokeWeight(1.8);
    fill("a9a9a9");
    ellipse(gameChar_x - 1, gameChar_y - 47, 30, 30);
    rect(gameChar_x - 16, gameChar_y - 47, 30, 22.5);
    triangle(
      gameChar_x - 16,
      gameChar_y - 24.5,
      gameChar_x - 8,
      gameChar_y - 24.5,
      gameChar_x - 16,
      gameChar_y - 9
    ); //first corner
    triangle(
      gameChar_x - 11,
      gameChar_y - 24.5,
      gameChar_x + 1,
      gameChar_y - 24.5,
      gameChar_x - 7,
      gameChar_y - 12.5
    ); //2nd tri
    triangle(
      gameChar_x - 2,
      gameChar_y - 24.5,
      gameChar_x + 10,
      gameChar_y - 24.5,
      gameChar_x + 2,
      gameChar_y - 12.5
    ); //3rd tri
    triangle(
      gameChar_x + 4.8,
      gameChar_y - 24.5,
      gameChar_x + 13.8,
      gameChar_y - 24.5,
      gameChar_x + 14,
      gameChar_y - 9
    ); //4THcorner tri

    //filler rect to hide stroke

    noStroke();
    fill("a9a9a9");
    rect(gameChar_x - 15.1, gameChar_y - 49, 28, 27.9);

    //eyes

    fill(0);
    noStroke();
    circle(gameChar_x - 7.5, gameChar_y - 47, 6);
    circle(gameChar_x + 4.5, gameChar_y - 47, 6);

    //mouth

    rect(gameChar_x - 11, gameChar_y - 37, 19, 1);
    stroke(0);
    strokeWeight(0.8);
    fill(255, 0, 0);
    triangle(
      gameChar_x + 7.5,
      gameChar_y - 36,
      gameChar_x + 5.5,
      gameChar_y - 33,
      gameChar_x + 3.5,
      gameChar_y - 36
    );
    triangle(
      gameChar_x - 6.5,
      gameChar_y - 36,
      gameChar_x - 8.5,
      gameChar_y - 33,
      gameChar_x - 10.5,
      gameChar_y - 36
    );

    //BLOOD

    //bottom half of blood (circle)

    fill(255, 0, 0);
    stroke("#740707");
    strokeWeight(1.1);
    circle(gameChar_x + 6, gameChar_y - 25, 1.5);

    //top half of blood (triangle ish shape)

    push();
    beginShape();
    translate(gameChar_x - 44, gameChar_y - 138);
    curveVertex(194.5 / 3.8, 215.5 / 1.9151);
    curveVertex(194.5 / 3.8, 215.5 / 1.9151);
    curveVertex(190 / 3.8, 203 / 1.9151);
    curveVertex(185 / 3.8, 215.5 / 1.9151);
    curveVertex(185 / 3.8, 215.5 / 1.9151);
    endShape();
    pop();

    //white blood shade

    fill(255);
    noStroke();
    ellipse(gameChar_x + 6.35, gameChar_y - 25, 1, 1.5);

    //shade for ghost

    push();
    fill(0, 0, 0, 50);
    translate(gameChar_x - 45, gameChar_y - 137);
    beginShape();
    curveVertex(46, 78);
    curveVertex(46, 78);
    curveVertex(52, 81);
    curveVertex(55, 86);
    curveVertex(55, 86);
    endShape();
    pop();
  }

  ///////////INTERACTION CODE//////////
  //Put conditional statements to move the game character below here
}

function keyPressed() {
  // if statements to control the animation of the character when
  // keys are pressed.

  //open up the console to see how these work
  console.log("keyPressed: " + key);
  console.log("keyPressed: " + keyCode);

  //moving right + left
  if (key == "d") {
    isRight = true;
  } else if (key == "a") {
    isLeft = true;
  }

  //jumping
  if (key == "w") {
    gameChar_y -= 100;
  }

  //avoiding jumping more than once at a time/flying
  if (key == "w" && isFalling) {
    gameChar_y += 100;
  }
}

function keyReleased() {
  // if statements to control the animation of the character when
  // keys are released.

  console.log("keyReleased: " + key);
  console.log("keyReleased: " + keyCode);

  if (key == "d") {
    isRight = false;
  } else if (key == "a") {
    isLeft = false;
  }
}
