import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { updateProduct } from "../calls/productCalls.js"
function UpdateProduct() {
 const [form] = Form.useForm();
 const navigate = useNavigate();
 const location = useLocation();
 const product = location.state;
 useEffect(() => {
   if (product) {
     form.setFieldsValue({
       name: product.name,
       description: product.description,
       price: product.price,
       image: product.image,
       category: product.category,
       brand: product.brand,
     });
   }
 }, [product, form]);
  const onFinish = async(values) => {
    try {
    const result = await updateProduct(product._id, values);

    console.log(result);
    navigate("/");
  } catch (error) {
    console.log(error);
  }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  if (!product) {
    return (
      <div className="page empty-state">
        <h2>No product selected</h2>
        <p>Open a product from the dashboard to edit their details.</p>
        <Button type="primary" onClick={() => navigate("/")}>
          Back to Products
        </Button>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="page-hero">
        <div>
          <h1>Update Student</h1>
          <p>Refresh contact details and keep the record current.</p>
        </div>
      </div>
      <div className="form-card">
        <Form
          name="basic"
          form={form}
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
            rules={[{ required: true, message: "Please input your category!" }]}
          >
            <Input size="large" placeholder="Enter category" />
          </Form.Item>
          <Form.Item
            label="Brand"
            name="brand"
            rules={[{ required: true, message: "Please input your brand!" }]}
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

export default UpdateProduct
