var studentData = [];


function addData(studentName, studentGrade){
    studentData.push({
        name: studentName,
        grade: studentGrade
        });
    printData();
}

function printData(){
    const studentGradeTable = document.getElementById("student_grade_table");
    const newRow = studentGradeTable.insertRow();
    for (var i = 0; i < studentData.length; i++){
        newRow.innerHTML = `
            <td>${studentData[i].name}</td>
            <td>${studentData[i].grade}</td>
        `;
    }
}

function sort(){

}
