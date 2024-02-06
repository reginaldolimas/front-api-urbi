import React, { useState } from 'react';
import { obterListaDeProcessos } from '../../services/apiService';
import { Button, Checkbox, Form, Input, Row, Col, Typography, Divider, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { FacebookFilled, GoogleOutlined, TwitterOutlined } from '@ant-design/icons';

export function Login() {
    const [token, setToken] = useState('Token');
    const [erroMensage, setErrorMensage] = useState('');
    const navigate = useNavigate();

    const onFinish = async (values) => {
        console.log('Success:', values);

        //Função GetToken --- 1º Rota
        /*    try {
               const response = await getToken(values.username, values.password);
               console.log(response);
               setToken(response);
           } catch (error) {
               console.error('Error:', error);
           } */

        //Função obterListaDeProcessos --- 2º Rota
        try {
            const response = await obterListaDeProcessos(values.username, values.password, '63389487387');
            const objetoString = JSON.stringify(response);
            setToken(objetoString);
            navigate('/home');
        } catch (error) {
            console.error('Errorrrrrrrrr:', error);
            setErrorMensage(error.message);
        }

    };
    const onFinishFailed = (errorInfo) => {
        erroMensage && message.error(erroMensage);
        console.log('Failed:', errorInfo);
    };

    const handleLogin = () => {
        message.success('Login Success!!')
    }

    return (
        <div className='loginContainer'>
        <Row justify="center" align="middle" style={{ minHeight: '100vh', minWidth: '1000px' }}>
            <Col span={6}>
                <Form
                    align='left'
                    className='loginForm'
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 18,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="on"
                >
                <Typography.Title align='center'>Login</Typography.Title>
                    <Form.Item
                        label="Usuário"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Por favor insira seu usuário!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Senha"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Por favor insira sua senha!',
                            },
                        ]}
                    >
                        <Input.Password />


                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Lembra senha</Checkbox>
                    </Form.Item>

                    <Form.Item 
                    wrapperCol={{
                        offset: 0,
                        span: 24,
                    }}
                    >
                      
                        <Button type="primary" htmlType="submit" block>
                            Login
                        </Button>
                        {erroMensage && (
                            <>
                            <br/>
                            <br/>
                            <span style={{ color: 'red', minHeight: '150px', textAlign: 'justify' }}>{erroMensage}</span>
                            </>
                        )}
                    </Form.Item>
                    <Divider style={{border: 'black'}}>Ou logue com:</Divider>
                    <div className='socialLogin'>
                    <GoogleOutlined className='socialIcon' onClick={handleLogin} />
                    <FacebookFilled className='socialIcon' onClick={handleLogin} />
                    <TwitterOutlined className='socialIcon' onClick={handleLogin} />
                    </div>
                </Form>
            </Col>
        </Row>
    </div>
    );
} 