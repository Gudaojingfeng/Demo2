import  React,{Component} from "react";
import LoginForm  from './LoginForm';
import RetisterForm  from './RegisterForm';
import './index.scss';


export default class Index extends Component{
    constructor(){
        super();
        this.state = {
            formType: "login"
        };
    }


    switchForm = (value) => {
        this.setState({
            formType: value
        })
    }

    render(){
        return( 
            <div className="form-wrap">
                <div>
                    {
                    this.state.formType === 'login' 
                    ? <LoginForm switchForm={this.switchForm}></LoginForm> 
                    : <RetisterForm switchForm={this.switchForm}></RetisterForm>
                     }
                    </div>
            </div>
            )
       
    }
}