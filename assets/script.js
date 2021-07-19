//password character options
var upperCase = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
];

var lowerCase = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","z"
];
var speciChara = [
    "!", "#", "$", "%", "&", "*", "+", "?", "@", "~"
]

var numeChara = [
    "0","1","2","3","4","5","6","7","8","9"
]


// Password options
function passOptions() {
    // length of password user choice 8-128
    var length = (
        prompt('How long should the new password be? *MIN 8 - MAX 128*')
        );
     // insuring to stay above 8 
    if (length < 8) {
        alert('Must be at least 8 characters long!');
        return;
    }
     // insuring to stay under 128
    if (length > 128) {
        alert('Must be less than 129 characters long!');
        return;
    }
     // Include Upper Case Letters confirmation
    var includeUpper = confirm(
        'OK to include upper case letters. CANCEL to skip.'
    );
    // Include Lower Case Letters confirmation
    var includeLower = confirm(
        'OK to include lower case letters. CANCEL to skip.'
    );
    //  Include Numerical Characters confirmation
    var includeNumerical = confirm(
        'OK to include numbers. CANCEL to skip.'
    );
    // Include Special Characters confirmation
    var includeSpecial = confirm(
        'OK to include special characters. CANCEL to skip. '
    );
                        
    // Error alert message if no character types are confirmed
    if (
    includeUpper === false &&
    includeLower === false &&
    includeNumerical === false &&
    includeSpecial === false
    ) {
        alert('Must include ONE character type!');
        return;
    }
                            
 // user's choice
    var userChoice = {
        length: length,
        includeUpper: includeUpper,
        includeLower: includeLower,
        includeNumerical: includeNumerical,
        includeSpecial: includeSpecial,
    };
        return userChoice;
    }
                        
// Random selection
    function pickRandom(arr) {
        var randIndex = Math.floor(Math.random() * arr.length);
        var randElement = arr[randIndex];
                            
        return randElement;
     }
                        
 // Creating new password
function createNewpass() {
    var choices =  passOptions();
     // storing passwords
    var result = [];
    //        
    var chosenCharacters = [];
    // Insuring the types of character chosen will be used
    var includedCharacters = [];
    // Check if an options object exists, if not exit the function
    if (!choices) return null;
    
// checking choices for uppercase letters
if (choices.includeUpper) {
    chosenCharacters = chosenCharacters.concat(upperCase);
     includedCharacters.push(pickRandom(upperCase));
 }
// checking choices for lowercase letters
if (choices.includeLower) {
   chosenCharacters = chosenCharacters.concat(lowerCase);
    includedCharacters.push(pickRandom(lowerCase));
}
 // checking choices for numerical characters
if (choices.includeNumerical) {
    chosenCharacters = chosenCharacters.concat(numeChara);
    includedCharacters.push(pickRandom(numeChara));
                                
 }
 // checking choices for special characters
if (choices.includeSpecial) {
    chosenCharacters = chosenCharacters.concat(speciChara);
    includedCharacters.push(pickRandom(speciChara));
 }
                                                
// random selection
for (var i = 0; i < choices.length; i++) {
    var chosenCharacters = pickRandom(chosenCharacters);
                                
    result.push(chosenCharacters);
}
                            
// At least one of each special character chosen
for (var i = 0; i < includedCharacters.length; i++) {
    result[i] = includedCharacters[i];
 }
                            
// creates response in string format
    return result.join('');
}
                        
// Push information to button
var generateBtn = document.querySelector('#generate');
 // Show new password
function showPassword() {
    var show= createNewpass();
    var showText = document.querySelector('#password');
                            
    showText.value = show;
}                     
 // CLICK effect
generateBtn.addEventListener('click', showPassword);