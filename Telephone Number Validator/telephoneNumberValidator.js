

function telephoneCheck(str) {
    var format = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;
    if (str.match(format)) {        //format.test(str)  could have also been used in place of this statement
        return true;
    }
    else {
        return false;
    }
}

console.log(telephoneCheck("555)-555-5555"));

/*
Test cases: 

"1 555-555-5555" - should return true
"1 (555) 555-5555" - should return true
"(555)555-5555" - should return true
"555-5555" - should return false
"5555555" - should return false
"1 555)555-5555" - should return false
"123**&!!asdf#" - should return false
*/
