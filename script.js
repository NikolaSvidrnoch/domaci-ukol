
function generujEmail() {

    let jmeno = prompt("Zadejte své křestní jméno (bez diakritiky):").trim();
    let prijmeni = prompt("Zadejte své příjmení (bez diakritiky):").trim();

    let castPrijmeni = prijmeni.slice(0, 5).toLowerCase();
    let castJmena = jmeno.slice(0, 3).toLowerCase();

    let email = castPrijmeni + castJmena + "@fit.cvut.cz";

    let vysledek = document.createElement("p");
    vysledek.textContent = "Váš e-mail je: " + email;
    document.body.appendChild(vysledek);
}

generujEmail();