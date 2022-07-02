/*
Description:Program for basic functionality of calculator.
*/

var FristNumber=parseInt(window.prompt("Enter the Frist Number"));     //getting input the two number from user  
var SecondNumber=parseInt(window.prompt("Enter the Second Number"));
var result=0;
var choise=parseInt(window.prompt("Enter choise"))

//using switch case to choose operation
switch(choise)
{
    case 1:result=Addition(FristNumber,SecondNumber);    //invoking or calling the function.
           document.write("Addition="+result);
            break;
    case 2:result=Substraction(FristNumber,SecondNumber);
           document.write("Substraction="+result);
           break;
    case 3:result=Multiplication(FristNumber,SecondNumber);
           document.write("Multiplication"+result);
           break;
    case 4:result=Division(FristNumber,SecondNumber);
           document.write("Division"+result);
            break;
    case 5:result=Remainder(FristNumber,SecondNumber);
           document.write("Remainder="+result);
           break;
    default:
    document.write("Enter Vaild Choise")
}            

//define addition function 
function Addition(Frist,Second){
    return Frist + Second;                    //return the  calculated result
}

//define substraction function 
function Substraction(Frist,Second){
    return Frist - Second;
}

//define multiplication function
function Multiplication(Frist,Second){
    return Frist * Second;
}

//define division function
function Division(Frist,Second){
    return Frist / Second;
}

//define remainder function
function Remainder(Frist,Second){
    return Frist % Second;
}
