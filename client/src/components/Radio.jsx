import React from "react";

const Radio = props => {
  return (
    <div className="form-group">
      <div className="input-group" style={props.inputstyle}>
        <label style={props.labelstyle}>
          {props.id}
        </label>
        <input
          className="form-control"
          id={props.id}
          name={props.name}
          type={props.inputtype}
          onClick={props.handlerChange}
          {...props}
        />
      </div>
    </div>
  );
};

export default Radio;
