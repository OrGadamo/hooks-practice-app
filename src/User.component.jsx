import AddUser from "./AddUser.conponent";
import EditUser from "./EditUser.component";
import { useState } from "react";
import UserTable from "./UserTable.component";
const User = () => {
  const [toggle, setToggle] = useState(0);
  const changeToggle = () => {
    toggle === 2 ? setToggle(0) : setToggle(toggle + 1);
  };
  const displayComponentByToggle = () => {
    switch (toggle) {
      case 0:
        return <AddUser />;
      case 1:
        return <EditUser />;
      case 2:
        return <UserTable />;
      default:
        console.log("toggle with unexpected value");
    }
  };
  return (
    <div>
      User
      {displayComponentByToggle()}
      <button onClick={changeToggle}>Change Component</button>
    </div>
  );
};
export default User;
