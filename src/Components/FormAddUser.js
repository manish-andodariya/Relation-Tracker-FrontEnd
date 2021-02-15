import React, { useState } from "react";

const FormAddUser = ({ addUsers }) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (text == "") {
      alert("Please add details for the task first!!");
      return;
    }
    addUsers({ text });
    setText("");
  };
  return (
    <form className="add-form" method="POST" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Add New User</label>
        <input
          type="text"
          placeholder="Enter User Name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <input type="submit" value="Add" className="btn btn-block" />
    </form>
  );
};

export default FormAddUser;
