const cupcake = document.getElementById("cupcake");
const score = document.getElementById("score");

var points = 0;
var width = 500 - 60;
var height = 500 - 60;

function pop() {
    console.log("popping");
    let x = Math.floor(Math.random() * width);
    let y = Math.floor(Math.random() * height);

    console.log("x: " + x + " y: " + y);
    cupcake.style.display = "none";

    points += 1;

    cupcake.style.top = "" + y + "px";
    cupcake.style.left = "" + x + "px";
    setTimeout(function (evt) {
        cupcake.style.display = "block";
        console.log("popped");
    }, 500);

    score.innerText = points;
}

cupcake.addEventListener("click", function (evt) {
    pop();
});