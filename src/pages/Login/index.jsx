import React, { useLayoutEffect } from "react";
import { Form, Input, Button, Space, Card } from "antd";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import useAuth from "@/features/Auth/useAuth";
import PATH from "@/configs/paths/PATH";
import useActionLoader from "@/features/Outlet/useActionLoader";

function Login() {
  const navigate = useNavigate();
  const { isAuthenticated, logInUser } = useAuth();
  const isLoading = useActionLoader("auth/loginUser");

  useLayoutEffect(() => {
    if (isAuthenticated) {
      navigate(PATH.HOME, { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const onFinish = (values) => {
    logInUser(values);
  };

  return (
    <div className='login-container'>
      <Card className='login-card'>
        <Space className='login-inner-container' direction='vertical'>
          <div className='login-logo-container'>
            <img src='/logo.png' alt='CMS Magic Wheel' className='' />
          </div>
          <Form
            name='login'
            onFinish={onFinish}
            layout='vertical'
            requiredMark={false}
            disabled={isLoading}
          >
            <Form.Item
              name='username'
              rules={[
                { required: true, message: "Please enter your username!" },
              ]}
              label={<span className='login-item-label'>Username</span>}
            >
              <Input size='large' placeholder='Username' />
            </Form.Item>

            <Form.Item
              name='password'
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
              label={<span className='login-item-label'>Password</span>}
            >
              <Input.Password size='large' placeholder='Password' />
            </Form.Item>

            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                size='large'
                block
                iconPosition='end'
                className='login-button'
                loading={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </Card>
    </div>
  );
}

export default Login;
