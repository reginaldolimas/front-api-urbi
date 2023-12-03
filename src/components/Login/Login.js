import React, { useState } from 'react';
import { getToken, obterListaDeProcessos } from '../../services/apiService';
import { Button, Checkbox, Form, Input } from 'antd';
import './Login.css';

export function Login() {
    const [token, setToken] = useState('Token');

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
                console.log('response', response);
                const objetoString = JSON.stringify(response);
                console.log('objetoString', objetoString)
                setToken(objetoString);

            } catch (error) {
                console.error('Error:', error);
            }



    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (

        <>
        <div className='login--token'><h1>{token}</h1></div>
            
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >

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
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

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
        </>
    );
} 