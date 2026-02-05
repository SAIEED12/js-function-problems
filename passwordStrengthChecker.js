/* Function name: checkPassword(password)
Rules:
Length must be at least 8


Must contain at least 1 number


Must contain at least 1 uppercase letter


Must not contain spaces


Test case 1
Input:  "helloWorld"
Output:
{ valid: false, reasons: ["missing number"] }

Test case 2
Input:  "Hello123"
Output: { valid: true, reasons: [] } */

function checkPassword(password){
    let reasons = [];
    let length = password.length;
    let upperCase = false;
    let hasNumber = false;
    let hasSpace = password.includes(" ");
    for(let i = 0; i<length; i++){
        let character = password[i];
        if(character>="0" && character<="9"){
            hasNumber = true;
        }
        if(character>="A" && character<="Z"){
            upperCase = true;
        }
    }
    if(!hasNumber){
        reasons.push("Missing Number");
    }
    if(!upperCase){
        reasons.push("Missing Upper Case");
    }
    if(hasSpace){
        reasons.push("No Space Allowed");
    }

    let isValid;
    if(reasons.length === 0){
        isValid = true;
    }
    else{
        isValid = false;
    }

    return {
        valid: isValid,
        reasons,
    };
}

console.log(checkPassword("HELLO123"));
console.log(checkPassword("HELLO "));