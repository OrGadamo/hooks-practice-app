import { useState } from "react";
const UserTable = () => {
  const usersArray = [
    {
      fName: "Or1",
      lName: "Gadamo",
      age: "23",
      email: "Or@gmail.com",
      password: "yaBish",
    },
    {
      fName: "Or2",
      lName: "Gadamo",
      age: "23",
      email: "Or@gmail.com",
      password: "yaBish",
    },
    {
      fName: "Or3",
      lName: "Gadamo",
      age: "23",
      email: "Or@gmail.com",
      password: "yaBish",
    },
    {
      fName: "Or4",
      lName: "Gadamo",
      age: "23",
      email: "Or@gmail.com",
      password: "yaBish",
    },
    {
      fName: "Or5",
      lName: "Gadamo",
      age: "23",
      email: "Or@gmail.com",
      password: "yaBish",
    },
  ];
  let [users, setUsers] = useState(usersArray);
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
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr>
                <td>
                  <input
                    type="text"
                    id={`fName_${index}inp`}
                    defaultValue={user.fName}
                    key={`${user.fName}${index}`}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id={`lName_${index}inp`}
                    defaultValue={user.lName}
                    key={`${user.fName}${index}`}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    id={`age_${index}inp`}
                    defaultValue={user.age}
                    key={`${user.fName}${index}`}
                  />
                </td>
                <td>
                  <input
                    type="email"
                    id={`email_${index}inp`}
                    defaultValue={user.email}
                    key={`${user.fName}${index}`}
                  />
                </td>
                <td>
                  <input
                    type="password"
                    id={`password_${index}inp`}
                    defaultValue={user.password}
                    key={`${user.fName}${index}`}
                  />
                </td>
                <td>
                  <button onClick={() => updateChangesInState(index)}>
                    Check Changes
                  </button>
                </td>
                <td>
                  <button onClick={() => deleteUserState(index)}>
                    Delete User
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  const updateChangesInState = (index) => {
    let isUpdated = false;
    for (let key in users[index]) {
      let inputState = document.getElementById(`${key}_${index}inp`);
      if (inputState.value !== users[index][key]) {
        users[index][key] = inputState.value;
        isUpdated = true;
        inputState.style.color = "red";
      }
    }
    setUsers(users);
    if (isUpdated) alert("changes have been saved successfully");
  };
  const deleteUserState = (userIndex) => {
    users = users.filter((user, index) => userIndex !== index);
    setUsers(users);
    alert("user deleted successfully");
  };
  return <div>{printTable()}</div>;
};
export default UserTable;
