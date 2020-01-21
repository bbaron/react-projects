import React, { useContext } from "react";
import { UserContext } from "../App";

export const UserComponent = () => {
  const username = useContext(UserContext);
  return (
    <div>
      <h1>UseContext</h1>
      <div>{username}</div>
    </div>
  );
};

export default UserComponent;
