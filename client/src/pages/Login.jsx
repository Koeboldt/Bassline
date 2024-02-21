import { Form, Input, Button } from 'antd';



const Login = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <div>
      <h1>Please Login</h1>
      <Form onFinish={onFinish}>
        <Form.Item
          label="Username"
          name="username"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
              <Button type="primary" htmlType="submit" >
                Log in
              </Button>
          <br></br>If you do not have an account, please <a href="/Signup">sign up!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;

