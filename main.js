const buttons = document.getElementsByClassName("button");
let i;

for(i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        this.classList.toggle("active");

        let introP = this.nextElementSibling;

        if(introP.style.display === "block"){
            introP.style.display = "none";
        } else {
            introP.style.display = "block";
        }
    });
}