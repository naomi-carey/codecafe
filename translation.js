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
      localStorage.setItem("language", language);
      update_texts();  
  });

  let language = localStorage.getItem("language") || "en";
  $('.language-select').val(language);
  $.i18n().locale = language;

  update_texts();
});


