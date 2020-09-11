import React from "react";
import LoginForm from "../../Components/LoginForm";
import "./login.css";
import backgroundImage from "../../img/profile pic.jpg";

const Login = () => {
  return (
    <main className="form-page">
      <section className="img-section">
        <img src={backgroundImage} className="img-section___image" alt="" />
      </section>

      <section className="form-section">
        <div>
          <div className="form-section__header">
            <h2>Welcome,</h2>
            <p>
              Find all the details about orders, resturants and revenue here
            </p>
          </div>
          <LoginForm />
        </div>
      </section>
    </main>
  );
};

export default Login;
