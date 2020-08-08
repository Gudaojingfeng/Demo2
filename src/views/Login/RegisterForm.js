
import  React, {Component,Fragment} from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.scss';
class RetisterForm extends Component{
  constructor()
  {
      super();
  }

  onFinish=values=>{
    console.log('test:'+ values);
}

toogleForm = () => {
    // 调父级的方法
    this.props.switchForm("login");
}
  render()
  {
      return(
        <Fragment>
                <div className="form-header">
                    <h4 className="column">注册</h4>
                    <span onClick={this.toogleForm}>登录</span>
                </div>
             <div className="form-content">
               <Form  name="normal_login" className="login-form"  onFinish={this.onFinish.bind(this)} >
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
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" block> Log </Button>
                    </Form.Item>
                </Form>
            </div>
        </Fragment>
      )
  }

}


export  default  RetisterForm;

