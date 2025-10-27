

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
    studentGradeTable.innerHTML = (`
        <tr class="table_title_bar">
            <th>Name</th>
            <th>Grade</th>
        </tr>
    `)

    for (var i = 0; i < studentData.length; i++){
        const newRow = studentGradeTable.insertRow();
        newRow.innerHTML = `
            <td>${studentData[i].name}</td>
            <td>${studentData[i].grade}</td>
        `;
    }
}

function sort(){
    studentData.sort(function(a,b){
        return a.grade-b.grade;
    });
    printData();
}
