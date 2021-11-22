// DRY text
const promptText = ("Your password can be a combination of lowercase, uppercase, numeric and/or special characters but must contain at least one of these character types. Include ");

alert("Welcome to Mark's password generator!");

var commencePassGen = function() {
  // Criteria selection
  var charLowercase = prompt(promptText + " lower case characters (Y/N)?");
  var charUppercase = prompt(promptText + " upper case characters (Y/N)?");
  var charNumeric = prompt(promptText + " Include numeric characters (Y/N)?");
  var charSpecial = prompt(promptText + " Include special characters (Y/N)?");

  // Eliminate undesired character ranges
  if (charLowercase === "N") {
    charRangeLowercase = "";
  } else {
    charRangeLowercase = "abcdefghijklmnopqrstuvwxyz";
  }

  if (charUppercase === "N") {
    charRangeUppercase = "";
  } else {
    charRangeUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (charNumeric === "N") {
    charRangeNumeric = "";
  } else {
   charRangeNumeric = "0123456789";
  }

  if (charSpecial === "N") {
    charRangeSpecial = "";
  } else {
    charRangeSpecial = "~!@#$%^&*()"
  }

  // Requirement to choose at least one character range
  if (charLowercase === "N" && charUppercase === "N" && charNumeric === "N" && charSpecial === "N") {
    alert("You must choose at least one character type for your password. Please choose again.");
    return commencePassGen();
  }

  // Prompt to force compliant choice
  do { 
    num = +prompt("Choose password length (must be between 8 and 128 characters long)");
  } while (isNaN(num) || num < 8 || num > 128);

  // Instruction to click
  alert("Please click the 'Generate Password' button now.");

}

commencePassGen();

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
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)