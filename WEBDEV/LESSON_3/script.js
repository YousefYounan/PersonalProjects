let button = document.querySelector("button");
let box = document.getElementById("ChangeMe");


function changeColor(){
    if(box.style.background == "red"){
        box.style.background="Blue";
    }else{
        box.style.background="red";
    }
    
}