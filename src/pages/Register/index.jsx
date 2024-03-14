import React from 'react';

function RegistrationForm() {
  const [formValues, setFormValues] = React.useState([
    {
      label: "Name",
      type: "text",
      value: "",
    },
    {
      label: "DOB",
      type: "date",
      value: "",
    },
    {
      label: "ID Number",
      type: "number",
      value: "",
    },
    {
      label: "Address",
      type: "text",
      value: "",
    },
    {
      label: "Phone Number",
      type: "tel",
      value: "",
    },
    {
      label: "Next of Kin",
      type: "text",
      value: "",
    },
  ]);

  const handleChange = (e, index) => {
    const values = [...formValues];
    values[index].value = e.target.value;
    setFormValues(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <div className="App">
      <h1>Welcome to our Electronics Shop!</h1>
      <form onSubmit={handleSubmit}>
        {formValues.map((objValue, index) => (
          <div key={index}>
            <label htmlFor={objValue.label}>{objValue.label}</label>
            <input
              type={objValue.type}
              id={objValue.label}
              value={objValue.value}
              onChange={(e) => handleChange(e, index)}
            />
          </div>
        ))}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;