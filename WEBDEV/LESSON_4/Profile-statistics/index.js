

const countersEl = document.querySelectorAll(".counter");

countersEl.forEach(counterEl => {
  counterEl.innerText = "0";
  incrementCounter();

  function incrementCounter() {
    let currentNum = +counterEl.innerText;
    const dataCeil = counterEl.getAttribute("data-ceil");

    // Logger "dataCeil" for demonstrasjonsformål
    console.log(dataCeil);

    // Beregn inkrementverdien og rund opp til nærmeste heltall
    const increment = dataCeil / 15;
    currentNum = Math.ceil(currentNum + increment);

    // Oppdater tellerens tekst hvis "currentNum" er mindre enn "dataCeil",
    // og kall deretter på funksjonen igjen etter en kort forsinkelse for animasjon
    if (currentNum < dataCeil) {
      counterEl.innerText = currentNum;
      setTimeout(incrementCounter, 50);
    } else {
      // Når "currentNum" har nådd eller overgått "dataCeil", oppdater tellerens tekst til "dataCeil"
      counterEl.innerText = dataCeil;
    }
  }
});
