const imageContainerEl = document.querySelector(".image-container")
const prevEl = document.getElementById("prev") // Henter element
const nextEl = document.getElementById("next") // Henter element

let x = 0 // Default varibabel for antall deg for rotateY i css
let timer; // timer variabel for å unngå multiplikasjon av updateGallery() når vi klikker next/prev 

prevEl.addEventListener("click",()=>{ // Legger EventListener som kjører direkte funskjon som kaller på updateGallery()
    x=x+45; // Samt + 45 for x variabel for er deg i rotateY i css, dette vil da rotere bildene som git ilusjon av at man klikker til neste bilde 
    clearTimeout(timer) // reseter timer som blir sendt som argument variabel for å unngå flere kall av updateGallery()
    updateGallery() // Kaller på updateGallery()
});

nextEl.addEventListener("click",()=>{ // Legger EventListener som kjører direkte funskjon som kaller på updateGallery()
    x=x-45; // Samt - 45 for x variabel for er deg i rotateY i css, dette vil da rotere bildene som git ilusjon av at man klikker til prev bilde 
    clearTimeout(timer) // reseter timer som blir sendt som argument variabel for å unngå flere kall av updateGallery()
    updateGallery() // Kaller på updateGallery()
});

function updateGallery(){// updateGallery() funskjonen som vi har nevnt før.
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout(()=>{ //Funkjsonen blir kalt når timer - (3000 = 3) går til 0
        x=x-45; // Samt - 45 for x variabel for er deg i rotateY i css, dette vil da rotere bildene som git ilusjon av at man klikker til forige bilde 
        updateGallery() //Kaller på seg selv for å få auto prev bilde 
    }, 3000)// Tids timer for når funksjonen skal gjentas. 
}

updateGallery(); // Kaller på funksjonen for å starte programmet sitt "hjerne?".


// NEXT Button Might be wrong Remember to fix:) //


//ChatGPT
// setTimeout er en funksjon i JavaScript som lar deg utføre en kodeblokk eller en funksjon 
// med en forsinkelse (delay) etter et angitt antall millisekunder.

// Syntax:
// setTimeout(function, delay);

// 'function': Dette er en funksjon som skal utføres etter forsinkelsen er over.
// 'delay': Antall millisekunder som må passere før funksjonen blir utført.

// Eksempel:
// Her vil funksjonen 'showMessage' bli kalt etter 2000 millisekunder (2 sekunder) har passert:
// setTimeout(showMessage, 2000);

// Du kan også bruke en anonym funksjon (arrow function eller vanlig funksjon) direkte som argument:
// setTimeout(() => {
//    // Kodeblokk som skal utføres etter 3000 millisekunder (3 sekunder) har passert.
// }, 3000);

// Merk: For enkel bruk i dokumentet ditt, husk å plassere koden inne i <script> ... </script>-tagger.
// OBS: Dette trengs ikke om du har eksternt JS fil linket til HTML filen din!
