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
        // Displaying the value
    
        
        popUpConfirmation.innerHTML = `Name: <strong>${nameVal}</strong>, Number of 
        people: <strong>${numberVal}</strong>, Special request: <strong>${specialRquestVal}</strong> the Date/Time:
        <strong>${dateVal}</strong>`;
        
    }

// popUpConfirmation.innerHTML = "Test";


