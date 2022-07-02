/*
Description :Programe to accepts a string as a parameter and converts the first
letter of each word of the string in upper case.
*/

var String=window.prompt("Enter the String")        //taking input string from user

console.log(FristUpperCaseLatter(String));

//define fuction 
function FristUpperCaseLatter(String){
    var Word=String.split(" ");           //create arry of word from the string spliting by space ' '
   for(let w in Word){
    Word[w] = Word[w].charAt(0).toUpperCase() + Word[w].substr(1);
     
    }
    return Word.join(" ");
}