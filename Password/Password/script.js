const passwordBox = document.getElementById("password");

const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxy";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const allchars = upperCase + lowerCase + number + symbol;

const genbtn = document.getElementById("btn");
genbtn.addEventListener("click", createpassword);

const copyimg = document.getElementById("imcopy");
copyimg.addEventListener("click", copy);

function createpassword(){
    let password="";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];

    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];

    password += number[Math.floor(Math.random() * number.length)];

    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allchars[Math.floor(Math.random() * allchars.length)];

    }

    passwordBox.value = password;

}

function copy(){
    passwordBox.select();
    document.execCommand("copy");
    // navigator.clipboard.writeText(passwordBox.value)
    // .then(function() {
    //   console.log("Text copied to clipboard");
    // })
    // .catch(function(err) {
    //   console.error("Failed to copy: ", err);
    // });
}