const generatePassword = () => {
  const passwordCharLength = prompt("Please enter how many characters you would like (min 8, max 128):", 8);
  if(isNaN(passwordCharLength) || passwordCharLength < 8 || passwordCharLength > 128) {
    alert('Please enter a valid number between 8 and 128');
    return;
  }
  // const useLowerCase = confirm("Would you like to use Lowercase characters?");
  // const useUpperCase = confirm("Would you like to use Uppercase characters?");
  // const useSpecialCharacters = confirm("Would you like to use special characters?");
  // const useNumeric = confirm("Would you like to use numeric characters?");



  const passwordLength = 8;
  const useUpperCase = true;
  const useLowerCase = false;
  const useSpecialCharacters = false;
  

  
  


  // new Array(passwordLength).fill("").map((_ , i) => {

  // }).join('');
  
  console.log(`user wants ${passwordCharLength}`)
  console.log('hi')
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
