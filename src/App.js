import React, { Component,Fragment,useState,useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/pages/About';
import Users from './components/Users';
import User from './components/pages/User';
import Search from './components/Search';
import Alert from './layouts/Alert';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// {start ? <h1>good</h1> : <p>Not good</p>}
// const start = true;
const App = () => {
  
   const[users,setUsers] = useState([]);
   const[user,setUser] = useState({});
   const[loading,setLoading] = useState(false);
   const[alert,setAlert] = useState(null);

  // async componentDidMount() {

  // 	this.setState({ loading:true });
  // 	const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CILENT_ID}&
  //     client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  	

  // 	this.setState({ users: res.data, loading:false });
  // }


  //clear users---- function passed to search component as a props and return back

const clearUsers = () => {

     setUsers([]);
     setLoading(false);
}; 

//set alert 
const showAlert = (msg,type) => {
       
      
      setAlert(msg,type);
      setTimeout(()=> setAlert(null), 2000);

};


//search github user
const searchUsers = async text => {
   
      setLoading(true);

      const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CILENT_ID}&
        client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);


      setUsers(res.data.items);
      setLoading(false);
    
  }


  //get single user
    
const getUser = async username => {
   
      setLoading(true);

      const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CILENT_ID}&
        client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);


      setUser(res.data);
      setLoading(false);
    
    
  }


  	return (

    <Router>
  		<div>
      <Navbar />
      <Alert alert={alert} />
      <Switch>
          <Route exact path='/' render={props => (
            <Fragment>
             <Search 
             searchUsers={searchUsers} 
             clearUsers={clearUsers} 
             showClear={ users.length > 0 ? true : false } 
             setAlert={showAlert} 
             />
             <Users users={users} loading={loading} />
            </Fragment>
          )} />
        <Route exact path='/about' component={About} /> 
        <Route exact path='/user/:login' render={props => (
                 <User { ...props } getUser={getUser} user={user} loading={loading} />
          )} /> 
      </Switch>
      </div>
    </Router>  

   	)
  }
 


export default App