function palindrome(str) {

    var outArray = [];
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    var splitStr = str.split("");    
    var reverseStr = str.split("").reverse();

    for (let i=0; i<splitStr.length; i++) {
        if (splitStr[i] == reverseStr[i]) {
            outArray.push(0);
        }
        else {
            outArray.push(1);
        }
    }
        
    let sum = outArray.reduce(function(a,b) {
        return a+b;
    }, 0);
       
    if (sum != 0) {
        return false;
    }
    else {
        return true;
    }
    }
    
console.log(palindrome("eye")); //Enter any string in place of "eye"

    //Examples:
    // "eye" - should return true
    // "not a palindrome" - should return false
    // "A man, a plan, a canal. Panama" - should return true
    // "_eye" - should return true
    // "1 eye for of 1 eye." - should return false



