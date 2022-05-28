const generateButton = document.getElementById("generate");

function askPasswordLength (){
 // ask the user how long will the password be
const passwordLength = Number(prompt("How long is the password? Length must between 8 and 128"));
console.log(passwordLength);


// can only accept numeric value
// only in the range of 8 -128
// if user type in not numeric value ask question again
// NaN
const passwordLenghtIsNan = isNaN(passwordLength);
// 0
const userDidntEnterAnything = passwordLength ===0;
// <8 or >128
const passwordLengthIsOutOfRange = passwordLength < 8 || passwordLength > 128;
 
 if(passwordLenghtIsNan || userDidntEnterAnything ||passwordLengthIsOutOfRange){
  return askPasswordLength();
 }
 return passwordLength;
}
function askCriteria(){
  // ask do you want lowercase
const lowercaseWanted = confirm("Do you want lowercase?");
// ask do you want uppercase
const uppercaseWanted = confirm("Do you want uppercase?");
// ask do you want symbols
const symbolWanted = confirm("Do you want symbol?");
// ask do you want numbers
const numberWanted = confirm("Do you want number?");
// user needs to select at least one criteria
if(lowercaseWanted || uppercaseWanted || symbolWanted || numberWanted);
const answers = {
}
return{
  lowercaseWanted: lowercaseWanted,
  uppercaseWanted: uppercaseWanted,
  symbolWanted: symbolWanted,
  numberWanted: numberWanted,
};

// if user didnt do that ask question again
return askCriteria();
}

// when the user click on the generate password button
generateButton.addEventListener('click', function(event){

  const passwordLength = askPasswordLength();


const criteria = askCriteria();
console.log (criteria);
// generate the password
// build the characterset
let characterset = "";
if(criteria.lowercaseWanted){
  characterset = characterset + "abcdefghijklmnopqrstuvwxyz";
}
if(criteria.uppercaseWanted){
  characterset = characterset + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
if(criteria.symbolWanted){
  characterset = characterset + "!@#$%^&*";
}
if(criteria.numberWanted){
  characterset = characterset + "0123456789";
}
// generate the random password based on characterset

let password ="";
// loop for passwordLength times,
for (let index = 0; index < passwordLength; index++){

// for each iteration
// we want to generate a random character based on characterset
const randomCharacter = characterset[ Math.floor(Math.random() * characterset.length)]
// add this random character to password
password += randomCharacter;
}

console.log(password);
// show the generated password on the textarea
document.getElementById('password').value = password;
});




