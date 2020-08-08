import React, {Component} from 'react';
import {BrowserRouter,HashRouter,Switch,Route,Link} from 'react-router-dom';
import Login from './views/Login/Index';



class App  extends Component{
   constructor()
   {
     super();

   }

    render()
    {
      return(
        <HashRouter>
           <Switch>
              <Route path="/" component={Login}></Route>
           </Switch>
        </HashRouter>
      )
    }

}

export default App;
