import { useState, useReducer } from "react";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

const Form = () => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };
  console.log(formData);

  return (
    <div className="wrapper">
      <h1>How About Them Apples</h1>
      {submitting && (
        <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}>
                {name}
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input name="name" onChange={handleChange} />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Apples</p>
            <select name="apple" onChange={handleChange}>
              <option value="">--Please choose an option--</option>
              <option value="fuji">Fuji</option>
              <option value="jonathan">Jonathan</option>
              <option value="honey-crisp">Honey Crisp</option>
            </select>
          </label>
          <label>
            <p>Count</p>
            <input type="number" name="count" onChange={handleChange} />
          </label>
          <label>
            <p>Gift Wrap</p>
            <input type="checkbox" name="gift-wrap" onChange={handleChange} />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export { Form };
