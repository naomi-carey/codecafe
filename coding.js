// Why we code animation

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

// Changing language

$(document).ready(function () {
  let update_texts = function () {
      $('body').i18n();
  };
 
  $.i18n().load({
      en: enLanguage,
      fr: frLanguage,
      ru: ruLanguage
  });

  $('.language-select').change(function (e) {
      let language = $(this).val();
      $.i18n().locale = language;
      update_texts();
      
  });

  update_texts();
});