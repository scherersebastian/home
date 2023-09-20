import React from "react";
import Layout from "@theme/Layout";

import useForm from "../hooks/useForm";

function LoginPage() {
  const { user, onChangeInput, onSubmitForm } = useForm({
    email: "",
    password: "",
  });

  const { email, password } = user;

  return (
    <Layout title="Login Page" description="Description goes here">
      <div className="home">
        <div className="container">
          <h1>Login Page</h1>

          <form onSubmit={onSubmitForm}>
            <input
              name="email"
              value={email}
              type="email"
              placeholder="Type your email..."
              onChange={(e) => onChangeInput(e)}
            />
            <input
              name="password"
              value={password}
              type="password"
              placeholder="Type your password..."
              onChange={(e) => onChangeInput(e)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default LoginPage;
