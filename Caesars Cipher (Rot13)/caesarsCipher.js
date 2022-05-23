

function rot13(str) {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; //defining the traditional alphabet 
    const rot = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";       //defining the rot13 alphabet (alphabet + 13)
    var result = "";                                                        //declaring the result variable as an empty string

    for (let i=0; i<str.length; i++) {                                  //looping through the given str
        if (str[i] == '!' || str[i] == '?' || str[i] == '.') {          //this if statement ignores !, ?, . and passes it on to the result string
            result += str[i];
        }
        else if (str[i] == " ") {                                       // this if statement ignores spaces in the string
            result += " ";
        }
        else {                                                          // this if statement converts the letter from alphabet to rot
            var letter = str[i];                                        // this sets var letter equal to the current letter in the given str
            result += rot[alphabet.indexOf(letter)];                    // this line finds the index of the given letter in the alphabet string and converts it to the rot string letter
        }
    }
    return result;
}

console.log(rot13("Test case here")); //Enter test cases here

//Some example test cases:
// "SERR PBQR PNZC"
// "SERR CVMMN!"
// "SERR YBIR?"
// "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."