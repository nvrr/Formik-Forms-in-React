import React from 'react';
import { ErrorMessage, Field } from 'formik';
import ShowError from './ShowError'
// gh""
export default function Input(props) {
    const { label, name, ...rest } = props;
    return (
        <div>
          <label htmlFor={name}>{label}</label>  
          <Field name={name} id={name} {...rest} />
          <ErrorMessage name={name} component={ShowError}/>
        </div>
    )
}
