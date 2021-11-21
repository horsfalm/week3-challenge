// Character ranges from which random passwords can be generated
var charRangeLowercase = "abcdefghijklmnopqrstuvwxyz";
var charRangeUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charRangeNumeric = "0123456789";
var charRangeSpecial = "~!@#$%^&*()";


alert("Welcome to Mark's Password Generator!")

// Prompt to force compliant choice
do { 
  num = +prompt("Choose password length (must be between 8 and 128 characters long)");
} while (isNaN(num) || num < 8 || num > 128)

// Criteria selection
function passwordCreation() {
  var charLowercase = prompt("Your password be a combination of lowercase, uppercase, numeric and/or special characters and must contain at least one of these character types. Include lower case characters (Y/N)?");
  var charUppercase = prompt("Your password be a combination of lowercase, uppercase, numeric and/or special characters and must contain at least one of these character types. Include upper case characters (Y/N)?");
  var charNumeric = prompt("Your password be a combination of lowercase, uppercase, numeric and/or special characters and must contain at least one of these character types. Include numeric characters (Y/N)?");
  var charSpecial = prompt("Your password be a combination of lowercase, uppercase, numeric and/or special characters and must contain at least one of these character types. Include special characters (Y/N)?");

// Eliminate undesired character ranges
  if (charLowercase === "N") {
    charRangeLowercase = "";
  }

  if (charUppercase === "N") {
    charRangeUppercase = "";
  }

  if (charNumeric === "N") {
    charRangeNumeric = "";
  }

  if (charSpecial === "N") {
    charRangeSpecial = "";
  }

  if (charLowercase === "N" && charUppercase === "N" && charNumeric === "N" && charSpecial === "N") {
    alert("You must choose at least one character type for your password. Please choose again.");
    passwordCreation();
  }
}
passwordCreation();

function generatePassword(length) {
  var result ="";
  var characters = charRangeLowercase + charRangeUppercase + charRangeNumeric + charRangeSpecial;
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
}
  return result;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(num);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

