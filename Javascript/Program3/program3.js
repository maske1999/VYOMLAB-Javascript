/*
description: Srting operations
1)find occurance of substring
2) find length of string
3) concatenate two string
4) reverse the string
*/
//take the choise from user 
var choice=parseInt(window.prompt("Enter choise"));
var count=0;
switch(choice){
  case 1:var String=window.prompt("Enter the parent string");
         var sub=window.prompt("Enter the sub string to find occurance");
         document.write(String+"  IN THE  "+sub+" occurance "+CountOccurance(String,sub));
         break;
  case 2:var String=window.prompt("Enter the string");
          document.write("Length of String  "+String+" is="+LengthOfString(String));
          break;
  case 3:var String1=window.prompt("Enter the Frist string");
         var String2=window.prompt("Enter the Second string");
         document.write("Joined String "+StringConcatinate(String1,String2));
         break;
  case 4:var String=window.prompt("Enter the string");
         
         document.write(String+"  reverse= "+ReverseString(String));
  default:
      document.write("Enter valid choice");

}
//define concatination function
function StringConcatinate(String1,String2){
    return String1.concat(String2);
}
//define find length of string function
function LengthOfString(String)
{
    return String.length;
}
//define reverse string function

function ReverseString(String)
{   var reverseString="";
    for(var x=String.length-1;x>=0;x--){
        reverseString+=String.charAt(x);
    }
    return reverseString;
}
//define function to count occurance of substring
function CountOccurance(String,sub)
{
    let len=sub.length;
    for(var m=0;m<String.length;m++)
    {
        let temp=String.substr(m,len);
        if(sub===temp)
            {
                count++;
            }
    }
    return count;
}