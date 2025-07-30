import React, { useLayoutEffect } from "react";
import { Form, Input, Button, Space, Card, notification } from "antd";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import useAuth from "@/features/Auth/hooks/useAuth";
import PATH from "@/configs/paths/PATH";
import { loginUser } from "@/features/Auth/auth.thunks";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const { isAuthenticated, loading, error, logInUser, clearAuthError } =
    useAuth();

  useLayoutEffect(() => {
    if (isAuthenticated) {
      navigate(PATH.HOME, { replace: true });
    }
  }, [isAuthenticated]);

  const onFinish = async (values) => {
    try {
      clearAuthError();
      const result = await logInUser(values);
      if (result.type === loginUser.rejected.type) {
        toast.error(
          <div className='login-error-container'>
            <strong>Login Failed</strong>
            <div className='login-error-message'>{result.payload}</div>
          </div>,
          {
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            progress: undefined,
          }
        );
      }

      if (result.type === loginUser.fulfilled.type) {
        navigate(PATH.HOME, { replace: true });
      }

    } catch (error) {
      console.log(error)
      toast.error("An unexpected error occurred. Please try again later.", {
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className='login-container'>
      <Card className='login-card'>
        <Space className='login-inner-container' direction='vertical'>
          <div className='login-logo-container'>
            <img
              src='/logo.png'
              alt='CMS Magic Wheel'
              className=''
            />
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
                loading={loading}
                iconPosition='end'
                className='login-button'
              >
                {loading ? "Logging in..." : "Login"}
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </Card>
    </div>
  );
}

export default Login;
