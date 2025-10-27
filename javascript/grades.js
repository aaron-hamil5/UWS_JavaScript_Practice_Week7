var studentData = new Map()


function addData(studentName, studentGrade){
    studentData.set(studentName, studentGrade);
    printData();
}

function printData(){
    const studentGradeTable = document.getElementById("student_grade_table");
    const newRow = studentGradeTable.insertRow();

    studentData.forEach((studentGrade, studentName) =>{
    newRow.innerHTML = `
        <td>${studentName}</td>
        <td>${studentGrade}</td>
    `;
    }, this);
}