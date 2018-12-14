import React from "react";

const Input = props => {

  let pattern ="";
  if(props.name==="emailSignUp" || props.name==="emailSignIn")
    pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$";
  else if (props.name==="name" || props.name==="lastNames")
     pattern= "[a-zA-Z_].*";
  else pattern = "(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9_]).{8,20}";

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
          type={props.inputtype}
          value={props.value}
          onChange={props.handlerChange}
          placeholder={props.placeholder}
          pattern={pattern}
          required
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;
