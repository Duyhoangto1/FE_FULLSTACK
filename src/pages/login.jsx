
import { Form, Input, Button } from 'antd';

import { login } from '../util/api';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
  const onFinish = async (values) => {
    const response =  await login(
      values.email,
      values.password       
  )
  console.log('Response:', response);
    if (response) {
      // Handle successful login (e.g., store token, redirect)
      console.log('Login successful:', response);
      navigate('/');  // Redirect to home page after successful login
    } else {
      // Handle login failure (e.g., show error message)
      console.error('Login failed:', response);
    }

};


  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h1>Login Page</h1>
      <p>Please enter your credentials to log in.</p>
      <Form
        name="login"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
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
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;