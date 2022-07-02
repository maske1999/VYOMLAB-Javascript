/**
 * description: programe to check if the string is present or not
 */
var String =window.prompt("Enter the String");
var SearchString=window.prompt("Enter the string to find");
if(String.indexOf(SearchString)>=0){
    document.write("String found At "+String.indexOf(SearchString));
}
else{
    document.write("Not found"+String.indexOf(SearchString));
}