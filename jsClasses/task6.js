let password = 'fineboy123'
let confirmPassword = 'finebg123';
// Confirm that they are of the same characters.

function checkPassword(){
    if (password.length !== confirmPassword.length){
        console.log("Passwords do not match:length error");
        return false

};
for (let i = 0; i < password.length; i++){
    if(password[i] !== confirmPassword[i]){
        console.log("passwords do not match: char error")
        return false;
    };
};
console.log("Password correct")

}

checkPassword();


function isAlphaNum(char){
    return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')
}
function checkPalindrome(string){
    let str = "";
    for (let ch of string){
       if (isAlphaNum(ch)){
          str = str + ch.toLowerCase();
       }
    };
    console.log(str);
    let newStr = str.split('').reverse().join('');
    console.log(newStr)
    console.log(str === newStr)
    return str === newStr
    
};

let str2 = 'dede';
let str3 = "Was it a car or a cat I saw"
checkPalindrome(str2);
checkPalindrome(str3);