import React from 'react';
import { Field } from 'formik';
//import ShowError from './ShowError'
import { TextField } from 'formik-material-ui'

// gh""  
export default function MaterialInput(props) {
    const { label, name, ...rest } = props;
    return (
         <div>
        {/*  <label htmlFor={name}>{label}</label>   */}
          <Field component={TextField} label={label} name={name} id={name} {...rest} />
          {/* <ErrorMessage name={name} component={ShowError}/> */}
        </div>
    )
}
