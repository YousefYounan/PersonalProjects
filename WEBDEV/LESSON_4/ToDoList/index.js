// Henter referanser til DOM-elementer ved hjelp av querySelector
const formEl = document.querySelector(".form"); // Referanse til skjemaelementet
const inputEl = document.querySelector(".input"); // Referanse til input-elementet for oppgavetekst
const ulEl = document.querySelector(".list"); // Referanse til listen hvor oppgavene vises

// Henter oppgavelisten fra Local Storage og viser oppgavene på siden
let list = JSON.parse(localStorage.getItem("list")); // Henter listen fra local storage
if (list) {
  list.forEach((task) => {
    toDoList(task); // Legger til hver oppgave fra listen i grensesnittet
  });
}

// Lytter etter skjemainnsending og utfører funksjonen når det skjer
formEl.addEventListener("submit", (event) => {
    event.preventDefault(); // Forhindrer standard oppførsel, som sideoppdatering
    toDoList(); // Legger til en ny oppgave i grensesnittet
});

// Funksjon for å legge til en oppgave i grensesnittet
function toDoList(task) {
    let newTask = inputEl.value; // Henter oppgaveteksten fra input-elementet

    if (task) { // Sjekker om det er en eksisterende oppgave som skal oppdateres
        newTask = task.name; // Setter den nye oppgaveteksten til å matche den eksisterende oppgaven
    }
   
    const liEl = document.createElement("li"); // Oppretter et nytt <li>-element for oppgaven

    if (task && task.checked) { // Sjekker om oppgaven er sjekket som ferdig i listen
        liEl.classList.add("checked"); // Legger til klassen "checked" for å markere oppgaven som ferdig
    }
    
    liEl.innerText = newTask; // Setter teksten til <li>-elementet til oppgaveteksten
    ulEl.appendChild(liEl); // Legger til <li>-elementet i listen
    inputEl.value = ""; // Tilbakestiller verdien i input-elementet
    
    // Legger til en knapp for å markere oppgaven som ferdig
    const checkBtnEl = document.createElement("div");
    checkBtnEl.innerHTML = `
    <i class="fa-solid fa-square-check"></i>
    `;
    liEl.appendChild(checkBtnEl);

    // Legger til en knapp for å slette oppgaven
    const trashBtnEl = document.createElement("div");
    trashBtnEl.innerHTML = `
    <i class="fa-solid fa-trash"></i>
    `;
    liEl.appendChild(trashBtnEl);

    // Håndterer markering av oppgaven som ferdig
    checkBtnEl.addEventListener("click", () => {
        liEl.classList.toggle("checked"); // Legger til/fjerner klassen "checked" ved klikk for å indikere ferdigstillelse
        updateLocalStorage(); // Oppdaterer local storage med oppdatert oppgaveliste
    });

    // Håndterer sletting av oppgaven
    trashBtnEl.addEventListener("click", () => {
        liEl.remove(); // Fjerner oppgaven fra grensesnittet
        updateLocalStorage(); // Oppdaterer local storage med oppdatert oppgaveliste
    });

    updateLocalStorage(); // Oppdaterer local storage med den nye oppgavelisten
};

// Oppdaterer local storage med den oppdaterte oppgavelisten
function updateLocalStorage() {
    const liEls = document.querySelectorAll("li"); // Henter alle <li>-elementer
    list = [];
    liEls.forEach((liEl) => {
        list.push({
            name: liEl.innerText, // Legger til oppgaveteksten i oppgavelisten
            checked: liEl.classList.contains("checked"), // Sjekker om oppgaven er markert som ferdig
        });
    });
    localStorage.setItem("list", JSON.stringify(list)); // Lagrer den oppdaterte oppgavelisten i local storage
};
