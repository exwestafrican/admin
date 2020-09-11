import React from "react";
import "./button.css";

const Button = ({ text, onClickHanlder, isLoading }) => {
  if (!isLoading) {
    return (
      <button type="submit" className="auth sign-in" onClick={onClickHanlder}>
        <span> {text}</span>
      </button>
    );
  } else {
    return (
      <button className="auth sign-in-disabled" type="button" disabled>
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        <span> Loading...</span>
      </button>
    );
  }
};



export default Button;
