import React from "react";
import { Formik,Form,Field,ErrorMessage } from "formik";
import * as Yup from "yup";
import ShowError from "./ShowError"

// gh""
export default function FeedbackForm() {

    const initialValues = {
        email: "",
        name: "",
        phone:""
    }

    const onSubmit = (values) => {
        console.log("form submitted",values);
    }

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid Email Format").required("Required"),
        //name: Yup.string().required("Required"),
        phone:Yup.number().required("Required")
    })
// as="textarea" makes field to textarea insteadof input field and as="select" also works
// if we want to write separate validation for particular field we can do it 
    const validateName = (value) => {
        let error;
        if(!value) {
            error="Name is Required"
        }
        return error;
    }
    // gh""
  return (
    <div>
     <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form >
        <h1>Formik Feedback</h1>
        <label htmlFor="email">Your Email</label>
        <Field type="email" name="email" id="email" />
        <ErrorMessage name="email" component={ShowError}/>
       
        <label htmlFor="name">Your Name</label>
        <Field type="text" name="name" id="name" as="textarea" validate={validateName}/>
        <ErrorMessage name="name" component={ShowError}/>

         <label htmlFor="phone">Your Phone Number</label>
        <Field type="text" name="phone" id="phone" />
        <ErrorMessage name="phone" component={ShowError}/>
        
        <button type="submit">Submit</button>
        <p className="footer">Powered by Venki</p>
      </Form>
      </Formik>
    </div>
  );
}