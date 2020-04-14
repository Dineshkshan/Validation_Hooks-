import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import {useFormik} from "formik";
import Validation from './Validation';
const App=()=> {
  const formik=useFormik({
    initialValues:{
        FirstName:'',
        SecondName:'',
        PhoneNumber:'',
        Password:'',
        ConfirmPassword:''
    },
    validationSchema:(Validation),
     onSubmit:(values) =>
    {
      console.log(values);
    }
})
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="container mt-4">
   <div className="jumbotron">
     <div className="form-group">
   <label>First Name:</label>
   <input
   type="text"
   name="FirstName"
   className={formik.errors.FirstName ? "form-control is-invalid":"form-control"}
   autoComplete="off"
   onBlur={formik.handleBlur}
   onChange={formik.handleChange}
   value={formik.values.FirstName}
   />
   {formik.errors.FirstName ? (<div className="text-danger">{formik.errors.FirstName}</div>):null}
   </div>
   <div className="form-group">
   <label>Second Name:</label>
   <input
   type="text"
   name="SecondName"
   className={formik.errors.SecondName ? "form-control is-invalid":"form-control"}
   autoComplete="off"
   onChange={formik.handleChange}
   value={formik.values.SecondName}
   />
  {formik.errors.SecondName ? (<div className="text-danger">{formik.errors.SecondName}</div>):null}
   </div>
   <div className="form-group">
   <label>Phone Number:</label>
   <input
   type="text"
   name="PhoneNumber"
   className={formik.errors.PhoneNumber ? "form-control is-invalid":"form-control"}
   autoComplete="off"
   onChange={formik.handleChange}
   value={formik.values.PhoneNumber}
   />
  {formik.errors.PhoneNumber ? (<div className="text-danger">{formik.errors.PhoneNumber}</div>):null}
   </div>
   <div className="form-group">
   <label>Password:</label>
   <input
   type="password"
   name="Password"
   className={formik.errors.Password ? "form-control is-invalid":"form-control"}
   autoComplete="off"
   onChange={formik.handleChange}
   value={formik.values.Password}
   />
  {formik.errors.Password ? (<div className="text-danger">{formik.errors.Password}</div>):null}
   </div>
   <div className="form-group">
   <label>Confirm Password:</label>
   <input
   type="password"
   name="ConfirmPassword"
   className={formik.errors.ConfirmPassword ? "form-control is-invalid":"form-control"}
   autoComplete="off"
   onChange={formik.handleChange}
   value={formik.values.ConfirmPassword}
   />
  {formik.errors.ConfirmPassword ? (<div className="text-danger">{formik.errors.ConfirmPassword}</div>):null}
   </div>
   <div>
     <Button type="submit">Register</Button>
     </div>
   </div>
   </div>
   </form>
  );
}

export default App;
