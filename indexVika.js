
const whyWeCodeText1 = document.querySelectorAll(".why-we-code");
let pFace = document.querySelectorAll(".p-face");
let pBack = document.querySelectorAll(".p-back");

for (let i = 0; i < 3; i++){
  whyWeCodeText1[i].addEventListener("mouseover", function(){
    pFace[i].style.display = "none";
    pBack[i].style.display = "inline";
    // whyWeCodeText1[i].style.backgroundColor = "#f5b42c";
  })
  
  whyWeCodeText1[i].addEventListener("mouseout", function(){
    pFace[i].style.display = "inline";
    pBack[i].style.display = "none";
    // whyWeCodeText1[i].style.backgroundColor = "#fcefd4";
  })
}

// Changing language

selectLanguage = document.querySelector(".language-select");
let language = selectLanguage.value;

headers = document.querySelectorAll(".coding-header");
navLinks = document.querySelectorAll(".nav-link");
// console.log(navLinks);


selectLanguage.addEventListener("change", function(){
  language = selectLanguage.value;
  switch (language){
    case "Russian":
      headers[0].innerHTML = "Где мы кодим";
      headers[1].innerHTML = "Почему мы кодим";
      headers[2].innerHTML = "Наши события";
      navLinks[0].innerHTML = "ДОМОЙ";
      navLinks[1].innerHTML = "МЕНЮ";
      navLinks[2].innerHTML = "ПИШЕМ КОД";
      navLinks[3].innerHTML = "ИГРЫ";
      navLinks[4].innerHTML = "О НАС";
      navLinks[5].value = "Русский";
      break;
  }
})

