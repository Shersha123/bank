import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import image from "../image/image1.png";

const AddUserForm = (props) => {
  const initUser = {
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
    branch: ""
  };

  const [user, setUser] = useState(initUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      user.name,
      user.lastName,
      user.mobileNumber,
      user.email,
      user.dateOfBirth,
      user.address,
      user.accountNumber,
      user.ifscCode,
      user.bankName,
      user.branch
    ) {
      handleChange(e, props.addUser(user));
    }
  };

  return (
    <form className="form-container">

<img className="img-1" src={image} alt="Employee-logo" />
          
          <h2 className="form-heading">Personal Detail's</h2>

      <TextField
        className="text-field-1"
        type="text"
        id="outlined-basic"
        label="First Name"
        variant="outlined"
        name="name"
        value={user.name}
        onChange={handleChange}
      />

      <TextField
        className="text-field-2"
        type="text"
        id="outlined-basic"
        label="Last Name"
        variant="outlined"
        value={user.username}
        name="lastName"
        onChange={handleChange}
      />

      <TextField
        className="text-field-3"
        type="number"
        id="outlined-basic"
        label=" mobileNumber"
        variant="outlined"
        value={user.mobileNumber}
        name="mobileNumber"
        onChange={handleChange}
      />

      <TextField
        className="text-field-4"
        type="email"
        id="outlined-basic"
        label="Email"
        variant="outlined"
        value={user.email}
        name="email"
        onChange={handleChange}
      />

      <TextField
        className="text-field-5"
        type="date"
        id="outlined-basic"
        label="Date Of Birth"
        variant="outlined"
        value={user.dateOfBirth}
        name="dateOfBirth"
        onChange={handleChange}
      />

      <TextField
        className="text-field-6"
        type="text"
        id="outlined-basic"
        label="Address"
        variant="outlined"
        value={user.address}
        name="address"
        onChange={handleChange}
      />
          <h2 className="form-heading">Bank Detail's</h2>

      <TextField
        className="text-field-7"
        type="text"
        id="outlined-basic"
        label="Account Number"
        variant="outlined"
        value={user.accountNumber}
        name="accountNumber"
        onChange={handleChange}
      />

      <TextField
        className="text-field-8"
        type="text"
        id="outlined-basic"
        label="IFSC Code"
        variant="outlined"
        value={user.ifscCode}
        name="ifscCode"
        onChange={handleChange}
      />

      <TextField
        className="text-field-9"
        type="text"
        id="outlined-basic"
        label="Bank Name"
        variant="outlined"
        value={user.bankName}
        name="bankName"
        onChange={handleChange}
      />

      <TextField
        className="text-field-10"
        type="text"
        id="outlined-basic"
        label="Branch"
        variant="outlined"
        value={user.branch}
        name="branch"
        onChange={handleChange}
      />

      <Button color="success" className="form-button" variant="contained" type="submit" onClick={handleSubmit}>
        Save
      </Button>
    </form>
  );
};

export default AddUserForm;