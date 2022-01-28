// Assignment code here
  let password = 'Hello There';
  let upperCasePrompt = "";
  let specialPrompt = "";
  let numberPrompt = "";
  let length = "";
  let passwordLength = 0;
  let holdingSpot = [];
  let characters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 1, 2, 3, 4, 5, 6, 7, 8, 9, '~', '!', '@', 
    '#', '$', '%', '&', '+', '-', '?', '/', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
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
    if(!generatePrompts(upperCasePrompt)) {
      characters = characters.slice(0, 45);
    }

    generatePrompts(specialPrompt)
    if(!generatePrompts(specialPrompt) && !generatePrompts(upperCasePrompt)) {
      characters = characters.slice(0, 34);
    }
    else if(!generatePrompts(specialPrompt) && generatePrompts(upperCasePrompt)) {
      holdingSpot = characters.slice(46, 71);
      characters = characters.slice(0, 34);
      characters = characters.concat(holdingSpot);
    }

    generatePrompts(numberPrompt)
    if(!generatePrompts(specialPrompt) && !generatePrompts(upperCasePrompt) && !generatePrompts(numberPrompt)) {
      characters = characters.slice(0, 26);
    }
    else if(!generatePrompts(specialPrompt) && generatePrompts(upperCasePrompt) && !generatePrompts(numberPrompt)) {
      holdingSpot = characters.slice(46, 71);
      holdingSpot.unshift('L');
      holdingSpot.unshift('K');
      holdingSpot.unshift('J');
      holdingSpot.unshift('I');
      holdingSpot.unshift('H');
      holdingSpot.unshift('G');
      holdingSpot.unshift('F');
      holdingSpot.unshift('E');
      holdingSpot.unshift('D');
      holdingSpot.unshift('C');
      holdingSpot.unshift('B');
      holdingSpot.unshift('A');
      holdingSpot.push('Z');
      characters = characters.slice(0, 25);
      characters.push('z');
      characters = characters.concat(holdingSpot);
    }
    else if(generatePrompts(specialPrompt) && !generatePrompts(upperCasePrompt) && !generatePrompts(numberPrompt)) {
      holdingSpot = characters.slice(35, 45);
      holdingSpot.push('/');
      characters = characters.slice(0, 25);
      characters.push('z');
      characters = characters.concat(holdingSpot);
    }
  }

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
