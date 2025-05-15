import { Form, Input, Button, message } from 'antd';
import { login } from '../util/api';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../components/context/auth.context';

const LoginPage = () => {
  const navigate = useNavigate();
  const {setAuth} = useContext(AuthContext);
const onFinish = async (values) => {
  try {
    const response = await login(values.email, values.password);
    console.log("Response:", response);
    console.log("Response data:", response.data);
    if (response && response.access_token) {
      // Handle successful login
      console.log("Login successful:", response);
      localStorage.setItem("accessToken", response.access_token); // Save token to local storage
      message.success("Login successful!");
      navigate("/"); // Redirect to home page

      // Update AuthContext
      setAuth({
        isAuthenticated: true,
        user: {
          email: response?.data?.email || "",
          name: response?.data?.name || "",
          role: response?.data?.role || "",
        },
      });
    } else {
      // Handle login failure
      message.error("Login failed. Please check your credentials.");
      console.error("Login failed:", response);
    }
  } catch (error) {
    // Handle unexpected errors
    message.error("An error occurred. Please try again later.");
    console.error("Error during login:", error);
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