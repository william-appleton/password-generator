// Character Arrays:
let specCharArr = [ !, #, $, %, &, (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, {, |, }, ~,];
let numArr = [0,1,2,3,4,5,6,7,8,9]
let lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ]




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  confirm("Include special characters?")
  confirm("Include numbers?")
  confirm("Include upper case letters?")
  confirm("Include lower case letters?")
  let charCount = prompt("How many characters? Must be between 8 and 128");
    if (charCount === null || charCount === "" || charCount < 8 || charCount > 128) {
      alert("Please enter a valid length!");
    } 
    // var password = generatePassword();
    // var passwordText = document.querySelector("#password");

    // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
