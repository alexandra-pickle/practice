import "./App.css";
import Form from "./Form";

function App() {
  const formFields = [
    {
      order: 1,
      field: "first_name",
      display_name: "First Name",
      type: "string",
      required: true,
    },
    {
      order: 2,
      field: "last_name",
      display_name: "Last Name",
      type: "string",
      required: true,
    },
    {
      order: 3,
      field: "age",
      display_name: "Age",
      type: "number",
      required: true,
    },
    {
      order: 4,
      field: "gender",
      display_name: "Gender",
      type: "select",
      options: ["male", "female"],
      required: true,
    },
    {
      order: 5,
      field: "address",
      display_name: "Address",
      type: "text",
    },
    {
      order: 6,
      field: "contact_preference",
      display_name: "Prefer to be contacted",
      type: "check",
      options: ["by phone", "by email"],
    },
  ];
  return (
    <div className="App">
      <Form formFields={formFields} />
    </div>
  );
}

export default App;
