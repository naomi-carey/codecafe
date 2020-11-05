// Reservation onClick 

const name = document.getElementById("input-name");
const numberOfPeople = document.getElementById("input-number-people");
const dateTime = document.getElementById("date-time"); 
const specialRequirements = document.getElementById("special-requirements");
const popUpConfirmation = document.querySelector(".modal-body");

function getInputValue(){
        // Selecting the input element and get its value 
        let nameVal = name.value;
        let numberVal = numberOfPeople.value
        let specialRquestVal = specialRequirements.value
        let dateVal = dateTime.value
        // dateVal.toString();
        // Displaying the value
    
        
        popUpConfirmation.innerHTML = `<strong> Name: </strong> ${nameVal} <br> <strong> Number of 
        people: </strong> ${numberVal} <br> <strong> Special request: </strong> ${specialRquestVal} <br> <strong> Date/Time: </strong>
        ${dateVal}`;
        
    }


 
    // // Changing language

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



