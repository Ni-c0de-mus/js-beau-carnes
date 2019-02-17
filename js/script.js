console.log('hello');

var myName = "Nicolas";
myNumber = 8;
console.log(myName);

var a = 5;
var b = 10;
var c = "I am a String!";

console.log(c);

var a = 9;

var a;

var b = 2;

a = 7

console.log(a);

var StudlyCapvar;
var properCamelCase;
var titleCaseOver = 9000;

studlyCapVar = 10;
properCamelCase = 'A string';
titleCaseOver = 9000;

console.log(properCamelCase);


var sum = 10 + 10;

console.log(sum);

var difference = 43 - 6;

console.log(difference);

var product = 8 * 10;

console.log(product);

var quotient = 77 / 33;

console.log(quotient);

var myVar = 87;

myVar = myVar + 1;

console.log(myVar);

myVar++

console.log(myVar);

myVar = 77;

myVar--;

console.log(myVar);

var remainder = 11 % 3;

console.log(remainder);

/* var a = 3;
var b = 17;
var c = 12;

a += 12;
b += 9;
c += 7; 

a = a - 6;
b = b - 15;
c = c - 1;

a -= 6;
b -=  15;
c -= 1; */

var myFirstName = "Nic";
var myLastName = "Alexander";

var myStr = "I am a \"double quoted\" string inside \"double quotes\".";

/*****
CODE OUTPUT
\' single quote
\"" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed

*/

var myStr = "First line\n\t\\SecondLine\nThirdline";

var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';


var myStr = "This is the start. " + "This is the end.";

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

console.log(myStr);

var myName = "Nicolas";
var myStr = "My name is " + myName + " and I am well!";

console.log(myStr);

var someAdjective = "fun!" ;
var myStr = "Learning to code is "

myStr += someAdjective;


console.log(myStr);

// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line.

lastNameLength = lastName.length;


console.log(lastNameLength);

firstLetterOfLastName = lastName[0];

console.log(firstLetterOfLastName);

lastLetterOfLastName = lastName[lastName.length - 1];

console.log(lastLetterOfLastName);

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {

var result = " ";

result += "The "  + myAdjective + " " + myNoun + " " + myVerb + " " + "to the store " + myAdverb

return result;

}

console.log(wordBlanks("dog", "big", "ran", "quickly"));