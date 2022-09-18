import React from 'react';
import { Form, Input, Button, Checkbox, Card } from 'antd';
import './login.css';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/auth.action';
import { Navigate } from 'react-router';
import { imageBacground } from '../../asset/5247.jpg';

export default function Login() {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.auth);
	console.log(state);

	const onFinish = (values) => {
		console.log('Success:', values);
		dispatch(
			login({
				email: values.email,
				password: values.password,
			}),
		);
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	if (state.token) return <Navigate to='/dashboard' />;

	return (
		<div
			className='login-page'
			style={{
				// backgroundImage: `url('https://www.utihouse.com/wp-content/uploads/2015/10/Shop-%C4%91i%E1%BB%87n-tho%E1%BA%A1i-%C4%91%E1%BA%B9p-1-1024x616.jpg')`,
				backgroundImage: `url('https://bizweb.dktcdn.net/100/438/408/themes/863105/assets/bg_login.jpg?1659761763056')`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
			}}
		>
			<Card className='login-form'>
				<div className='header'>
					<div
						className='logo'
						style={{
							color: '#4267b2',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							fontWeight: 'bold',
							fontSize: 28,
						}}
					>
						YOLO
					</div>
					<h1>ĐĂNG NHẬP HỆ THỐNG</h1>
					<p>Trang dành cho quản trị viên</p>
				</div>
				<Form
					name='basic'
					initialValues={{
						remember: true,
					}}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete='off'
				>
					<Form.Item
						label='Tài khoản'
						name='email'
						rules={[
							{
								required: true,
								message: 'Vui lòng nhập tài khoản.',
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label='Mật khẩu'
						name='password'
						rules={[
							{
								required: true,
								message: 'Vui lòng nhập mật khẩu',
							},
						]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item>
						<Button type='primary' htmlType='submit'>
							Đăng nhập
						</Button>
					</Form.Item>
				</Form>
			</Card>
		</div>
	);
}
