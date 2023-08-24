//Lager const for å hente elementene ved bruk av querySelector + spesifisering av hva som skal hentes
const menuEl = document.querySelector(".menu")
const menuTextEl = document.querySelector(".menu p")
const socialListsEl = document.querySelector(".Social-lists")
const liEls = document.querySelectorAll(".Social-lists li") // Henter inn alle mulige sosiale medier som inneholder logo og text


menuEl.addEventListener("click",()=>{
    socialListsEl.classList.toggle("hide"); //Toggler klassen "hide" av og på
    menuEl.classList.toggle("rotate"); //Toggler klassen "rotate" av og på
});

liEls.forEach(liEl =>{ // Bruker forEach for å gjennomføre funksjonen for alle liEl. Slipper å bruke for loop?
    liEl.addEventListener("click",()=>{ //Legger en addEventListener med funksjons trigger "click"
        menuTextEl.innerHTML = liEl.innerHTML // Sier at InnerHTML til menuTextEl skal være hva enn liEl.InnerHTML er
        socialListsEl.classList.add("hide"); //Legger til  klassen "hide" av og på
        menuEl.classList.toggle("rotate"); //Toggler klassen "rotate" av og på
    })
});