import React from 'react';
import{useState}  from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useFormik } from "formik";
import Yup from 'yup';
function Checkout (){
    const [validationOpen,setValidationOpen] = useState(false)

     const openValidation = () =>{
         setValidationOpen(true)

    }
    const handleSubmit = ()=>{

        setValidationOpen(false)
    }

    return (
        <>
        <div onClick={openValidation} className="validation_btn" >Checkout</div>
        { validationOpen&&<div className="validation_form">
            <div className="validation_close" onClick={handleSubmit}>Close</div>
        <Formik
        initialValues={{ firstName: "", lastName: "", age: "", address: "",phone: "",}}
        validate={values => {
          const errors = {};
          if (!values.firstName) {
            errors.firstName = <div style={{color: "red"}}>Required</div>;
          }if(!values.lastName) {
            errors.lastName = <div style={{color: "red"}}>Required</div>;

          }if(!values.age) {
              errors.age=<div style={{color: "red"}}>Required</div>
          }
          if(!values.address) {
            errors.address=<div style={{color: "red"}}>Required</div>

        }if(!values.phone) {
            errors.phone=<div style={{color: "red"}}>Required</div>

        }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          console.log(values);
         
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
            
           
          <form onSubmit={handleSubmit}>
               <div>Enter yor Name</div>
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
            />
            <br />
            {errors.firstName && touched.firstName && errors.firstName}
            <br />
            <div>Enter yor Last Name</div>
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />
            <br />
            {errors.lastName && touched.lastName && errors.lastName}
            <br />
            <div>Enter yor Age</div>
            <input
              type="number"
              name="age"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.age}
            />
            <br />
            {errors.age && touched.age && errors.age}
            <br />
            <div>Enter yor adresse delivere</div>
            <input
              type="text"
              name="address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
            />
            <br />
            {errors.address && touched.address && errors.address}
            <br />
            <div>Enter yor adresse phone number</div>
            <input
              type="number"
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
            />
            <br />
            {errors.phone && touched.phone && errors.phone}
            <br />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
          
        )}
       
      </Formik>
      
            </div>}
            </>
    )

}
export default Checkout

