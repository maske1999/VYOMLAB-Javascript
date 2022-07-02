/**
 * description:programe to compute sum of  the ecach element of array with another array
 */

//creating two empty array
var Array1=[];
var Array2=[];
var len=parseInt(window.prompt("Enter length of array"));//take length of array

//getting element in first array
for(let x=0;x<len;x++){Array1[x]=parseInt(window.prompt("Enter the Elements of frist array"));}

//getting element in second array
for(let x=0;x<len;x++){Array2[x]=parseInt(window.prompt("Enter the Elements of second array"));}

//printing two array before computing
document.write("first array "+Array1 +"<br>");
document.write("Second array "+Array2+"<br>");

//computing two array in one array
for(let x=0;x<len;x++)
{
    Array1[x]=Array1[x]+Array2[x];
}
//print array after computing
document.write("After Compting sum "+Array1)