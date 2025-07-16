function handlePasswordGeneration(){
    const passwordLength = Number(document.getElementById(`passwordLength`).value);
    const includeLowercase = document.getElementById(`includeLowercase`).checked;
    const includeUppercase = document.getElementById(`includeUppercase`).checked;
    const includeNumbers = document.getElementById(`includeNumbers`).checked;
    const includeSymbols = document.getElementById(`includeSymbols`).checked;

    if(includeLowercase === false && includeUppercase === false && includeNumbers === false && includeSymbols === false) {
        document.getElementById(`displayPassword`).textContent = `Please select at least one property from above.`
        return;
    }

    const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
    document.getElementById(`displayPassword`).textContent = password;
}


function generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "1234567890";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?/`~";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : ``;
    allowedChars += includeUppercase ? uppercaseChars : ``;
    allowedChars += includeNumbers ? numberChars : ``;
    allowedChars += includeSymbols ? symbolChars : ``;
    
    for(let i = 0; i < passwordLength; i++) {
        let randomChar = allowedChars[Math.floor(Math.random() * allowedChars.length)];
        password += randomChar;
    }

    return password;
}




