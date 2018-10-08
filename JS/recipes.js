const url = "http://www.recipepuppy.com/api/?q=";
const searchField = document.getElementById("search_field");
const searchButton = document.getElementById("search_button");
searchButton.addEventListener("click", function (evt) {
    search();
});

function search() {
    let searchTerm = searchField.value;
    let searchString = url + searchTerm;
    fetch(searchString, {mode: "no-cors"})
        .then(function (reply) {
            return reply.json();
        })
        .then(function (reply) {
            console.log();
        })
        .catch(function (error) {
            console.log(error);
        })
}
