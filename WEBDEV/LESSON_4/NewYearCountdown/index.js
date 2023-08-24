
const dayEl = document.getElementById("day") // Henter day fra ID
const hourEl = document.getElementById("hour") // Henter hour fra ID
const minutEl = document.getElementById("minut") // Henter minut fra ID
const secondEl = document.getElementById("second") // Henter second fra ID


const newYearTime = new Date("Jan 1, 2024 00:00:00").getTime()//Henter tiden til nyttår

updateCountdown() //Kaller på funksjonen updateCountdown()
function updateCountdown(){
    const now = new Date().getTime(); //Henter dagens tid
    const gap = newYearTime - now; //Finner ut a tiden fra nå til nyttår altså antall dager

    const second = 1000; // 1 sekund = 1000 millisekund
    const minut = second * 60; // 1 minutt = 60 sekunder
    const hour = minut * 60; // 1 time = 60 Minutter
    const day = hour * 24; // 1 dag = 24 Timer

    const d = Math.floor(gap/day) // Deler gap verdien med day for å få dager
    const h = Math.floor((gap % day) / hour); // Finner resten av (gap % day) også deler med hour for å få timer
    const m = Math.floor((gap % hour) / minut); // Finner resten av (gap % hour) også deler med minut for å få minutter
    const s = Math.floor((gap % minut) / second); // Finner resten av (gap % minut) også deler med second for å få sekunder

    dayEl.innerText = d; // Angir at innerText til dayEl skal være verdien til d
    hourEl.innerText = h; // Angir at innerText til hourEl skal være verdien til h
    minutEl.innerText = m; // Angir at innerText til minutEl skal være verdien til m
    secondEl.innerText = s; // Angir at innerText til secondEl skal være verdien til s

    setTimeout(updateCountdown,1000) // vi legger en setTimeout for å kalle på funskjonen hvert sekund!
}