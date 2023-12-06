import React from 'react';
import { LockOutlined, UserOutlined, PhoneOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Tabs, Select } from 'antd';
import './login.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {login} from '../../services/auth/authSlice';

const { TabPane } = Tabs;
const { Option } = Select;
const CountrySelector = () => {
  return (
    <Select
      style={{ width: 100 }}
      defaultValue="+84"
    >
      <Option value="+84">VN +84</Option>
      <Option value="+1">USA +1</Option>
    </Select>
  );
};



const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    dispatch(login(values));
  };

  return (
    <div className="login-container">
      <video autoPlay muted loop className="background-video">
        <source src="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr" type="video/mp4" />
      </video>
      <div className="login-content">
        <div className="login-logo">
          <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="Logo" />
        </div>
        <Tabs defaultActiveKey="1" centered  className="login-tabs">
            <TabPane tab="Email" key="1">
              <Form
                name="email"
                className="login-form"
                // initialValues={{ remember: true }}
                onFinish={onFinish}
              >
                {/* Email login form items */}
                  <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                  >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Your Email" />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                  >
                    <Input.Password
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Password"
                      iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                  </Form.Item>
                  <Form.Item>
                    {/* <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item> */}

                    <a className="login-form-forgot" href="">
                      Forgot password
                    </a>
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                      Log in
                    </Button>
                    Or <a href="">register now!</a>
                  </Form.Item>
              </Form>
            </TabPane>
            <TabPane tab="Phone Number" key="2">
              <Form
                name="phone_number"
                className="login-form"
                // initialValues={{ remember: true }}
                onFinish={onFinish}
              >
                {/* Phone number login form items */}
                <Form.Item
                    name="phone_number"
                    rules={[{ required: true, message: 'Please input your Phone!' }]}
                  >
                    <Input prefix={<CountrySelector />} placeholder="Your Phone" />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                  >
                    <Input.Password
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Password"
                      iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                  </Form.Item>
                  <Form.Item>
                    {/* <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item> */}

                    <a className="login-form-forgot" href="">
                      Forgot password
                    </a>
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                      Log in
                    </Button>
                    Or <a href="">register now!</a>
                  </Form.Item>
              </Form>
            </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default LoginPage;
