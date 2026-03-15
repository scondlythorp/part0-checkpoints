const { students } = require("./data");

function createStudent(name, age, grade, attendance) {

  const newStudent = {
    id: students.length + 1,
    name,
    age,
    grade,
    attendance
  };

  students.push(newStudent);

  return newStudent;
}


//function to read all students
function getAllStudents() {
  return students;
}

//function to read a student by id
function getStudentById(id) {
  return students.find(student => student.id === id);
}

//function to update a student by id
function updateStudent(id, updates) {

  const student = students.find(s => s.id === id);

  if (!student) {
    return "Student not found";
  }

  if (updates.name) student.name = updates.name;
  if (updates.age) student.age = updates.age;
  if (updates.grade) student.grade = updates.grade;
  if (updates.attendance) student.attendance = updates.attendance;

  return student;
}


//function to search students by name
function searchByName(name) {

  return students.filter(student =>
    student.name.toLowerCase().includes(name.toLowerCase())
  );
}

//function to search students by grade
function searchByGrade(grade) {
  return students.filter(student => student.grade === grade);
}


//function to delete a student

function deleteStudent(id) {

  const index = students.findIndex(s => s.id === id);

  if (index === -1) {
    return "Student not found";
  }

  return students.splice(index,1);

}


//exporting all functions
module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
  searchByName,
  searchByGrade
};
