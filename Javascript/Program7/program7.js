/**
 * descripsiton:shift the element of the array left by one position
 */
const array=new Array();
let len=parseInt(window.prompt("Enter the length of array"));
//getting array element
for(let x=0;x<len;x++){
    array[x]=parseInt(window.prompt("Enter element of array"));
}
//printing the array
document.write("Array before shifting "+array+"</br>");
document.write("Array after shifting "+ShiftLeftArray(array));
//define function shift left array
function ShiftLeftArray(array)
{
    let temp=array[0];
    for(let x=0;x<len-1;x++)
    {
        array[x]=array[x+1];
    }
    array[len-1]=temp;
    return array;
}