let long, lat;
long = 60.17;
lat = 24.93;
let karttani = L.map('kartta').setView([long, lat], 16);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {attribution: '&copy;<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(karttani);

function passWord() {
  var testV = 1;
  var pass1 = prompt('Please Enter Your Password',' ');
  while (testV < 3) {
    if (!pass1)
      history.go(-1);
    if (pass1.toLowerCase() == "letmein") {
      alert('You Got it Right!');
      window.open('www.wikihow.com');
      break;
    }
    testV+=1;
    var pass1 =
        prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
  }
  if (pass1.toLowerCase()!="password" & testV ==3)
    history.go(-1);
  return " ";
}