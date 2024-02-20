//Queation 1

// function displayWelcomeMessage(){
//     let userName = prompt("enter userName");
//     alert(`welcome ${userName}!`);
// }
// displayWelcomeMessage();

// Question 2
function generateQuote() {
  let quote = [
    "Education is key to success",
    "You must be the change you wish to see in the world. ",
    "well done is better than well said ",
    "In the end it's not the  years in your life that count it's life in your years",
  ];
  let randomNumber = Math.floor(Math.random() * quote.length);
  alert(quote[randomNumber])
}
generateQuote();

// Queation 3
// function generateRandom(){
//     let rand = Math.floor(Math.random() * 100) + 1;
//     console.log(rand);

//     return rand;
//   }
//   generateRandom();
