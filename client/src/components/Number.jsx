import React from "react";

const Number = props => {
  //console.log(props.value);
  return (
    <div className="form-group">
      <div className="input-group">
        <label htmlFor={props.name} className= "sr-only">
          {props.title}
        </label>
        <span className="input-group-text" id="basic-addon3">
          {props.title}
        </span>
        <input
          className="form-control"
          id={props.name}
          name={props.name}
          type={props.inputtype}
          min={props.min}
          max={props.max}
          step={props.step}
          value={props.value}
          onChange={props.handlerChange}
          required
          {...props}
        />
      </div>
    </div>
  );
};

export default Number;
