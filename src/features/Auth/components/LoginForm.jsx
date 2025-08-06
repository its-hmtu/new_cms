import React from "react";
import useAuth from "../useAuth";
import { Form, Input, Button, Space, Card } from "antd";


function LoginForm({loading}) {
  const { logInUser } = useAuth();
  const onFinish = (values) => {
    logInUser(values);
  };
  return (
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
          disabled={loading}
        >
          <Form.Item
            name='username'
            rules={[{ required: true, message: "Please enter your username!" }]}
            label={<span className='login-item-label'>Username</span>}
          >
            <Input size='large' placeholder='Username' />
          </Form.Item>

          <Form.Item
            name='password'
            rules={[{ required: true, message: "Please enter your password!" }]}
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
              loading={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </Card>
  );
}

export default LoginForm;
