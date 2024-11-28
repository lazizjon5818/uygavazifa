import React, { useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ addUser, editUser }) => {
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const countryRef = useRef();
  const genderRef = useRef();
  const birthdateRef = useRef();
  const phoneRef = useRef();

  useEffect(() => {
    if (editUser) {
      firstnameRef.current.value = editUser.firstname;
      lastnameRef.current.value = editUser.lastname;
      usernameRef.current.value = editUser.username;
      passwordRef.current.value = editUser.password;
      countryRef.current.value = editUser.country;
      genderRef.current.value = editUser.gender;
      birthdateRef.current.value = editUser.birthdate;
      phoneRef.current.value = editUser.phone;
    } else {
      firstnameRef.current.value = "";
      lastnameRef.current.value = "";
      usernameRef.current.value = "";
      passwordRef.current.value = "";
      countryRef.current.value = "";
      genderRef.current.value = "";
      birthdateRef.current.value = "";
      phoneRef.current.value = "";
    }
  }, [editUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: editUser?.id || uuidv4(),
      firstname: firstnameRef.current.value,
      lastname: lastnameRef.current.value,
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      country: countryRef.current.value,
      gender: genderRef.current.value,
      birthdate: birthdateRef.current.value,
      phone: phoneRef.current.value,
    };
    addUser(newUser);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" placeholder="Firstname" ref={firstnameRef} required />
      <input type="text" placeholder="Lastname" ref={lastnameRef} required />
      <input type="text" placeholder="Username" ref={usernameRef} required />
      <input type="password" placeholder="Password" ref={passwordRef} required />
      <input type="text" placeholder="Country" ref={countryRef} required />
      <select ref={genderRef} required>
        <option value="">Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <input type="date" ref={birthdateRef} required />
      <input type="text" placeholder="Phone Number" ref={phoneRef} required />
      <button type="submit">{editUser ? "Update User" : "Add User"}</button>
    </form>
  );
};

export default Form;
