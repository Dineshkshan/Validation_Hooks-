import *as yup from "yup";
const phone = /[0-9]{10}$/
const Validation=yup.object({
    FirstName:yup.string()
    .required("Required")
    .min(4,"Minimum 4 characters required")
    .max(8,"Maximum length is 8 character"),
    SecondName:yup.string()
    .required("Required")
    .min(4,"Minimum 4 characters required")
    .max(8,"Maximum length is 8 characters"),
    PhoneNumber:yup.string()
    .required("Required")
    .matches(phone,"Phone number is invalid"),
    Password:yup.string()
    .required("Required")
    .min(4,"Minimum 4 characters required")
    .max(8,"Maximum length is 8 characters"),
   ConfirmPassword:yup.string()
   .required("Required")
   .oneOf([yup.ref('Password'),null],"Password doesn't match")
  })
  export default Validation;