//password length 
var characterLength = 10;
//Array to store possible combinations when password is created
var choiceChar = [];
//character arrays for user options
var lowercaseChar= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];
var specialChar = ['@','%','+','^','?',':',')','(','}','{',']','[','~','-','_','.','<','>'];
var numericChar= ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  // Returns password if true or false.   
  var confirmPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if(confirmPrompts){
    var confirmPassword = generatePassword();
    passwordText.value = confirmPassword;
  } 
  //If false bring back empty string.
  else{ 
    passwordText.value = "";
  }
  
}

//Password generates only when there are correct prompts. 
function generatePassword(){
  // Empty string
  var password = "";
  // Create for loop
  for (var i = 0; i < characterLength; i++) {
        var randomValue = Math.floor(Math.random() * choiceChar.length)
        password = password + choiceChar[randomValue];
  }
  // Responds back to write password function.
  return password;
  
}
// Ask user series of questions to create password.
function getPrompts (){
    //Reset choice array when starting new prompt or refreshed.
    choiceChar = [];

    //Parse string to number
    characterLength = parseInt(prompt("How many characters would you like the password to include? 10-128 characters"));
    
    //Check input is integer and character length stays within requirements, if not results come back as false.
    if (isNaN(characterLength) || characterLength < 10 || characterLength > 128) {
     alert("Character length has to be in numeric form between 10-128. Try again.");
     // responds with boolean 
     return false;
  }
    //If true statements then answers will create a concatenated arrary save within var choiceChar.
    if (confirm("Would you like your password to include lowercase letters?")){
        choiceChar = choiceChar.concat(lowercaseChar);
    }
  
    if (confirm("Would you like your password to include uppercase letters?")){
        choiceChar = choiceChar.concat(uppercaseChar);
    }

    if (confirm("Would you like your password to include special characers?")){
          choiceChar = choiceChar.concat(specialChar);
    }
    
    if (confirm("Would you like your password to include numbers?")){
          choiceChar = choiceChar.concat(numericChar);
    }
    return true;
  }







