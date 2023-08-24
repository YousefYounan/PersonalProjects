const starsEl = document.querySelectorAll(".fa-star") // Henter alle stjernene ved bruk av document.querySelectorAll
const emojisEL = document.querySelectorAll(".fa-regular") // Henter alle emojiene ved bruk av document.querySelectorAll

const colorsArray =["red","orange","lightblue","lightgreen","green"]


updaterating(0);// Gjør slik at emojiEL begynner på index 0 som = fargen "red" i colorsArray

starsEl.forEach((starsEl, index)=>{
    starsEl.addEventListener("click", ()=>{//Henviser til updaterating når star er klikket 
        updaterating(index)//                samt sender index som parameter
    })
})

function updaterating(index){
    //Endring i starsEL
    starsEl.forEach((starsEl, idx)=>{
        if(idx < index + 1){ // Sier at index skal være +1 slik at om index 3 er klikket, vil 2,1,0 lyse Gul.
            starsEl.classList.add("active");//Legger til active class
        }else{
            starsEl.classList.remove("active");//Fjerner active class
        }
    });

    //Endring i emojiEL + ColorsArray
    emojisEL.forEach((emojiEL) => {
        emojiEL.style.transform = `translateX(-${index * 50}px)`;//Bruker `` får å få verdien til index
        emojiEL.style.color = colorsArray[index] //Index vil kompondere for riktig verdi i colorsArray
    });

}
/**
 * Comment
 * ! Warning
 * ? Qestions
 * TODO: Just a todo list thingy
 * @param index the parameter 
 */