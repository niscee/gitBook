import React, { Fragment, useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/pages/About';
import Users from './components/Users';
import User from './components/pages/User';
import Search from './components/Search';
import Alert from './layouts/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GithubState from './context/github/GithubState';

const App = () => {


  const [alert, setAlert] = useState(null);


  //set alert 
  const showAlert = (msg, type) => {


    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 2000);

  };


return (

    <GithubState>
      <Router>
        <div>
          <Navbar />
          <Alert alert={alert} />
          <Switch>
            <Route exact path='/' render={props => (
              <Fragment>
                <Search
                  setAlert={showAlert}
                />
                <Users />
              </Fragment>
            )} />
            <Route exact path='/about' component={About} />
            <Route exact path='/user/:login' render={props => (
              <User {...props} />
            )} />
          </Switch>
        </div>
      </Router>
    </GithubState>

  )
}



export default App