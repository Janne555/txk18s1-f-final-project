//define constants
const pictures = [
    "kuvat/assorted-assortment-baked-1236680.jpg",
    "kuvat/bake-chocolate-confectionery-1028708.jpg",
    "kuvat/baked-goods-colorful-colourful-14105.jpg",
    "kuvat/cake-cupcake-cupcakes-585581.jpg",
    "kuvat/chocolate-cupcakes-chocolate-muffins-cupcakes-93451.jpg"];

// const slideshow_button_next = document.getElementById("slideshow_button_next");
// const slideshow_button_prev = document.getElementById("slideshow_button_prev");
const current_picture = document.getElementById("current_picture");

//add listeners
// slideshow_button_next.addEventListener("click", function (evt) {
//     nextSlide();
// })
//
// slideshow_button_prev.addEventListener("click", function (evt) {
//     prevSlide();
// })


var currentSlide = 1;
var maxSlides = pictures.length - 1;

// function nextSlide() {
//     if (currentSlide === maxSlides) {
//         showSlide(0);
//         return;
//     } else {
//         showSlide(currentSlide += 1);
//     }
// }
//
// function prevSlide() {
//     if (currentSlide === 0) {
//         showSlide(maxSlides)
//         return;
//     } else {
//         showSlide(currentSlide -= 1);
//     }
// }

function nextSlide() {
    if (currentSlide === maxSlides) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
}

function showSlide(n) {
    current_picture.setAttribute("src", pictures[n]);
    nextSlide();
}

setInterval(function() {
    showSlide(currentSlide);
}, 5000);
