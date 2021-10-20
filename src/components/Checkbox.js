import React from 'react';
import { ErrorMessage, Field } from 'formik';
import ShowError from './ShowError'
// gh""
export default function Checkbox(props) {
    const { label, name, options, ...rest } = props;
    return (
        <div>
          <label htmlFor={name}>{label}</label>  
          <Field name={name} id={name} {...rest} >
            {
              (fieldProps) => {
                const { field } = fieldProps;
                console.log(fieldProps);
                return options.map((option, index) => (
                  <>
                  <input type="checkbox" id={option.value} {...field} value={option.value} checked={field.value.includes(option.value)} />
                  <label htmlFor={option.value}>{option.key}</label>
                  </>
                ))
              }
            }
          </Field>
          <ErrorMessage name={name} component={ShowError}/>
        </div>
    )
}
