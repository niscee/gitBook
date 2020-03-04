import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Users from './components/Users';
import Search from './components/Search';
import axios from 'axios';

// {start ? <h1>good</h1> : <p>Not good</p>}
// const start = true;
class App extends Component {
  

  state = {

  	   users:[],
  	   loading: true
  }

  async componentDidMount() {

  	this.setState({ loading:true });
  	const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CILENT_ID}&
      client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  	

  	this.setState({ users: res.data, loading:false });
  }

  searchUsers = async text => {
    
    if(text)
    {
      const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CILENT_ID}&
      client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    
     this.setState({ users: res.data.items, loading:false });
    }
    else
    {
      this.setState({ loading:true });
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CILENT_ID}&
      client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    

    this.setState({ users: res.data, loading:false });
    }
    
  }

  render(){

   

  	return (

  		<div>
         
  		    <Navbar />
          <Search searchUsers={this.searchUsers} />
  			<Users users={this.state.users} loading={this.state.loading} />
  		</div>

   	)
  }
 
}

export default App