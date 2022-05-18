
function convertToRoman(num) {
    const key = [   
        ["M", 1000],   
        ["CM", 900], 
        ["D", 500], 
        ["CD", 400], 
        ["C", 100], 
        ["XC", 90], 
        ["L", 50], 
        ["XL", 40], 
        ["X", 10], 
        ["IX", 9], 
        ["V", 5], 
        ["IV", 4], 
        ["I", 1]
    ];
    var num; 
    var i;
    var j;
    var output = "";

    for (i=0, j=1; i<key.length; i++) {  
        while (num >= key[i][j]) {       
            output += key[i][0];        
            num -= key[i][j];    
        }
    }
    return output;
}


console.log(convertToRoman(num)); //Replace "num" with any number between 1 and 3999

