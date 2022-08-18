import { useState } from "react";
const EditUser = ({
  _fName = "",
  _lName = "",
  _age = 0,
  _email = "",
  _password = "",
}) => {
  const [userInfo, setUserInfo] = useState({
    fName: { value: _fName, changed: false },
    lName: { value: _lName, changed: false },
    age: { value: _age, changed: false },
    email: { value: _email, changed: false },
    password: { value: _password, changed: false },
  });
  const { fName, lName, age, email, password } = userInfo;
  const changeStateByInput = (e, key) => {
    switch (key) {
      case "fName":
        setUserInfo({
          password,
          lName,
          age,
          email,
          fName: { value: e.target.value, changed: true },
        });
        break;
      case "lName":
        setUserInfo({
          password,
          lName: { value: e.target.value, changed: true },
          age,
          email,
          fName,
        });
        break;
      case "age":
        setUserInfo({
          password,
          lName,
          age: { value: e.target.value, changed: true },
          email,
          fName,
        });
        break;
      case "email":
        setUserInfo({
          password,
          lName,
          age,
          email: { value: e.target.value, changed: true },
          fName,
        });
        break;
      case "password":
        setUserInfo({
          password: { value: e.target.value, changed: true },
          lName,
          age,
          email,
          fName,
        });
        break;
      default:
        console.log("Invalid key as argument");
    }
  };
  const checkValuesAndAlert = (e) => {
    e.preventDefault();
    for (let key in userInfo) {
      if (userInfo[key] === "" || userInfo[key] === 0) {
        return;
      }
    }
    alert("Edit suceessfull");
  };
  return (
    <div>
      <form onSubmit={checkValuesAndAlert}>
        <div>
          <input
            type="text"
            placeholder="Enter First Name"
            onChange={(e) => changeStateByInput(e, "fName")}
          />
          <span>{userInfo["fName"]["changed"] ? "detail changed" : ""}</span>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Last Name"
            onChange={(e) => changeStateByInput(e, "lName")}
          />
          <span>{userInfo["lName"]["changed"] ? "detail changed" : ""}</span>
        </div>
        <div>
          <input
            type="number"
            placeholder="Enter Age"
            onChange={(e) => changeStateByInput(e, "age")}
          />
          <span>{userInfo["age"]["changed"] ? "detail changed" : ""}</span>
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter Email"
            onChange={(e) => changeStateByInput(e, "email")}
          />
          <span>{userInfo["email"]["changed"] ? "detail changed" : ""}</span>
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => changeStateByInput(e, "password")}
          />
          <span>{userInfo["password"]["changed"] ? "detail changed" : ""}</span>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default EditUser;
