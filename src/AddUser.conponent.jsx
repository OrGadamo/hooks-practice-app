import { useState } from "react";
const AddUser = ({
  _fName = "",
  _lName = "",
  _age = "",
  _email = "",
  _password = "",
  _rePassword = "",
}) => {
  const [{ fName, lName, age, email, password, rePassword }, setUserInfo] =
    useState({
      fName: _fName,
      lName: _lName,
      age: _age,
      email: _email,
      password: _password,
      rePassword: _rePassword,
    });
  const changeInfoByInput = (key, e) => {
    switch (key) {
      case "fName":
        setUserInfo({
          fName: e.target.value,
          lName,
          age,
          email,
          password,
          rePassword,
        });
        break;
      case "lName":
        setUserInfo({
          lName: e.target.value,
          fName,
          age,
          email,
          password,
          rePassword,
        });
        break;
      case "age":
        setUserInfo({
          age: e.target.value,
          lName,
          fName,
          email,
          password,
          rePassword,
        });
        break;
      case "email":
        setUserInfo({
          email: e.target.value,
          lName,
          age,
          fName,
          password,
          rePassword,
        });
        break;
      case "password":
        setUserInfo({
          password: e.target.value,
          lName,
          age,
          email,
          fName,
          rePassword,
        });
        break;
      case "rePassword":
        setUserInfo({
          rePassword: e.target.value,
          lName,
          age,
          email,
          password,
          fName,
        });
        break;
      default:
        console.log("invalid key as argument");
    }
  };
  const printTable = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Password</th>
            <th>Confirm Password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{fName}</td>
            <td>{lName}</td>
            <td>{age}</td>
            <td>{email}</td>
            <td>{password}</td>
            <td>{rePassword}</td>
          </tr>
        </tbody>
      </table>
    );
  };
  const checkMatchingPasswords = (e) => {
    e.preventDefault();
    alert(
      password === rePassword
        ? "user been added successfully"
        : "passwords don't match "
    );
  };
  const printValidPassword = () => {
    return password === rePassword ? "" : "Invalid Password";
  };
  return (
    <div>
      Add User
      <form action="" onSubmit={checkMatchingPasswords}>
        <input
          type="text"
          placeholder="Enter first name"
          onChange={(e) => changeInfoByInput("fName", e)}
        />
        <input
          type="text"
          placeholder="Enter last name"
          onChange={(e) => changeInfoByInput("lName", e)}
        />
        <input
          type="number"
          placeholder="Enter age"
          onChange={(e) => changeInfoByInput("age", e)}
        />
        <input
          type="email"
          placeholder="Enter email"
          onChange={(e) => changeInfoByInput("email", e)}
        />
        <div>
          <input
            type="password"
            placeholder="Enter password"
            onChange={(e) => changeInfoByInput("password", e)}
          />
          <span>{printValidPassword()}</span>
        </div>
        <div>
          <input
            placeholder="Confirm password"
            type="password"
            onChange={(e) => changeInfoByInput("rePassword", e)}
          />
          <span>{printValidPassword()}</span>
        </div>
        <button type="submit">Add User</button>
      </form>
      {printTable()}
    </div>
  );
};
export default AddUser;
