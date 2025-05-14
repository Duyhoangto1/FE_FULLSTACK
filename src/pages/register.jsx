import { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { createUserAPI } from '../util/api';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [loading, setLoading] = useState(false);
const navigate = useNavigate();
  const onFinish = async (values) => {
    setLoading(true);  // Set loading state while submitting
    try {
      const response = await createUserAPI(
        values.name,
        values.email,
        values.password
      );
      console.log('Response:', response);
      
     if (response) {
 message.success('Registration successful!');
 navigate('/login');  // Redirect to home page after successful registration
 
     } else {
        message.error('Registration failed. Please try again.');
      }
     
       
     
    } catch (error) {
      message.error('An error occurred. Please try again later.');
    } finally {
      setLoading(false);  // Reset loading state after the request is complete
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h1>Register</h1>
      <Form
        name="register"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please enter a valid email!' },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
