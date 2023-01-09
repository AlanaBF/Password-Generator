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

// Function to give user options for password
function getPasswordOptions(lowerCasedCharacters, upperCasedCharacters, numericCharacters, specialCharacters) {
  return {
    lower: lowerCasedCharacters,
    upper: upperCasedCharacters,
    number: numericCharacters,
    special: specialCharacters
  }
};

// Function for getting a random element from an array
function getRandom(arr) {
return arr[Math.floor(Math.random()*arr.length)];

};
var arr = [lowerCasedCharacters, upperCasedCharacters, numericCharacters, specialCharacters]

// Function to generate password with user input
function generatePassword() {
  //code goes here 

  var getPasswordChoices = "";

  alert("Would you like to create a random password?");
  // Need to prompt user for password criteria
  //Created an infinite for loop to add a break after an incorrect number entry
  for (let i = 101; i > 100; i++) {
    // Length of password at least 10 caracters but no more than 64
    var userInput = prompt("How many characters would you like your password to have? Between 10 and 64 inclusive!");
    var userNumber = parseInt(userInput);
    if (userNumber >= 10 && userNumber <= 64) {
      alert("You successfully entered the number of characters you would like");
      break
    }
    else { alert("Number entered must be between 10 and 64 characters..."); }
  };

  // Character types: uppercase, lowercase, numeric, special characters
  alert("Now select at least one of the following selection of characters")
//ask user if they want to include lower case characters
  var getLowerCasedCharacters = confirm("Click ok to include Lowercase Characters or cancel to exclude them.");
  if (getLowerCasedCharacters) {
    getPasswordChoices = getPasswordChoices + getPasswordOptions.lowerCasedCharacters;
  };

//ask user if they want to include upper case characters
  var getUpperCasedCharacters = confirm("Click ok to include Uppercase Characters or cancel to exclude them.");
  if (getUpperCasedCharacters) {
    getPasswordChoices = getPasswordChoices + getPasswordOptions.upperCasedCharacters;
  };

//ask user if they want to include numeric characters
  var getNumericCharacters = confirm("Click ok to include Numeric Characters or cancel to exclude them.");
  if (getNumericCharacters) {
    getPasswordChoices = getPasswordChoices + getPasswordOptions.numericCharacters;
  };
 
//ask user if they want to include special characters
  var getSpecialCharacters = confirm("Click ok to include Special Characters or cancel to exclude them.");
  if (getSpecialCharacters) {
    getPasswordChoices = getPasswordChoices + getPasswordOptions.specialCharacters;
  };
 

//make sure user selects at least one option
if (getLowerCasedCharacters !=true && getUpperCasedCharacters !=true && getNumericCharacters !=true && getSpecialCharacters !=true) {
  alert("You need to select at least one option, please try again!");
  return generatePassword();
};

  // validate each input

 var randomPassword = "";

  for (var i = 0; i < userNumber; i++) {

  randomPassword += getPasswordChoices[Math.floor(Math.random() * getPasswordChoices.length)];
  }
return randomPassword;
  }



// Don't need to touch these as they already work!
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
