function addData(studentName, studentGrade){
    const studentGradeTable = document.getElementById("student_grade_table");
    const newRow = studentGradeTable.insertRow();

    newRow.innerHTML = `
        <td>${studentName}</td>
        <td>${studentGrade}</td>
    `;

}