import React from "react";

const Button = props => {
  return (
    <button
      className={
        props.type === "primary" ? "btn btn-primary" : "btn btn-warning"
      }
      onClick={props.action}
    >
      {props.title}
    </button>
  );
};

export default Button;