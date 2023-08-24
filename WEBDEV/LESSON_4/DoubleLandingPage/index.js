// Hent referansen til HTML-elementet med klassenavn "contianer"
const containerEl = document.querySelector(".contianer");

// Hent referanser til HTML-elementene med klassenavn "left" og "right"
const leftEl = document.querySelector(".left");
const rightEl = document.querySelector(".right");

// Legg til en hendelselytter for musepekerens bevegelse over "leftEl"-elementet
leftEl.addEventListener("mouseover", () => {
    // Legg til klassenavn "active-left" til "containerEl"-elementet
    containerEl.classList.add("active-left");
});

// Legg til en hendelselytter for musepekerens bevegelse vekk fra "leftEl"-elementet
leftEl.addEventListener("mouseleave", () => {
    // Fjern klassenavn "active-left" fra "containerEl"-elementet
    containerEl.classList.remove("active-left");
});

// Legg til en hendelselytter for musepekerens bevegelse over "rightEl"-elementet
rightEl.addEventListener("mouseover", () => {
    // Legg til klassenavn "active-right" til "containerEl"-elementet
    containerEl.classList.add("active-right");
});

// Legg til en hendelselytter for musepekerens bevegelse vekk fra "rightEl"-elementet
rightEl.addEventListener("mouseleave", () => {
    // Fjern klassenavn "active-right" fra "containerEl"-elementet
    containerEl.classList.remove("active-right");
});



// Kunne komprimert koden til 50% mindre ved å slå sammen koden (EventListener, Funskjon).