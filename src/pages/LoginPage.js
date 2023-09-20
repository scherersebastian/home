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
            class="input"
            name="password"
            value={password}
            type="password"
            placeholder="Type your password..."
            onChange={(e) => onChangeInput(e.target.name, e.target.value)}
          />
          <button class="button button--primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default LoginPage;
