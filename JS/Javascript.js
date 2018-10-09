let long, lat;
long = 60.163;
lat = 24.931;
let karttani = L.map('kartta').setView([long, lat], 16);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {attribution: '&copy;<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a><a href="http://project-osrm.org/">OSMR</a>',
    }).addTo(karttani);
L.Control.geocoder().addTo(karttani);
L.routing.control({
  routeWhileDragging:true,
  geocoder: L.Control.Geocoder.nominatim()
}).addTo(karttani);
var popup = L.popup();
function onMapClick(e) {
  popup
  .setLatLng(e.latlng)
  .setContent("Koordinaatit ovat" + e.latlng.toString())
  .openOn(karttani);
}
karttani.on('click', onMapClick);
const ekberg = L.marker([60.164703,24.937845]).addTo(karttani);
const oba = L.marker([60.164348,24.929277]).addTo(karttani);
const metkacafe = L.marker([60.163417, 24.930807]).addTo(karttani);
const kulmakahvila = L.marker([60.164025, 24.926650]).addTo(karttani);
const theboomroom = L.marker([60.161805, 24.937433]).addTo(karttani);
const roberts = L.marker([60.163048, 24.929428]).addTo(karttani);
ekberg.bindPopup("<h2>Ekberg</h2><img src='kuvat/ekberg.jpg' height='163px' width='250px'>").openPopup;
oba.bindPopup("<h2>Cafe Cafferino Oba</h2><img src='kuvat/oba.jpg' height='200px' width='200px'>").openPopup;
metkacafe.bindPopup("<h2>Metka Cafe</h2>").openPopup;
kulmakahvila.bindPopup("<h2>Kulma Kahvila</h2><img src='kuvat/kulmakahvila.jpg' height='250px' width='250px'>").openPopup;
theboomroom.bindPopup("<h2>The Boom Room</h2><img src='kuvat/boomroom.jpg' height='200px' width='200px'>").openPopup;
roberts.bindPopup("<h2>Robert's Coffee</h2><img src=kuvat/robertscoffee.jpg height='150px' width='300px'> ").openPopup;
function passWord() {
  var testV = 1;
  var pass = prompt('Please Enter Your Password',' ');
  while (testV < 3) {
    if (pass)
      history.go(-1);
    if (pass.toLowerCase() == "letmein") {
      alert('You Got it Right!');
      window.open('https://www.youtube.com/watch?v=uEYRZE9JcFA');
      break;
    }
    testV+=1;
    var pass =
        prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
  }
  if (pass.toLowerCase()!="password" & testV ==3)
    history.go(-1);
  return " ";
}
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
function navifunktio() {
  var x = document.getElementById("topnav");
  if (x.className === "navi") {
    x.className += " responsive";
  } else {
    x.className = "navi";
  }
}