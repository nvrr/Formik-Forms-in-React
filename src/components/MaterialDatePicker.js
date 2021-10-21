import React from 'react';
import { ErrorMessage, Field } from 'formik';
import ShowError from './ShowError'
import {
  TimePicker,
  DatePicker,
  DateTimePicker,
} from "formik-material-ui-pickers";

// gh""

export default function MaterialDatePicker(props) {
    const { label, name, ...rest } = props;
    return (
        <div>
          {/* <label htmlFor={name}>{label}</label>   */}
          <Field component={DateTimePicker} label={label} name={name} id={name}  {...rest} />
          <ErrorMessage name={name} component={ShowError}/>
        </div>
    )
}
