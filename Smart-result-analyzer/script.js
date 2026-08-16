const input = document.getElementById("marks");
const button = document.getElementById("checkResult");
const grade = document.getElementById("grade");
const status = document.getElementById("status");
const remarks = document.getElementById("remarks");
const bar = document.getElementById("bar");


button.addEventListener("click", function(){

    let marks = Number(input.value);

    if(input.value==="") {
        grade.innerText = "Please enter marks"
        return;
    }
    if (marks < 0 || marks > 100){
        grade.innerText = "Marsk may be 0 to 100"
        return;
    }

    let gradeVal = "";
    let statusVal = "";
    let remarksVal = "";


    if (marks>=90){
        gradeVal = "A";
        statusVal ="Pass";
        remarksVal = "🌟 Outstanding! Keep up the excellent work.";
        grade.style.color = "green";
        bar.style.backgroundColor = "green";
    } 
    
    else if(marks>=75) {
        gradeVal = "B";
        statusVal ="Pass";
        remarksVal = "🎉 Very Good! You're on the right track";
        grade.style.color = "green";
        bar.style.backgroundColor = "orange";
    }

    else if(marks>=60){
        gradeVal = "C";
        statusVal ="Pass";
        remarksVal = "Good Job! Keep practicing to improve";
        grade.style.color = "#FFA500";
        bar.style.backgroundColor = "#FFA500";
    }


    else if (marks>=40){ 
        gradeVal = "D";
        statusVal ="Pass";
        remarksVal = "📚 Satisfactory. More practice is needed.";
        grade.style.color = "red";
        bar.style.backgroundColor = "red";

    }

     else if (marks<=39){ 
        gradeVal = "E";
        statusVal ="Fail";
        remarksVal = "💪 Don't lose hope. Practice and try again.";
        grade.style.color = "red";
        bar.style.backgroundColor = "red";

    }

    grade.innerText = "Grade: " + gradeVal;
    status.innerText = "Status: " + statusVal;
    remarks.innerText = "Remarks : " + remarksVal;

    bar.style.width = marks + "%" ;
 


})
