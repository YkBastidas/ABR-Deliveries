import React from "react";

const DateForm = props => {
  //console.log(props.value);
  return (
    <div className="form-group">
      <div className="input-group">
        <label htmlFor={props.name} className="sr-only">
          {props.title}
        </label>
        <input
          className="form-control"
          id={props.name}
          name={props.name}
          type={props.inputType}
          min={props.min}
          amx={props.max}
          value={props.value}
          onChange={props.handleChange}
          required
          {...props}
        />
      </div>
    </div>
  );
};

export default DateForm;
