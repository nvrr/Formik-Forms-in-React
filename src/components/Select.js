import React from 'react';
import { ErrorMessage, Field } from 'formik';
import ShowError from './ShowError'
// gh""
export default function Select(props) {
    const { label, name, options, ...rest } = props;
    return (
        <div>
          <label htmlFor={name}>{label}</label>  
          <Field as="select" name={name} id={name} {...rest} >
            {
              options.map((option, index) => (
                <option value={option.value} key={index}>{option.key}</option>
              ))
            }
          </Field>
          <ErrorMessage name={name} component={ShowError}/>
        </div>
    )
}
