import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import UserCard from "./components/UserCard";
import "./styles.css";

function App() {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    if(savedUsers){
      return JSON.parse(savedUsers);
    }else{
      return [];
    };
  });

  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const addUser = (newUser) => {
    if (editUser) {
      setUsers(
        users.map((user) => (user.id === editUser.id ? { ...editUser, ...newUser } : user))
      );
      setEditUser(null);
    } else {
      setUsers([...users, newUser]);
    }
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleEdit = (user) => {
    setEditUser(user);
  };

  return (
    <div className="container">
      <div className="form-section">
        <h1>{editUser ? "Edit User" : "Add New User"}</h1>
        <Form addUser={addUser} editUser={editUser} />
      </div>
      <div className="users-section">
        {users.length === 0 ? (
          <p className="no-users">No users added yet.</p>
        ) : (
          users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              onEdit={() => handleEdit(user)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
