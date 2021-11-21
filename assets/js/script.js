// Assignment code here
var charRangeLowercase = "abcdefghijklmnopqrstuvwxyz";
var charRangeUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charRangeNumeric = "0123456789";
var charRangeSpecial = "~!@#$%^&*()";
var num = prompt("Choose password length (must be between 8 and 128 characters long)");

var passwordLength = function() {
    if (num >= 8 && num <= 128) {}
        else {
        alert("Please enter a valid response.");
        passwordLength();
    }
}
passwordLength();

var passwordCharacters = function() {
    var charLowercase = prompt("Your password be a combination of lowercase, uppercase, numeric and/or special characters and must contain at least one of these character types. Include lower case characters (Y/N)?");
    var charUppercase = prompt("Your password be a combination of lowercase, uppercase, numeric and/or special characters and must contain at least one of these character types. Include upper case characters (Y/N)?");
    var charNumeric = prompt("Your password be a combination of lowercase, uppercase, numeric and/or special characters and must contain at least one of these character types. Include numeric characters (Y/N)?");
    var charSpecial = prompt("Your password be a combination of lowercase, uppercase, numeric and/or special characters and must contain at least one of these character types. Include special characters (Y/N)?");

    if (charLowercase === "N" && charUppercase === "N" && charNumeric === "N" && charSpecial === "N") {
        alert("You must choose at least one character type for your password. Please choose again.");
        passwordCharacters();
    }
}
passwordCharacters();

function makeid(length) {
    var result ="";
    var characters = charRangeLowercase + charRangeUppercase + charRangeNumeric + charRangeSpecial;
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

console.log(makeid(num));


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