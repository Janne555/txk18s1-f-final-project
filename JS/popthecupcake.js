const cupcake = document.getElementById("cupcake");
const score = document.getElementById("score");

var points = 0;
var width = 500 - 60;
var height = 500 - 60;

function pop() {
    let x = Math.floor(Math.random() * width);
    let y = Math.floor(Math.random() * height);

    cupcake.classList.add("popped");
    cupcake.classList.remove("appear");


    points += 1;


    setTimeout(function (evt) {
        cupcake.style.top = "" + y + "px";
        cupcake.style.left = "" + x + "px";
        cupcake.classList.add("appear");
        cupcake.classList.remove("popped");

    }, 600);

    score.innerText = points;
}

cupcake.addEventListener("click", function (evt) {
    pop();
});