const taulukko_elem = document.getElementById("taulukko");
const raaka_aine_elem = document.getElementById("raaka_aine");
const maara_elem = document.getElementById("maara");
const yksikko_elem = document.getElementById("yksikko");
const lisaa_elem = document.getElementById("lisaa");
const slideri_elem = document.getElementById("muuntosuhde");
const slideri_arvo_elem = document.getElementById("slider_arvo");
const uudetArvotLista = [];

lisaa_elem.addEventListener("click", function (evt) {
    let raaka_aine = raaka_aine_elem.value;
    let maara = maara_elem.value;
    let yksikko = yksikko_elem.value;
    let uusimaara = pyoristaKahteen(parseFloat(maara) * haeMuuntosuhde());
    lisaaRivi(raaka_aine, maara, uusimaara, yksikko);
});

slideri_elem.addEventListener("change", function (evt) {
    slideri_arvo_elem.innerText = haeMuuntosuhde();
    muunna();
})

function lisaaRivi(raaka_aine, maara, uusiMaara, yksikko) {
    let tr = document.createElement("tr");
    let raaka_aine_td = luoTd(raaka_aine);
    let maara_td = luoTd(maara);
    let uusimaara_td = luoTd(uusiMaara);
    uusimaara_td.setAttribute("data-vanha_maara", maara);
    let yksikko_td = luoTd(yksikko);
    tr.appendChild(raaka_aine_td);
    tr.appendChild(maara_td);
    tr.appendChild(uusimaara_td);
    tr.appendChild(yksikko_td);
    taulukko_elem.appendChild(tr);

    uudetArvotLista.push(uusimaara_td);
}

function luoTd(arvo) {
    let td = document.createElement("td");
    td.innerText = arvo;
    return td;
}

function haeMuuntosuhde() {
    return parseFloat(slideri_elem.value);
}

function muunna() {
    for (i in uudetArvotLista) {
        let vanha_arvo = parseFloat(uudetArvotLista[i].dataset.vanha_maara);
        let uusi_arvo = pyoristaKahteen(haeMuuntosuhde() * vanha_arvo);
        uudetArvotLista[i].innerText = uusi_arvo;
    }
}

function pyoristaKahteen(floatti) {
    return (Math.round((floatti * 100)) / 100);
}