const crud = require("./crud");

console.log("\nAll Students");
console.table(crud.getAllStudents());


console.log("\nCreate Student");
const newStudent = crud.createStudent("John", 20, "B", 87);
console.log(newStudent);


console.log("\nUpdate Student");
const updatedStudent = crud.updateStudent(2, { grade: "A" });
console.log(updatedStudent);


console.log("\nSearch Grade A");
console.table(crud.searchByGrade("A"));


console.log("\nDelete Student ID 3");
crud.deleteStudent(3);


console.log("\nFinal Student List");
console.table(crud.getAllStudents());