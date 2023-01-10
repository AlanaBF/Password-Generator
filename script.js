// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
// variable for the users chosen number of characters
var characterLength = 0;
// empty array for the password options to be pushed to
var possibleCharacters = [];

// Function to give user options for password
function getPasswordOptions() {
  //array here so that the choices always start again when refreshed
  possibleCharacters = [];
  // User is prompted for the number of characters they would like
  // ParseInt turns it to a number
  characterLength = parseInt(prompt("How many characters would you like your password to be? (between 10 and 64 characters)"));
  // if the number returned is a word (not a digit) OR it's less than 10 OR it's greater than 64, user is prompted to try again
  if (isNaN(characterLength) || characterLength < 10 || characterLength > 64) {
    alert("Character has to be a number and between 10 and 64 digits. Please try again.");
    return false;
  }
  // User confirms character choices and this gets pushed into the possibleCharacters array
  if (confirm("Would you like lowercase characters in your password")) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
  }
  if (confirm("Would you like uppercase characters in your password")) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
  }
  if (confirm("Would you like numeric characters in your password")) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
  }
  if (confirm("Would you like special characters in your password")) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }
  return true;
};
// function for generating the password using the users possible character choices
function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    // a random selection of characters from the total length of characters selcted by the users is chosen and returned to the password
    var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    password = password + possibleCharacters[randomIndex];
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  // If users choices meet the criteria then a new password is generated and written to the password generator
  var correctOptions = getPasswordOptions();
  if (correctOptions) {
    var newPassword = generatePassword();

    //var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = newPassword;
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);