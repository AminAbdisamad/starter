import { Form, Input, Button, Checkbox } from "antd";
import { useAuth } from "utils/globalState";
import { setAccessToken } from "utils/security";
import { useMutation, gql } from "@apollo/client";
import * as React from "react";
import { useRouter } from "next/router";
// Login Mutation

const LOGIN = gql`
  mutation LOGIN($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        email
        username
        name
      }
      token
    }
  }
`;

const LoginForm = () => {
  const [login, { data, loading, error }] = useMutation(LOGIN, {
    errorPolicy: "all",
  });
  const { setUserInfo } = useAuth();
  const router = useRouter();
  const { setAuthToken } = useAuth();

  // If there's error logging in return to login form

  const onFinish = async (values: any) => {
    const res = await login({
      variables: values,
      // update(store, { data }) {
      //   if (!data) return null;
      //   data.login.user;
      // },
    });
    console.log({ res });
    console.log({ error });
    if (!res.errors) {
      router.push("/dashboard");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const token = data?.login.token;
  React.useEffect(() => {
    setAccessToken(token);
    setAuthToken(token);
    setUserInfo(data?.login.user);
  }, [token]);

  if (loading) return <div>Loading..</div>;

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {error && <div> {error.message}</div>}
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input type="email" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      {/* <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
