import React, { useState } from "react";
import "./App.css";
import userList from "./data.js";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";

const App = () => {
  const [users, setUsers] = useState(userList);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const [editing, setEditing] = useState(false);

  const initialUser = {
    id: null,
    name: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    dateOfBirth: "",
    address: "",
    accountNumber: "",
    ifscCode: "",
    bankName: "",
    branch: "",
  };

  const [currentUser, setCurrentUser] = useState(initialUser);

  const editUser = (id, user) => {
    setEditing(true);
    setCurrentUser(user);
  };

  const updateUser = (newUser) => {
    setUsers(
      users.map((user) => (user.id === currentUser.id ? newUser : user))
    );
    setCurrentUser(initialUser);
    setEditing(false);
  };

  return (
    <>
      {/* <h1>React CRUD App with Hooks</h1> */}
      <div className="container">
        {editing ? (
          <EditUserForm
            currentUser={currentUser}
            setEditing={setEditing}
            updateUser={updateUser}
          />
        ) : (
          <AddUserForm addUser={addUser} />
        )}

        <div className="userlist-container">
          <h2>View users</h2>
          <UserTable
            users={users}
            deleteUser={deleteUser}
            editUser={editUser}
          />
        </div>
      </div>
    </>
  );
};

export default App;
