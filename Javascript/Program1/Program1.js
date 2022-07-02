/*
Description: program which compute, result of student and display grade (grades:
            distinction,first class,second class, pass class fail).
*/

 const subject=["Math","Science","History","Hindi"] //crateing const list of subject
 var Marks=[];                                      //empty list of Marks
 for(sub in subject)
    {
     Marks.push(window.prompt("Enter Marks obtained in : "+subject[sub]));   //getting mark of student subjectwise and push in to the Mark list from user.
    }
var sumOfmarks=0;                //claculating sum of Marks
for(mar in Marks){
    sumOfMarks+=parseInt(Marks[mar]);
}
var Avarage=sumOfMarks/Marks.length;  //take the Avarage of total marks 

//identification of grade on basis of Avarage of marks

if(Avarage>=90 && Avarage<100)
{
    document.wite("Distinction:"+Avarage); //document.write() is to dispaly the content on html page.
}
else if(Avarage>=80 && Avarage<90)
{
    document.write("Frist Class:"+Avarage);
}
else if(Avarage>=60 && Avarage<80)
{
    document.write("Second Class:"+Avarage);
}
else if(Avarage>=40 && Avarage<60)
{
    document.write("Pass:"+Avarage);
}
else
{
    document.write("Fail:"+Avarage);
}


