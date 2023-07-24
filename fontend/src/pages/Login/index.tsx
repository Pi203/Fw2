import { Button, Form, Input,notification,} from "antd";
import { useNavigate } from "react-router-dom";
import { setProfileToLS } from "../../utils";
import { login } from "../../api/auth";
import { TResError } from "../../interfaces/common.type";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

export function Login() {
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    const { email, password } = values;
    try {
      const { data } = await login({ email, password });
      if (!data.data) return;
      setProfileToLS(data.data);
      navigate("/");
    } catch (error) {
      notification.error({
        message: (error as TResError).message,
      });
    }
  };

  return (
    <div className="">
      <Form
        style={{ width: 500, margin: '0 auto' }}
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <h1 className="text-[24px] font-bold">SIGN IN</h1>

        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Vui lòng nhập email của bạn!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} type="email" placeholder="text@gmail.com" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Vui lòng nhập Mật khẩu của bạn!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button style={{ marginRight: 12, backgroundColor: 'red' }} type="primary" htmlType="submit" className="login-form-button">
            Sign in
          </Button>
          Or <a style={{ marginLeft: 12 }} href="/signup">signup</a>
        </Form.Item>
      </Form>
    </div>
  );
}