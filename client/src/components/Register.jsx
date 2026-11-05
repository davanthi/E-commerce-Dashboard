import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { registerUser } from "../calls/authCalls.js";
import { useNavigate } from "react-router-dom";

function Register() {
  
  const navigate = useNavigate();
  const handleRegister = async (values) => {
    try {
      const result = await registerUser(values);

      if (result.success) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <div className="auth-shell">
      <div className="auth-card">
        <h1>Create your Cart</h1>
        <p>Register to start tracking products, contacts, and records.</p>
        <Form
          name="basic"
          layout="vertical"
          autoComplete="off"
          onFinish={handleRegister}
        >
          <Form.Item
            label="UserName"
            name="username"
            rules={[{ required: true, message: "Please Enter username!" }]}
          >
            <Input size="large" placeholder="Your name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please Enter email!" }]}
          >
            <Input size="large" placeholder="you@school.edu" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password size="large" placeholder="Create a password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              Sign up
            </Button>
          </Form.Item>
        </Form>
        <p className="auth-switch">
          Already registered? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
