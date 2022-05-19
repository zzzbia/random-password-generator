// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment code here

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeric = "0123456789";
const special = "!@#$%^&*_-+=";

const generatePassword = () => {
	let usableChars = "";

	const passwordCharLength = prompt(
		"Please enter how many characters you would like (min 8, max 128):",
		8
	);

	if (
		isNaN(passwordCharLength) ||
		passwordCharLength < 8 ||
		passwordCharLength > 128
	) {
		alert("Please enter a valid number between 8 and 128");
		return;
	}
	const useLowerCase = confirm("Would you like to use Lowercase characters?");

	if (useLowerCase) {
		usableChars += lowercase;
	}

	const useUpperCase = confirm("Would you like to use Uppercase characters?");

	if (useUpperCase) {
		usableChars += uppercase;
	}
	const useNumeric = confirm("Would you like to use numeric characters?");

	if (useNumeric) {
		usableChars += numeric;
	}
	const useSpecialCharacters = confirm(
		"Would you like to use special characters?"
	);

	if (useSpecialCharacters) {
		usableChars += special;
	}
	console.log(usableChars);
};

// const useLowerCase = confirm("Would you like to use Lowercase characters?");
// const useUpperCase = confirm("Would you like to use Uppercase characters?");
// const useSpecialCharacters = confirm("Would you like to use special characters?");
//

// const passwordLength = 8;
// const useUpperCase = true;
// const useLowerCase = false;
// const useSpecialCharacters = false;

// new Array(passwordLength).fill("").map((_ , i) => {

// }).join('');

//     console.log(`user wants ${passwordCharLength}`)
//     console.log('hi')
// }

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
