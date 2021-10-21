// gh""
import MaterialInput from './MaterialInput';
import Textarea from './Textarea'
import Select from './Select'
import RadioButtons from './RadioButtons'
import Checkbox from './Checkbox'
import MaterialDatePicker from './MaterialDatePicker'

export default function FormControl(props) {
    const { control,...rest } = props;
    switch (control) {
        case "input": return <MaterialInput {...rest}/>
        case "textarea": return <Textarea {...rest}/>
        case "select": return <Select {...rest}/>
        case "radio": return <RadioButtons {...rest}/>
        case "checkbox": return <Checkbox {...rest} />
        case "date": return <MaterialDatePicker {...rest} />
        default:
          return null;
    }
}
