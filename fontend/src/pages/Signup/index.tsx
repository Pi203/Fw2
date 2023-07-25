import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

import { useNavigate } from 'react-router-dom';
import { Signup } from '../../api/user';
const SignupPage = () => {
    const navigate = useNavigate()
    const onFinish = (values: any) => {
        Signup(values).then(() => alert('đăng ký thành công'))
        .then(()=>navigate('/signin'))
        .catch(() => console.log('lỗi')
        )
    };
    return (
        <div className='mt-28'>
            <Form style={{ width: 500, margin: '0 auto' }}
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <h1 className='text-[24px] font-bold'>SIGN UP</h1>
                <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Vui lòng nhập Tên người dùng của bạn!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Vui lòng nhập email của bạn!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} type='email' placeholder="text@gmail.com" />
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
                <Form.Item
                name="confirmPassword"
                    rules={[{ required: true, message: 'Vui lòng nhập mật khẩu xác nhận của bạn!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="confirmPassword"       

                    />
                </Form.Item>
               

                <Form.Item>
                    <Button style={{marginRight:12, backgroundColor:'red'}} type="primary"  htmlType="submit" className="login-form-button">
                        Sign up
                    </Button>
                    Or <a style={{marginLeft:12 , backgroundColor:'green'}} className="px-4 py-2 rounded-lg" href="/signin">signin</a>
                </Form.Item>
            </Form>
        </div>
    )
}

export default SignupPage