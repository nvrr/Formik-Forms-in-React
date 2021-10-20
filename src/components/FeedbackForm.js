import React from "react";
import { Formik,Form,Field,ErrorMessage,FieldArray, FastField } from "formik";
import * as Yup from "yup";
import ShowError from "./ShowError"

// gh""
export default function FeedbackForm() {

    const initialValues = {
        email: "ww@em.com",
        name: "qat",
        phone:"3424",
        address: "",
        socialmedia: {
          facebook: "",
          linkedin: ""
        },
        mobileNumbers: ["",""],
        phoneNumbers: [""],
    }

    const onSubmit = (values) => {
        console.log("form submitted",values);
    }

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid Email Format").required("Required"),
        //name: Yup.string().required("Required"),
        phone:Yup.number().required("Required"),

        // for Disabling submit button

        // address: Yup.string().required("Required"),
        // socialmedia: Yup.object({
        //   facebook: Yup.string().required("fb Required"),
        // }),
        // mobileNumbers: Yup.array().required("Required"),
        // phoneNumbers: Yup.array().required("Required"),

        // for disabling submit button

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
     <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnMount={true} >
      {
        (formik) => {
          console.log("form", formik.errors)
          return (
      <Form >
        <h1>Formik Feedback</h1>
        <label htmlFor="email">Your Email</label>
        <Field type="email" name="email" id="email" />
        <ErrorMessage name="email" component={ShowError}/>
       
        <label htmlFor="name">Your Name</label>
        <Field type="text" name="name" id="name" as="textarea" validate={validateName}/>
        <ErrorMessage name="name" component={ShowError}/>

        <label htmlFor="phone">Your Phone Number</label>
        <Field type="text" name="phone" id="phone" placeholder="Enter Your Mobile Number"/>
        <ErrorMessage name="phone" component={ShowError}/>

      {/* ----Render Props Pattern-----  ---FastField-- */}
        <label htmlFor="address">Your address</label>
        <FastField name="address" id="address" >
          {
            (props) => {
              console.log("address props", props);
              const { meta, field } = props;
              return <textarea  {...field} ></textarea>
            }
          }
        </FastField>
        <ErrorMessage name="address" component={ShowError}/>
      {/* ----Render Props Pattern--------FastField-- */}
      
      {/* -----Nested Objects----- */}
        <label htmlFor="facebook">Your Facebook ID</label>
        <Field type="text" name="socialmedia.facebook" id="facebook" placeholder="Enter Your Facebook id"/>
        <ErrorMessage name="socailmedia.facebook" component={ShowError}/>

        <label htmlFor="linkdin">Your Linkdin ID</label>
        <Field type="text" name="socialmedia.linkdin" id="linkdin" placeholder="Enter Your Linkedin id"/>
        <ErrorMessage name="socailmedia.linkdin" component={ShowError}/>
      {/* -----Nested Objects----- */}
      
      {/* ------Arrays------------- */}
        <label htmlFor="mobile1">Your Mobile Number 1</label>
        <Field type="text" name="mobileNumbers[0]" id="mobile1" placeholder="Enter Your Mobile Number"/>
        <ErrorMessage name="mobileNumber[0]" component={ShowError}/>

         <label htmlFor="mobile2">Your Mobile Number 2</label>
        <Field type="text" name="mobileNumbers[1]" id="mobile2" placeholder="Enter Your Mobile Number"/>
        <ErrorMessage name="mobileNumber[1]" component={ShowError}/>
      {/* ------Arrays------------- */}
      
      {/* ------ FieldArray ----------------- */}
        <label htmlFor="phoneNumbers">Your Phone Numbers</label>
        <FieldArray name="phoneNumbers">
          {
            (fieldArgs) => {
              //console.log(fieldArgs);
              const { form, push, remove } = fieldArgs;
              const { values } = form;
              const { phoneNumbers } = values;
              return <div>
                {phoneNumbers.map((phoneNumber, index) => (
                  <div key={index} className="flex-row">
                    <Field name={`phoneNumbers[${index}]`} />
                    {phoneNumbers.length > 1 && <button className="addremove" onClick={() => remove(index)}>-</button>}
                    <button className="addremove" onClick={() => push("")}>+</button>
                  </div>
                ))} 
              </div>
            }
          }
        </FieldArray>
        <ErrorMessage name="phoneNumbers" component={ShowError}/>
      {/* ------ FieldArray ----------------- */}

      <br/>
      {/* ----- Manual Triggering Validation ------ */}
        <button type="button" onClick={()=>formik.validateForm()} >Validate Form</button>
        <button type="button" onClick={()=>formik.setFieldTouched("email")} >Touch Element</button>
        <button type="button" onClick={()=>formik.setTouched({
          email: true,
          name: true,
        })} >Touch Form</button>
        <button type="button" onClick={()=>formik.validateField("email")} >Validate Element</button>
      {/* ----- Manual Triggering Validation ------ */}
      
        <button type="submit" className="submitBtn" disabled={!(formik.dirty && formik.isValid)} >Submit</button>
        <p className="footer">Powered by Venki</p>
      </Form> )
        }
      }
      </Formik>
    </div>
  );
}
//gh""
//Disabling Submit Button
// Case-1: after clicking submit button if form is invalid (!is valid)
// Case-2: On page load (validateOnMount)
// Case-3: On filling mandatory fields (!(dirty & isValid))
// Case-4: On Pre populating default data
