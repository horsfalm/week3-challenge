// Assignment code here
function passwordLength() {
    var num = prompt("Choose password length (must be between 8 and 128 characters long)");

    if (num >= 8 && num <= 128) {}
        else {
        alert("Please enter a valid response.");
        passwordLength();
    }
}
passwordLength();

function passwordCharacters() {
    var characterLowercase = prompt("Your password be a combination of lowercase, uppercase, numeric and/or special characters and must contain at least one of these character types. Include lower case characters (Y/N)?");
    var characterUppercase = prompt("Your password be a combination of lowercase, uppercase, numeric and/or special characters and must contain at least one of these character types. Include upper case characters (Y/N)?");
    var characterNumeric = prompt("Your password be a combination of lowercase, uppercase, numeric and/or special characters and must contain at least one of these character types. Include numeric characters (Y/N)?");
    var characterSpecial = prompt("Your password be a combination of lowercase, uppercase, numeric and/or special characters and must contain at least one of these character types. Include special characters (Y/N)?");

    if (characterLowercase === "N" && characterUppercase === "N" && characterNumeric === "N" && characterSpecial === "N") {
        alert("You must choose at least one character type for your password. Please choose again.");
        passwordCharacters();
    }
}
passwordCharacters();





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