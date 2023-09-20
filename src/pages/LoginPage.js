import React from "react";
import Layout from "@theme/Layout";
import useForm from "../hooks/useForm";

function LoginPage() {
  const { formValues, onChangeInput, onSubmitForm } = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  return (
    <Layout title="Login Page" description="Description goes here">
      <div className="container margin-top--md">
        <div className="hero shadow--lw">
          <div className="container">
            <h1 className="hero__title">Hero Title</h1>
            <p className="hero__subtitle">Not all heroes wear capes</p>
            <div>
              <button className="button button--secondary button--outline button--lg">
                Get Started
              </button>

              <form onSubmit={onSubmitForm}>
                <input
                  name="email"
                  value={email}
                  type="email"
                  placeholder="Type your email..."
                  onChange={(e) => onChangeInput(e.target.name, e.target.value)}
                />
                <input
                  className="input"
                  name="password"
                  value={password}
                  type="password"
                  placeholder="Type your password..."
                  onChange={(e) => onChangeInput(e.target.name, e.target.value)}
                />
                <button className="button button--primary" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        <h1>Login Page</h1>

        <form onSubmit={onSubmitForm}>
          <input
            name="email"
            value={email}
            type="email"
            placeholder="Type your email..."
            onChange={(e) => onChangeInput(e.target.name, e.target.value)}
          />
          <input
            className="input"
            name="password"
            value={password}
            type="password"
            placeholder="Type your password..."
            onChange={(e) => onChangeInput(e.target.name, e.target.value)}
          />
          <button className="button button--primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default LoginPage;
