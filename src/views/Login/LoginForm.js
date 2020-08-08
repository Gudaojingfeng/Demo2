
import  React, {Component,Fragment} from 'react';
import { Form, Input, Button , Row, Col} from 'antd';
import { UserOutlined, LockOutlined ,UnlockOutlined} from '@ant-design/icons';
import './index.scss';

// API
import { Login } from "../../api/account";

class LoginForm extends Component{
  constructor(props)
  {
      super(props);
      this.state={};
  }

  onFinish=values=>{
      console.log('test:'+ values);
      Login().then(response=>{console.log(response);
               }).catch(error=>{console.log(error);
               })
  }

  toggleForm=()=>{
      this.props.switchForm("register");
  }

  render()
  {
      return(
        <Fragment>
             <div className="form-header">
                    <h4 className="column">登录</h4>
                    <span onClick={this.toggleForm}>帐号注册</span>
                    </div>
             <div className="form-content">
               <Form  name="normal_login" className="login-form"  onFinish={this.onFinish} >
                    <Form.Item  name="username"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                        ]}
                    >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" /></Form.Item>
                    <Form.Item  name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                        ]}
                    > 
                    <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                    </Form.Item> 
                    <Form.Item name="code" rules={
                            [
                                { required: true, message: '验证码不能为空' },
                                { len: 6, message: '请输入长度为6位的验证码' }
                            ]}>
                            <Row gutter={13}>
                                <Col span={15}>
                                    <Input onChange={this.inputChangeCode} prefix={<UnlockOutlined className="site-form-item-icon" />} placeholder="Code" />
                                </Col>
                                <Col span={9}>
                                <Button type="danger"  block>验证码</Button>
                                </Col>
                            </Row>
                        </Form.Item>         
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" block> Log </Button>
                    </Form.Item>
                </Form>
            </div>
        </Fragment>
      )
  }

}


export  default LoginForm;

