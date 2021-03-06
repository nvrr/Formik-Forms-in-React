import React from 'react'
import './Appp.css';
import FormControl from './components/FormControl';
// import SampleForm from "./components/SampleForm";
// import FeedbackForm from "./components/FeedbackForm";
// gh"" GH''
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import moment from 'moment'

function App() {

  const technologies = [
    { key: "Tech1", value: "tech1"},
    { key: "Tech2", value: "tech2"},
  ]

  const genderoptions = [
    { key: "Male", value: "M"},
    { key: "Female", value: "F"},
  ]

  const languages = [
    { key: "Flutter", value: "flutter"},
    { key: "React", value: "react"},
  ]

  const initialValues = {
    name: "Venki",
    password:"",
    comments: "",
    languages: "flutter",
    gender: "",
    technologies: [],
    birthday: null,
  }
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
    comments: Yup.string().required("Required"),
  })
  const onSubmit = (values, form) => {
    console.log("form submitted", values, form);
    let convertedDate = moment(new Date(values.birthday)).format("DD-MM-YYYY HH:mm:ss A");
    console.log(convertedDate);
    setTimeout(() => {
      form.setSubmitting(false);
      form.resetForm();
    })
  }
  return (
    <div className="App">
     <div className="container">
     <MuiPickersUtilsProvider utils={DateFnsUtils}>
     <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
     <Form>
      <h1>Formik Form</h1>
      <FormControl label="Name" name="name"  placeholder="Enter your name" control="input"/>
      <FormControl label="Password" name="password"  placeholder="Enter your password" control="input"/>
      <FormControl label="Comments" name="comments" placeholder="Enter your comments" control="textarea"/>
      <FormControl label="Languages" name="languages"  control="select" options={languages}/>
      <FormControl label="Gender" name="gender"  control="radio" options={genderoptions}/>
      <FormControl label="Technologies" name="technologies"  control="checkbox" options={technologies}/>
      <FormControl label="Birthday" name="birthday"  control="date" />
      <button type="submit">Submit</button>
     </Form>
     </Formik>
     </MuiPickersUtilsProvider>
     </div>
    </div>
  );
}

export default App;


//npm i formik-material @material-ui/core formik-material-ui-pickers @date-io/date-fns@1.x date-fns
//npm i formik-material-ui