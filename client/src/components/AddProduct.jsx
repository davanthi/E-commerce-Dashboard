import React from 'react'
import { Button, Form, Input,  } from "antd";
import { addProducts } from '../calls/productCalls.js';
import { useNavigate } from "react-router-dom";

function AddProduct() {
  
   const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const result = await addProducts(values);
      console.log(result,"result")
      navigate("/");
    } catch (error) {
      console.log("API Error:", error);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="page">
      <div className="page-hero">
        <div>
          <h1>Add product</h1>
          <p>Capture the basics so the directory stays complete.</p>
        </div>
      </div>
      <div className="form-card">
        <Form
          name="basic"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input size="large" placeholder=" name" />
          </Form.Item>

          <Form.Item
            label="description"
            name="description"
            rules={[
              { required: true, message: "Please input your description!" },
            ]}
          >
            <Input type="text" size="large" placeholder="Enter description" />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please input your price!" }]}
          >
            <Input size="large" placeholder="price" />
          </Form.Item>
          <Form.Item
            label="Image URL"
            name="image"
            rules={[
              { required: true, message: "Please input your Image URL!" },
            ]}
          >
            <Input size="large" placeholder="Image  URL" />
          </Form.Item>
          <Form.Item
            label="Category"
            name="category"
            rules={[
              { required: true, message: "Please input your category!" },
            ]}
          >
            <Input size="large" placeholder="Enter category" />
          </Form.Item>
          <Form.Item
            label="Brand"
            name="brand"
            rules={[
              { required: true, message: "Please input your brand!" },
            ]}
          >
            <Input size="large" placeholder="Enter brand" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large">
              Save Product
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default AddProduct