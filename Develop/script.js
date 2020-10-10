// Character Arrays:
let specCharArr = [ "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "{", "|", "}", "~"];
let numArr = [0,1,2,3,4,5,6,7,8,9]
let lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Button selection and click event listener:
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", userPrompts);


// Prompts for user choices:
function userPrompts () {
  let specCharConf = confirm("Include special characters? (Hit 'ok' to include, 'cancel' to exclude")
  let numConf = confirm("Include numbers?")
  let upperConf = confirm("Include lower case letters?")
  let lowerConf = confirm("Include upper case letters?")
    if (specCharConf === false && numConf === false && upperConf === false && lowerConf === false)
      alert("Please choose at least one character type to include!")


  let charCount = prompt("How many characters? Must be between 8 and 128");
    if (charCount === null || charCount === "" || charCount < 8 || charCount > 128 || isNaN(charCount) === true) {
      alert("Please enter a valid length/ enter a number!");
    } 


}



// Assignment Code


// Write password to the #password input
function writePassword() {
  
    // var password = generatePassword();
    // var passwordText = document.querySelector("#password");

    // passwordText.value = password;

}

// Add event listener to generate button

