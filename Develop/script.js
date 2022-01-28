// Assignment code here
  let password = 'Hello There';
  let upperCasePrompt = "";
  let specialPrompt = "";
  let numberPrompt = "";
  let length = "";
  let passwordLength = 0;
  let passwordAray = [];

  const characters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 
    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 
    'Z', '~', '!', '@', '#', '$', '%', '&', '+', '-', '?', '/', 1, 2, 3, 4, 5, 6, 7, 8, 9
    ];  

  function lengthPrompt() {
    length =  window.prompt("How many characters long would you like your password to be?");

    if(length >= 8 && length <= 128) {
      console.log(length); 
    }
    else{
      lengthPrompt()
    }
  }  

  function generatePrompts(prompt) {
    if(prompt) {
      return true;
    }
    else {
      return false;
    }
  }

  function prompts(){
    upperCasePrompt = window.confirm("Would you like to have uppercase letters in your password?")
    specialPrompt = window.confirm("Would you like to have special characters in your password?")
    numberPrompt = window.confirm("Would you like to have numbers in your password?")

    lengthPrompt()
    generatePrompts(upperCasePrompt)
    generatePrompts(specialPrompt)
    generatePrompts(numberPrompt)
  };

  function generatePassword() {
    prompts();
    console.log(characters);

    return password;
  }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
