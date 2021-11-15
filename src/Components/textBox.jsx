import React, { useState } from "react";

function TextBox({ label, placeholder, onSubmit }) {
  const [value, setValue] = useState("");
  const addCity = () => {
    if (value) {
      onSubmit(value);
    }
    setValue("");
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        aria-label={placeholder}
        value={value}
        name={label}
        onChange={(e) => setValue(e.target.value)}
        aria-describedby="button-addon"
      />
      <button
        className="btn btn-primary"
        type="button"
        id="button-addon"
        onClick={addCity}
      >
        {label}
      </button>
    </div>
  );
}

export default TextBox;
