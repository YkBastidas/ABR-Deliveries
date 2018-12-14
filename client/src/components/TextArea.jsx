import React from "react";

const TextArea = props => {

  return (

    <div className="form-group">
      <div className="input-group">
        <label htmlFor={props.name} className="sr-only">
          {props.title}
        </label>
        <textarea
          className="form-control"
          id={props.name}
          name={props.name}
          value={props.value}
          onChange={props.handlerChange}
          placeholder={props.placeholder}
          required
          {...props}
        />
      </div>
    </div>
  );
};

export default TextArea;
