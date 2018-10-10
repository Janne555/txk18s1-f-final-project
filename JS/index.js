const pictures = [
    "kuvat/assorted-assortment-baked-1236680.jpg",
    "kuvat/bake-chocolate-confectionery-1028708.jpg",
    "kuvat/baked-goods-colorful-colourful-14105.jpg",
    "kuvat/cake-cupcake-cupcakes-585581.jpg",
    "kuvat/chocolate-cupcakes-chocolate-muffins-cupcakes-93451.jpg"];

const current_picture = document.getElementById("current_picture");
var currentSlide = 1;
var maxSlides = pictures.length - 1;

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

try {
    setInterval(function () {
        showSlide(currentSlide);
    }, 5000);
} catch (e) {
    console.log(e);
}

const url = "https://aws.random.cat/meow";
const catPic = document.getElementById("catpic");

function setCatPic() {
    fetch(url)
        .then(function (reply) {
            return reply.json();
        })
        .then(function (reply) {
            catPic.setAttribute("src", reply.file);
        })
        .catch(function (error) {
            console.log(error);
        });
}

setCatPic();