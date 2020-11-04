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

// popUpConfirmation.innerHTML = "Test";


