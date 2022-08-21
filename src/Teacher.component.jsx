import { useState } from "react";
const Teacher = (props) => {
  const [fName, setFName] = useState(props.fName);
  const [lName, setLName] = useState(props.lName);
  const changeNameToUpperCase = () => {
    setFName(fName.toUpperCase());
    setLName(lName.toUpperCase());
  };
  return (
    <div>
      <h1>
        {fName} {lName}
      </h1>
      <button onClick={() => setFName("Or")}>Click to change first name</button>
      <button onClick={() => setLName("Gadamo")}>
        Click to change first name
      </button>
      <button onClick={changeNameToUpperCase}>Click to Upper Case</button>
    </div>
  );
};
export default Teacher;
