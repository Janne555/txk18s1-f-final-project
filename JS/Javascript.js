let long, lat;
long = 60.163;
lat = 24.931;
let karttani = L.map('kartta').setView([long, lat], 16);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {attribution: '&copy;<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(karttani);
let popup = L.popup();
    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("Klikkasit karttaa " + e.latlng.toString())
            .openOn(karttani);
    }
    karttani.on('click', onMapClick);

function passWord() {
  var testV = 1;
  var pass = prompt('Please Enter Your Password',' ');
  while (testV < 3) {
    if (pass)
      history.go(-1);
    if (pass.toLowerCase() == "letmein") {
      alert('You Got it Right!');
      window.open('www.wikihow.com');
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