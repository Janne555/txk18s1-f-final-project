function navifunktio() {
    var x = document.getElementById("topnav");
    if (x.className === "navi") {
        x.className += " responsive";
    } else {
        x.className = "navi";
    }
}