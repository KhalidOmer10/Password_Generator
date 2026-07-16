const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password1Text = document.getElementById("passwordBox1")
let password2Text = document.getElementById("passwordBox2")
let msg = document.getElementById("copyMsg");
let randomNumber = 0
let hiddenText = document.getElementById("hint")
let passwordInputEl = document.getElementById("password-input")
let lengthText = document.getElementById("length-text")
let radioEl = document.getElementById("radio-els")
let generateBtn2 = document.getElementById("generate-btn2")
let optionsText = document.getElementById("options-text")
let userInput = document.getElementById("password-input")
let numbersList = []
let symbolsList = []
let lettersList = []
lengthText.style.display = "none";
passwordInputEl.style.display = "none";
radioEl.style.display = "none";
generateBtn2.style.display = "none";
optionsText.style.display = "none";
function passwordGenerator () {
    hiddenText.textContent = "Click the box to copy:"
    let password = ""
    for (let i = 0; i < 15; i++) {
        randomNumber = Math.floor(Math.random() * 91) +1
        password += characters[randomNumber]
    }
    return password
}

function getPassword () {
    password1Text.value = passwordGenerator ()
    password2Text.value = passwordGenerator ()
}

function copyPassword1() {
   password1Text.addEventListener ("click" , () => {
    
    // copy text
    password1Text.setSelectionRange(0 , 99999);
    password1Text.select();
    document.execCommand("copy");
    
    // show message
    msg.style.opacity = "1";
    
    // hide after 1 second
    setTimeout(() => {
        msg.style.opacity = "0";
    }, 1000);
   });
}

function copyPassword2() {
   password2Text.addEventListener ("click" , () => {
    
    // copy text
    password2Text.setSelectionRange(0 , 99999);
    password2Text.select();
    document.execCommand("copy");
    
    // show message
    msg.style.opacity = "1";
    
    // hide after 1 second
    setTimeout(() => {
        msg.style.opacity = "0";
    }, 1000);
   });
}

function customizedPassword () {
    document.getElementById("generate-btn").style.display = "none";
    document.getElementById("tailor-btn").style.display = "none";
    passwordInputEl.style.display = "block";
    lengthText.style.display = "block";
    radioEl.style.display = "block";
    generateBtn2.style.display = "block";
    optionsText.style.display = "block";
    password1Text.value = ""
    password2Text.value = ""
}

function fillingNumbersList () {
    for(let i = 0; i < characters.length; i++){
        if (/[0-9]/.test(characters[i])){
            numbersList.push(characters[i])
        }
    }
    
}

function fillingSymbolsList () {
    for(let i = 0; i < characters.length; i++){
        if (!/[a-zA-Z0-9]/.test(characters[i])){
            symbolsList.push(characters[i])
        }
    }
    
}

function fillingLettersList () {
    for(let i = 0; i < characters.length; i++){
        if (/[a-zA-Z]/.test(characters[i])){
            lettersList.push(characters[i])
        }
    }
    
}

function tailoredPassword () {
    let password = ""
    let newlength = userInput.value;
    let selected = document.querySelector('input[name = "option"]:checked')
    if (/[0-9]/.test(newlength)){
        if ( newlength >= 15 && newlength <= 30) {
            userInput.style.color = "#4ADF86";
            hiddenText.textContent = "Click the box to copy:"
            if (selected.value === "numbers") {
                fillingNumbersList ()
                for (let i = 0;i < newlength; i++) {
                    randomNumber = Math.floor(Math.random() * numbersList.length) 
                    password += numbersList[randomNumber]
                }
            }
            else if (selected.value === "symbols") {
                fillingSymbolsList ()
                for (let i = 0;i < newlength; i++) {
                    randomNumber = Math.floor(Math.random() * symbolsList.length) 
                    password += symbolsList[randomNumber]
                }
            }
            else if ( selected.value === "characters") {
                fillingLettersList ()
                for (let i = 0;i < newlength; i++) {
                    randomNumber = Math.floor(Math.random() * lettersList.length) 
                    password += lettersList[randomNumber]
                }
            }
            else {
                for (let i = 0; i < newlength; i++) {
                    randomNumber = Math.floor(Math.random() * characters.length)
                    password += characters[randomNumber]
                    
                }
            }
        }
        else {
            userInput.value ="Min: 15, Max: 30";
            userInput.style.color = "red";
            hiddenText.textContent = ""
        }
    }
     else {
            userInput.value ="Enter numbers only";
            userInput.style.color = "red";
            hiddenText.textContent = ""
        }
    return password
}

function getTailoredPassword () {
    password1Text.value = tailoredPassword ()
    password2Text.value = tailoredPassword ()
}

