import Field from "./FormField";
import { useState } from "react";

export default function Form(props) {
  const [formFields, setFormFields] = useState(props.formFields);
  const [formData, setFormData] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    // todo - send data
    console.log("formData", formData);
  };

  const onChange = (fieldName, value) => {
    const updateFormData = { ...formData };
    updateFormData[fieldName] = value;
    setFormData({ ...updateFormData });
  };

  const mapFieldType = (type) => {
    switch (type) {
      case "select":
        return "radio";
      case "check":
        return "checkbox";
      case "number":
        return "number";
      case "text":
        return "textarea";
      default:
        return "text";
    }
  };

  return (
    <form onSubmit={onSubmit} id="form">
      <h1>Simple Dynamic Form</h1>
      {formFields.map(({ field, display_name, type, required, options }) => {
        switch (type) {
          case "check":
          case "select":
            return (
              <div className="row v-center" key={field}>
                <label className="col width200" htmlFor={field}>
                  {display_name}
                </label>
                {options.map((option, index) => {
                  return (
                    <Field
                      key={index}
                      field={field}
                      display_name={option}
                      value={option}
                      type={mapFieldType(type)}
                      required={required}
                      onChange={onChange}
                    />
                  );
                })}
              </div>
            );
          default:
            return (
              <div className="row v-center" key={field}>
                <Field
                  field={field}
                  display_name={display_name}
                  type={mapFieldType(type)}
                  required={required}
                  onChange={onChange}
                />
              </div>
            );
        }
      })}

      <div className="row justify-content-right v-center">
        <input type="reset" className="cancel" value="Cancel" />
        <input type="submit" className="submit" />
      </div>
    </form>
  );
}
