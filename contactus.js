const contactDiv = document.querySelectorAll(".contact-us-div")
const submitButton = document.querySelector(".contactusbtn")

submitButton.addEventListener("click", function(){
    alert("Thank you, We have recieved your message. One of our team will be in contact with you within the next 24 hours")
})

let reviewSubmitButton = document.getElementById(".reviewbtn");
let name = document.getElementById('#reviewerName');
let reviewMessage = document.getElementById('#reviewMessage');
let reviewContainer = document.getElementById('.reviews');

let reviewContainer = [
  {
    name:  "Marc Llopis",
    reviewMessage:  "I absolutely love code Cafe. amazing service and so much to do   " 
    },
    { 
    name: "JL C",
    reviewMessage: "Great Service!!"  
    },
    {
    name: "Alfred2334",
    reviewMessage: "Loved it. Cannot wait to go back "  
    },
    {
    name: " Victoria K",
    reviewMessage: "The Coffee is almost as good as the atmosphere. And that is saying something " 
    },
    {   
    name: "Luz C",
    reviewMessage: "I hate This place. Everyone is so rude "
    },
    {   
    name: "Dean Leonard",
    reviewMessage:  "I had my 16th Birthday here. we all got so drunk"
    },
    {  
      name: "Naomi C",
      reviewMessage:"They make a mean flat white "  
    
    }    
]

function createAListOfCommentsFromArray(array) {
    let arrayToHtml = ''
    for (let i = 0; i < array.length; i++) {
      arrayToHtml += `
      <br>
      <h4>${array[i].name} said:</h4>
      <p>${array[i].reviewMessage}</p>
      <br>
      <hr>
    `
    }
    return arrayToHtml;
}


// code to listen on the click event on the comment button
reviewSubmitButton.addEventListener('click', function () {
    // I store in those variables the value of the input and the textarea
    let nameValue = name.value;
    let reviewMessageValue = reviewMessage.value;
    // Push an object with 2 keys with the values I need to the array of comments
    commentsContainer.push({
      name: nameValue,
      reviewMessage: reviewMessageValue
    })
    // clear the values for the html
    name.value = '';
    reviewMessage.value = '';
    // Change the html to show the new comments while calling the fn that is in charge of it
    commentsContainer.innerHTML = createAListOfCommentsFromArray(reviewContainer)
  })
  // loads all the initial comments calling the fn
  commentsContainer.innerHTML = createAListOfCommentsFromArray(reviewContainer)
  

































// const openPopupButton = document.querySelectorAll('[data-popup-target]');
// const closePopupButton = document.querySelectorAll('[data-close-button]');
// const overlay = document.getElementById('overlay');

// openPopupButton.forEach(button => {
//     button.addEventListener("click", () => {
//         const popup = document.querySelector(button.dataset.popupTarget)
//         openPopup(popup)
//     })
// })

// overlay.addEventListener("click", () => {
//     const popup = document.querySelectorAll(".popup.active")
//     popup.forEach(popup => {
//         closePopup(popup)
//     })
// }

// closePopupButton.forEach(button => {
//     button.addEventListener("click", () => {
//         const popup = button.closest(".popup")
//         closePopup(popup)
//     })
// })

// function openPopup(popup){
//     if (popup == null) return
//     popup.classList.add(".active")
//     overlay.classList.add("active")
// }

// function closePopup(popup){
//     if (popup == null) return
//     popup.classList.remove(".active")
//     overlay.classList.remove("active")
// })