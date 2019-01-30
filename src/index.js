console.log(' React Webpack Babel Setup');
import React from 'react';
import ReactDOM from 'react-dom';
import { Route,Router,browserHistory } from 'react-router';
import {Create} from './components/Create';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './index.css';

//import { NameForm } from './components/formdata';
import Root  from './Root';
import { Home }from './components/Home';
import { Header } from './components/Header';

class App extends React.Component {
    render(){
        return(
            // <Router history={browserHistory}>
            //   <Route path={"create"} component="Create"/>
            // </Router>
            <div className ="container">
                <div className="row">
                    <div className="col-md-12">
                        <Root>
                          <Home></Home>
                        </Root>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    </div>
                </div>
            </div>
        )
    }
}


ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

module.hot.accept();