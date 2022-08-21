import { useState } from "react";
import Teacher from "./Teacher.component";
import Student from "./Student.component";
const Course = () => {
  const [studentsArray, setStudentArray] = useState([]);
  const [teacher, setTeacher] = useState({ fName: "N/A", lName: "N/A" });
  const [subjectsArray, setSubjectsArray] = useState([
    "Math",
    "Sport",
    "Physics",
    "Biology",
    "English",
  ]);
  let newStudent = {};
  const loadStudents = () => {
    const students = [
      { fName: "Aviel", lName: "Teka", age: 22 },
      { fName: "Lior", lName: "David", age: 25 },
      { fName: "Daniel", lName: "Malede", age: 24 },
      { fName: "John", lName: "Doe", age: 20 },
      { fName: "J", lName: "Cole", age: 29 },
    ];
    setStudentArray((studentsArray) => [...studentsArray, ...students]);
  };
  const addNewToSubjects = () => {
    setSubjectsArray([...subjectsArray, "new"]);
  };
  const addStudentInput = (e, key) => (newStudent[key] = e.target.value);
  const addStudentToArray = (e) => {
    e.preventDefault();
    let addStudent = { ...newStudent };
    setStudentArray((newStudent) => [...studentsArray, addStudent]);
    newStudent = {};
  };
  return (
    <div>
      {subjectsArray.map((subject) => (
        <h1>{subject}</h1>
      ))}
      <button onClick={addNewToSubjects}>Click to add new</button>
      <Teacher fName={teacher.fName} lName={teacher.lName} />
      {studentsArray.map((student) => (
        <Student
          fName={student.fName}
          lName={student.lName}
          age={student.age}
        />
      ))}
      <button onClick={loadStudents}>Click to load students</button>
      <form onSubmit={addStudentToArray}>
        <input
          type="text"
          placeholder="Enter First Name"
          onChange={(e) => addStudentInput(e, "fName")}
        />
        <input
          type="text"
          placeholder="Enter Last Name"
          onChange={(e) => addStudentInput(e, "lName")}
        />
        <input
          type="number"
          placeholder="Enter Age"
          onChange={(e) => addStudentInput(e, "age")}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default Course;
