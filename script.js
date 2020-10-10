// Character Arrays:
let specCharArr = [ "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "{", "|", "}", "~"];
let numArr = [0,1,2,3,4,5,6,7,8,9]
let lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Button selection and click event listener:
let generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", createPassword);


// Function to create the password:
function createPassword () {
  let specCharConf = confirm("Include special characters? (Hit 'ok' to include, 'cancel' to exclude)")
  let numConf = confirm("Include numbers?")
  let lowerConf = confirm("Include lower case letters?")
  let upperConf = confirm("Include upper case letters?")
    if (specCharConf === false && numConf === false && upperConf === false && lowerConf === false) {
      alert("Please choose at least one character type to include!")
      return;
    }
  let charCount = parseInt(prompt("How many characters? Must be between 8 and 128"));
    if (charCount === null || charCount === "" || charCount < 8 || charCount > 128 || isNaN(charCount) === true) {
      alert("Please enter a valid length/ enter a number!");
      return;
    } 
  
  //Placeholder array for character options based on input:
  let chosenChar = []
  //Placeholder array for final password:
  let finalPass = []

  //Conditionals for options to add different character types:
  if (specCharConf === true) {
    chosenChar = chosenChar.concat(specCharArr)
  } 
  if (numConf === true) {
    chosenChar = chosenChar.concat(numArr)
  } 
  if (lowerConf === true) {
    chosenChar = chosenChar.concat(lowerCaseArr)
  } 
  if (upperConf === true) {
    chosenChar = chosenChar.concat(upperCaseArr)
  } 

  //Password generator
  for (i = 0; i < charCount; i++) {
    let randIndex = Math.floor(Math.random() * Math.floor(chosenChar.length));
    let genPass = chosenChar[randIndex]
    finalPass.push(genPass)
  }

  //Join array into a string
  let displayPass = finalPass.join("")
  
  //Wrtie final password to page:
  document.getElementById('password').textContent = displayPass
}
