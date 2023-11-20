let button = document.getElementById("button");
let para = document.getElementById("p");


button.addEventListener('click',changeText) //when button is clicked, run function changeText

function changeText(){
    para.textContent = "& MERRY CHRISTMAS!"; // change paragraph text to new defined text
}