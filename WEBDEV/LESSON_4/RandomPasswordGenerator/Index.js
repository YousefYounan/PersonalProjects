const btnEl = document.querySelector(".btn") // Henter inn ".btn"
const inputEl = document.getElementById("input") // Henter inn inputEl via ID
const copyiconEl = document.querySelector(".fa-copy") // Henter inn ".fa-copy" som er kopier logoen
const alertContainerEl = document.querySelector(".alert-container") // Henter inn ".alert-container"

btnEl.addEventListener("click", () =>{// Når btnEl blir klikket så vil den kalle på funskjonen createPassword()
    createPassword() // Kaller på createPassword()
})

copyiconEl.addEventListener("click", () =>{ // Om copyicon har blitt klikket så kjøres funksjonen
    copyPassword()
    if(inputEl.value){// Sjekker om inputEl har noe value 
        alertContainerEl.classList.remove("active")// Om det ikke har noe value så fjerner den "active"
        setTimeout(() =>{// Setter en setTimeout med 2 sekunder delay
        alertContainerEl.classList.add("active");// Om den har noe value så vil den legge til "active"
    },2000);// 2 sekunder delay
    }
})

function createPassword(){// Funksjonen har blitt kalt og programmet vil generere unik passord
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Angir alle mulig karakterer og tall som kan bli brukt
    const passwordLength = 10; // Angir passord lengden altså antal karakterer

    let password = ""; // Lager password variablen
    for (let index = 0; index < passwordLength; index++) { // for løkke som kjøres basert på hvor lang passwordLength er. index++?
        const randomNum = Math.floor(Math.random() * chars.length); // Lager en const randomNum, vi tar Math.random() som genererer tall 0-1 og ganger med lengden av chars deretter runder vi av tallet med Math.floor
        password += chars.substring(randomNum,randomNum+1); // Vi legger den tilfeldige tegnet inn i password += vi får dette tegnet ved hjelp av chars.substring(randomNum,randomNum+1)...
    }                                                       // som da har start og slutt posisjon randomNum,randomNum+1 som betyr at den retunerer ett enkelt tegn fra chars strengen som er i posisjon med randomNum
    inputEl.value = password; // Angir at Valuen til inputEl = passord
    alertContainerEl.innerText = password + "copied!" // Sier at alertContainerEl skal vise passordet samt + "copied!" for å indikere at det har blit kopiert
}


function copyPassword(){
    inputEl.select(); // Vi selekterer hele inputEl slik at den er klar til å bli kopiert
    inputEl.setSelectionRange(0,9999); // Vi angir tekstområdet som skal være valgt fra indeks 0 til 9999, for å få alt med
    navigator.clipboard.writeText(inputEl.value); // Skriver teksten i inputEl inn i utklippstavlen
}


//ChatGPT
//for (let index = 0; index < passwordLength; index++) {
    // Generer et tilfeldig tall (indeks) for å velge et tegn fra 'chars'
    //const randomNum = Math.floor(Math.random() * chars.length);

    // Legg til det tilfeldige tegnet i 'password'
    //password += chars.substring(randomNum, randomNum + 1);
//}

// Marker hele teksten i 'inputEl'
//inputEl.select();

// Sett tekstvalget til å starte fra indeks 0 og ende på indeks 9999
//inputEl.setSelectionRange(0, 9999);

// Kopier teksten fra 'inputEl' til utklippstavlen
//navigator.clipboard.writeText(inputEl.value);


//For å bruke dette må du ha definert variablene passwordLength, 
//chars og inputEl tidligere i koden. passwordLength bør inneholde ønsket passordlengde, 
//chars bør inneholde alle tegnene som kan brukes til å generere passordet, 
//og inputEl bør være en referanse til det HTML-input-elementet der passordet skal vises.