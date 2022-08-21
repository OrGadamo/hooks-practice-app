import { useState } from "react";

const Student = ({ fName = "N/A", lName = "N/A", age = "N/A" }) => {
  const [student, setStudent] = useState({ fName, lName, age });
  return (
    <h1>
      {student.fName} {student.lName},{student.age}
    </h1>
  );
};
export default Student;
