import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// gh""
export default function SampleForm() {

    const initialValues = {
        email: "",
        name: ""
    }

    // const validate = (values) => {
    //     console.log(values);
    //     let errors = {};
    //     if (!values.email){
    //         errors.email = "Required";
    //     } else if(!/^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/.test(values.email)){
    //        errors.email = "Invalid Email format";
    //     }
    //     if (!values.name){
    //         errors.name = "Required";
    //     }
    //     return errors;
    // }

    const onSubmit = (values) => {
        console.log("form submitted",values);
    }

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid Email Format").required("Required"),
        name: Yup.string().required("Required")
    })

    const formik = useFormik({
        initialValues, //initialValues: initialValues,
        //validate,
        validationSchema,
        onSubmit,
    })
    console.log("Form",formik);
    // gh""
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h1>Formik Feedback</h1>
        <label htmlFor="email">Your Email</label>
        <input type="email" name="email" id="email" {...formik.getFieldProps("email")}/>
        <p className="error">{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</p>
        <label htmlFor="name">Your Name</label>
        <input type="text" name="name" id="name" {...formik.getFieldProps("name")}/>
        {/* <input type="text" name="name" id="name" value={formik.values.name}
           onChange={formik.handleChange} onBlur={formik.handleBlur}/> */}
        <p className="error">{formik.touched.name && formik.errors.name ? formik.errors.name : ""}</p>
        <button type="submit">Submit</button>
        <p className="footer">Powered by Venki</p>
      </form>
    </div>
  );
}
// {...formik.getFieldProps("")} use it instead of below one 
//value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}