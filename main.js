const buttons = document.querySelector(".button");
const textP = document.querySelector(".introP");

buttons.addEventListener("click", slideMenu);

function slideMenu(){
    textP.style.display = "block";
}