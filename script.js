//Setting strings of possible variable values
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeric = "0123456789";
const special = "!@#$%^&*_-+=";

const generatePassword = () => {
	// usableChars is an empty string in which characters from the above variables will be passed through
	let usableChars = "";

	const passwordCharLength = prompt(
		"Please enter how many characters you would like your password to be, it must be between 8-128 characters long (min 8, max 128):",
		8
	);
	/*if the password length is not a number OR 
	password character length is less than 8 OR 
	Password character length is more than 128 characters long, 
	send an alert and exit out of the function "generatePassword" */
	if (
		isNaN(passwordCharLength) ||
		passwordCharLength < 8 ||
		passwordCharLength > 128
	) {
		alert("Please enter a valid number between 8 and 128");
		return;
	}
	/*otherwise, continue and confirm if user would like to use lowercase characters, 
	 if yes then "+=" is used as concatenation/additon to set usable chars as now lowercase */
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
	//setting an empty array called "passwordArr"
	let passwordArr = [];
	// putting every character from string into an array with split method
	let usableCharsArr = usableChars.split("");

	if (usableCharsArr.length === 0) {
		alert(
			"Please select atleast one type of character (Lowercase, Uppercase, Numeric or Special characters.)"
		);
	}

	for (i = 0; i < passwordCharLength; i++) {
		const randomKey = Math.floor(Math.random() * usableCharsArr.length);
		passwordArr.push(usableCharsArr[randomKey]);
	}

	const password = passwordArr.join("");
	//
	//Logging total Password length
	//console.log("password length:" + password.length);
	return password;

	// When testing what characters are available, consolelog usableChars
	//console.log(usableChars);
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	const password = generatePassword();
	if (password) {
		const passwordText = document.querySelector("#password");
		passwordText.value = password;
	}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
