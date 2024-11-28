import React from "react";

const UserCard = ({ user, deleteUser, onEdit }) => {
  const handleDelete = () => {
    const confirmed = window.confirm("Rostdan ham ushbu foydalanuvchini o'chirmoqchimisiz?");
    if (confirmed) {
      deleteUser(user.id);
    }
  };

  return (
    <div className="user-card">
      <h3>{user.firstname} {user.lastname}</h3>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Country:</strong> {user.country}</p>
      <p><strong>Gender:</strong> {user.gender}</p>
      <p><strong>Birthdate:</strong> {user.birthdate}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <div className="buttons">
        <button onClick={onEdit} className="edit-btn">Edit</button>
        <button onClick={handleDelete} className="delete-btn">Delete</button>
      </div>
    </div>
  );
};

export default UserCard;
