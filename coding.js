//Why we code animation

const whyWeCodeText1 = document.querySelectorAll(".why-we-code");
let pFace = document.querySelectorAll(".p-face");
let pBack = document.querySelectorAll(".p-back");

for (let i = 0; i < 3; i++){
  whyWeCodeText1[i].addEventListener("mouseover", function(){
    pFace[i].style.display = "none";
    pBack[i].style.display = "inline";
  })
  
  whyWeCodeText1[i].addEventListener("mouseout", function(){
    pFace[i].style.display = "inline";
    pBack[i].style.display = "none";
  })
}