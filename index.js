

const inputNumber = document.getElementById("txt1");
const outputWords =document.getElementById("output");


function toWords(){
    outputWords.innerHTML = convertNumberToWords(inputNumber.value);
}


const numberToWords = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety"
}

function convertNumberToWords(number){

    //if the number already exists in the object dict, just return the number
    if(number in numberToWords){
        return numberToWords[number];
    }

    let words = "";

    if(number >= 1000000){

        words = words + convertNumberToWords(Math.trunc(number / 1000000)) + " million, ";
        number = number % 1000000;
    }

    //check for the place value of a thousand and concantenate
    if(number >= 1000){

        words = words + convertNumberToWords(Math.trunc(number / 1000)) + " thousand,";
        number = number % 1000;
    }

    //check if the number is greater than 100 and use the math.round to return the place value of the number
    if(number >= 100){

        words = words + convertNumberToWords(Math.trunc(number / 100)) + " Hundred";
        number = number % 100;

    }

    //check if the number is in tens(place value)
    if(number >= 20){
        if( words !== "")
        words += " and ";
    
    //handle tens
        words = words + convertNumberToWords(Math.trunc(number / 10) * 10);
        number = number % 10;

       
    // //handling the last digit
        if(number%10 > 0){
            words += "-" + numberToWords[number % 10];
        }
    }else if(number < 20 && number !== 0){
        words += " and " + numberToWords[number];
    }

    return words;

}

// console.log("testing");
console.log(convertNumberToWords(1019));

