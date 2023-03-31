import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import image from "./image/image1.png";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate, Link } from "react-router-dom"


export function AddForm() {

  const addUserValidationSchema = yup.object({
    firstName: yup.string().required(),
    lastName:  yup.string().required(),
    mobileNumber:  yup.number().required(),
    email:  yup.string().required(),
    dateOfBirth:  yup.date().required(),
    address:  yup.string().required(),
    accountNumber:  yup.number().required(),
    ifscCode:  yup.string().required(),
    bankName:  yup.string().required(),
    branch:  yup.string().required(),
  })

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      mobileNumber: "",
      email: "",
      dateOfBirth:"" ,
      address: "",
      accountNumber: "" ,
      ifscCode: "",
      bankName: "",
      branch: ""
      
     },

     validationSchema : addUserValidationSchema,

     onSubmit:(values)=>{
    
      addUser(values)
     }
  })

  const navigate = useNavigate()

  const click = () => {
    window.location.href="/"
  }
  
  const addUser = (values) => {
    fetch("https://6426a302556bad2a5b5425b5.mockapi.io/user",{
      method:"POST",
      body:JSON.stringify(values),
      headers: { "Content-type" : "application/json" },
    })
    .then((data)=> console.log(data) )
    .then(()=> click())
  }


  return (
    <>
        <form className="form-container" onSubmit={formik.handleSubmit}>

         <img className="img-1" src={image} alt="Employee-logo" />
          
          <h2 className="form-heading">Personal Detail's</h2>


          <TextField
            value={formik.values.firstName}
            className="text-field-1"
            type="text"
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            onChange={formik.handleChange}
            name="firstName"
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && formik.errors.firstName}
            helperText={formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName :null}
          />
          <TextField
          value={formik.values.lastName}
            className="text-field-2"
            type="text"
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            onChange={formik.handleChange}
            name="lastName"
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && formik.errors.lastName}
            helperText={formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName :null}
         
          />
          <TextField
          value={formik.values.mobileNumber}
            className="text-field-3"
            type="number"
            id="outlined-basic"
            label="Mobile Number"
            variant="outlined"
            onChange={formik.handleChange}
            name="mobileNumber"
            onBlur={formik.handleBlur}
            error={formik.touched.mobileNumber && formik.errors.mobileNumber}
            helperText={formik.touched.mobileNumber && formik.errors.mobileNumber ? formik.errors.mobileNumber :null}
         
          />
          <TextField
          value={formik.values.email}
            className="text-field-4"
            type="email"
            id="outlined-basic"
            label="E Mail"
            variant="outlined"
            onChange={formik.handleChange}
            name="email"
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email}
            helperText={formik.touched.email && formik.errors.email ? formik.errors.email :null}
         
          />
          <TextField
          value={formik.values.dateOfBirth}
            className="text-field-5"
            type="date"
            id="outlined-basic"
            label=""
            variant="outlined"
            onChange={formik.handleChange}
            name="dateOfBirth"
            onBlur={formik.handleBlur}
            error={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
            helperText={formik.touched.dateOfBirth && formik.errors.dateOfBirth ? formik.errors.dateOfBirth :null}
         
          />
          <TextField
          value={formik.values.address}
            className="text-field-6"
            type="text"
            id="outlined-basic"
            label="Address"
            variant="outlined"
            onChange={formik.handleChange}
            name="address"
            onBlur={formik.handleBlur}
            error={formik.touched.address && formik.errors.address}
            helperText={formik.touched.address && formik.errors.address ? formik.errors.firstName :null}
         
          />

          <h2 className="form-heading">Bank Detail's</h2>
          <TextField
          value={formik.values.accountNumber}
            className="text-field-7"
            type="number"
            id="outlined-basic"
            label="Account Number"
            variant="outlined"
            onChange={formik.handleChange}
            name="accountNumber"
            onBlur={formik.handleBlur}
            error={formik.touched.accountNumber && formik.errors.accountNumber}
            helperText={formik.touched.accountNumber && formik.errors.accountNumber ? formik.errors.accountNumber :null}
         
          />
          <TextField
          value={formik.values.ifscCode}
            className="text-field-8"
            type="text"
            id="outlined-basic"
            label="IFSC Code"
            variant="outlined"
            onChange={formik.handleChange}
            name="ifscCode"
            onBlur={formik.handleBlur}
            error={formik.touched.ifscCode && formik.errors.ifscCode}
            helperText={formik.touched.ifscCode && formik.errors.ifscCode ? formik.errors.ifscCodee :null}
         
          />
          <TextField
          value={formik.values.bankName}
            className="text-field-9"
            type="text"
            id="outlined-basic"
            label="Bank Name"
            variant="outlined"
            onChange={formik.handleChange}
            name="bankName"
            onBlur={formik.handleBlur}
            error={formik.touched.bankName && formik.errors.bankName}
            helperText={formik.touched.bankName && formik.errors.bankName ? formik.errors.bankName :null}
         
          />
          <TextField
          value={formik.values.branch}
            className="text-field-10"
            type="text"
            id="outlined-basic"
            label="Branch"
            variant="outlined"
            onChange={formik.handleChange}
            name="branch"
            onBlur={formik.handleBlur}
            error={formik.touched.branch && formik.errors.branch}
            helperText={formik.touched.branch && formik.errors.branch? formik.errors.branch :null}
         
          />

          
            <Button className="form-button" variant="contained" type="submit" >Save</Button>
        
      
        </form>

    </>
  );
}
