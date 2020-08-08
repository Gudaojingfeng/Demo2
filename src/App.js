import React, {Component} from 'react';
import { Button } from 'antd';

// API
import { Login } from "../src/api/account";

class App  extends Component{
   constructor()
   {
     super();

   }

   onclickTest(values)
      {
        Login(values).then(response => {  // resolves
          console.log(response);
        }).catch(error => {  // reject
          console.log(error)
        })
        console.log('Received values of form: ', values);
      };


    render()
    {
      return (
        <div className="App">
              Learn React
              <Button    onClick={this.onclickTest.bind(this)} type="primary">Primary Button</Button>
        </div>
      )
    }

}

export default App;
