// Henter referanse til "Next" og "Previous" knappene via deres ID-er
const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");

// Henter alle elementer med klassen "step" som representerer trinnene i veiviseren
const stepsEl = document.querySelectorAll(".step");

// Henter referanse til fremdriftslinjen
const progressEl = document.querySelector(".progress-bar-front");

// Variabel for å holde styr på nåværende trinn
let currentChecked = 1; // Starter på trinn 1

// Legger til en klikk-lytter på "Next" knappen
nextEl.addEventListener("click", () => {
    currentChecked++; // Øker nåværende trinn med 1

    // Begrens nåværende trinn til ikke å overstige antall trinn i veiviseren
    if (currentChecked > stepsEl.length) {
        currentChecked = stepsEl.length;
    }

    // Oppdater visningen av trinn og fremdrift
    updateStepProgress();
});

// Legger til en klikk-lytter på "Previous" knappen
prevEl.addEventListener("click", () => {
    currentChecked--; // Reduserer nåværende trinn med 1

    // Begrens nåværende trinn til ikke å være mindre enn 1
    if (currentChecked < 1) {
        currentChecked = 1;
    }

    // Oppdater visningen av trinn og fremdrift
    updateStepProgress();
});

// Funksjon for å oppdatere visningen av trinn og fremdrift
function updateStepProgress() {
    stepsEl.forEach((stepEl, idx) => {
        if (idx < currentChecked) {
            stepEl.classList.add("checked"); // Legg til "checked" klasse på fullførte trinn
            stepEl.innerHTML = `
                <i class="fas fa-check"></i>
                <small>${idx === 0 ? "Start" : idx === stepsEl.length - 1 ? "Final" : "Step " + idx}</small>
            `; // Vis ikon og trinnnummer/tekst avhengig av indeksen til trinnet
        } else {
            stepEl.classList.remove("checked"); // Fjern "checked" klasse fra ufullførte trinn
            stepEl.innerHTML = `
                <i class="fas fa-times"></i>
            `; // Vis kryssikon for ufullførte trinn
        }
    });

    // Beregn og oppdater bredden på fremdriftslinjen basert på antall fullførte trinn
    const CheckedNR = document.querySelectorAll(".checked");
    progressEl.style.width = ((CheckedNR.length - 1) / (stepsEl.length - 1)) * 100 + "%";

    // Deaktiver "Previous" eller "Next" knapper avhengig av nåværende trinn
    if (currentChecked === 1) {
        prevEl.disabled = true;
    } else if (currentChecked === stepsEl.length) {
        nextEl.disabled = true;
    } else {
        prevEl.disabled = false;
        nextEl.disabled = false;
    }
}
