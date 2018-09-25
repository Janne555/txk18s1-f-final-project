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