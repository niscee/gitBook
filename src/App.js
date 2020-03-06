import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Users from './components/Users';
import Search from './components/Search';
import Alert from './layouts/Alert';
import axios from 'axios';

// {start ? <h1>good</h1> : <p>Not good</p>}
// const start = true;
class App extends Component {
  
  state = {

    users:[],
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
      

};


//search github user
  searchUsers = async text => {
   
      const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CILENT_ID}&
        client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);


      this.setState({ users: res.data.items, loading:false });
    
    
  }

  render(){

   const { users, loading } = this.state;

  	return (

  		<div>
      <Navbar />
      <Alert alert={this.state.alert} />
      <Search 
         searchUsers={this.searchUsers} 
         clearUsers={this.clearUsers} 
         showClear={ users.length > 0 ? 'true' : false } 
         setAlert={this.setAlert} 
      />
      <Users users={users} loading={loading} />
      </div>

   	)
  }
 
}

export default App