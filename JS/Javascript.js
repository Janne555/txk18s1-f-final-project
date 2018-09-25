let long, lat;
long = 60.17;
lat = 24.93;
let karttani = L.map('kartta').setView([long, lat], 16);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {attribution: '&copy;<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(karttani);

function isValid(myNode){
  var password = myNode.value;
  if (password == "rawr")
  {alert('Correct!')}
  else
  {alert('Wrong Password')}
}