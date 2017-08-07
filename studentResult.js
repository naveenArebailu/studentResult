var marks;
var avg;
var grade;

function Student_Result(){

   var sb1=parseFloat(prompt("Enter subject1 marks"));
   var sb2=parseFloat(prompt("Enter subject2 marks"));
   var sb3=parseFloat(prompt("Enter subject3 marks"));
   
   if(PASS(sb1,sb2,sb3)){
        grade="PASS";
   }
   else
   {
       grade="FAIL";
   }

   marks=sb1+sb2+sb3;
   avg=(marks/3).toFixed(2);
   displayResults(grade,marks,avg);
}

function PASS(sb1,sb2,sb3)
{
 if(sb1>=35 && sb2>=35 && sb3>=35)
    {
        return true;
    }
    else
    {
        return false;
    }
}
function displayResults(grade,marks,avg){

   var cells= document.getElementById("tblstudent").rows[1].cells;
   cells[0].innerHTML=marks;
   cells[1].innerHTML=avg;
   cells[2].innerHTML=grade;
   
}

