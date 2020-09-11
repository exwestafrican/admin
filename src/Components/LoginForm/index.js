import React, { useState } from "react";
import "./loginForm.css";
import user from "../../auth";
import Button from "../Button/Button";
import { useHistory, Link } from "react-router-dom";
import url from "../../Path";
import { socket } from "../../sockets";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { signUp } = url;
  const display = isValid === true ? "remove" : null;
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    user.login(email, password, handleSuccess, handleError);
  };

  const handleSuccess = (path) => {
    setIsLoading(false);
    history.push(path);
  };

  const handleError = () => {
    setIsValid(false);
    setIsLoading(false);
  };

  return (
    <form className="form-section__form" onSubmit={handleSubmit}>
      <div
        className={`alert alert-danger alert-dismissible fade show ${display}`}
        role="alert"
      >
        Invalid Email/Password
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
        <small id="emailHelp" className="form-text text-muted ">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </div>

      <div className="space-between">
        <Link className="links adjust-opacity" to={signUp}>
          Need an account?
        </Link>

        <Button text={"Login"} isLoading={isLoading} />
      </div>
    </form>
  );
};

export default LoginForm;
