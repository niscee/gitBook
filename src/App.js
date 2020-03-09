import React, { Component,Fragment } from 'react';
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
class App extends Component {
  
  state = {

    users:[],
    user:{},
    loading: false,
    alert: null
  }

  // async componentDidMount() {

  // 	this.setState({ loading:true });
  // 	const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CILENT_ID}&
  //     client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  	

  // 	this.setState({ users: res.data, loading:false });
  // }


  //clear users---- function passed to search component as a props and return back

clearUsers = () => {

     this.setState({ users:[], loading:false });
}; 

//set alert 
setAlert = (msg,type) => {
       
      
      this.setState({ alert: {msg:msg, type:type} });
      setTimeout(()=> this.setState({alert: null}), 2000);

};


//search github user
  searchUsers = async text => {
   
      this.setState({ loading:true });

      const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CILENT_ID}&
        client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);


      this.setState({ users: res.data.items, loading:false });
    
    
  }


  //get signle user
    
  getUser = async username => {
   
      this.setState({ loading:true });

      const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CILENT_ID}&
        client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);


      this.setState({ user: res.data, loading:false });
    
    
  }






  render(){

   const { users, loading, user } = this.state;

  	return (

    <Router>
  		<div>
      <Navbar />
      <Alert alert={this.state.alert} />
      <Switch>
          <Route exact path='/' render={props => (
            <Fragment>
             <Search 
             searchUsers={this.searchUsers} 
             clearUsers={this.clearUsers} 
             showClear={ users.length > 0 ? true : false } 
             setAlert={this.setAlert} 
             />
             <Users users={users} loading={loading} />
            </Fragment>
          )} />
        <Route exact path='/about' component={About} /> 
        <Route exact path='/user/:login' render={props => (
                 <User { ...props } getUser={this.getUser} user={user} loading={loading} />
          )} /> 
      </Switch>
      </div>
    </Router>  

   	)
  }
 
}

export default App