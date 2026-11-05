import React from 'react'
import { Form, Input, Button } from 'antd';
import { Link,useNavigate } from 'react-router-dom';
import {loginUser} from "../calls/authCalls.js"

function Login() {
 const navigate=useNavigate();
 const handleLogin=async(values)=>{
  try {
    const loginData = await loginUser(values);
    console.log(loginData, "login data");

    if (loginData.success) {
      // Notify Navbar that login is successful
      window.dispatchEvent(new Event("authChange"));
      navigate("/");
    }
  } catch (error) {
    console.log(error);
  }

 }
  
   
  return (
    <div className="auth-shell">
      <div className="auth-card">
        <h1>Welcome back</h1>
        <p>Sign in to manage your product directory.</p>
        <Form
          name="basic"
          layout="vertical"
          onFinish={handleLogin}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input size="large" placeholder="you@school.edu" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password size="large" placeholder="Your password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              Login
            </Button>
          </Form.Item>
        </Form>
        <p className="auth-switch">
          New here? <Link to="/register">Create an account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login