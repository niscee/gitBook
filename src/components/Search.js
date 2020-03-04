import React, { Component } from 'react';


// {start ? <h1>good</h1> : <p>Not good</p>}
// const start = true;
class Search extends Component {

 state = {
   text:''
 };

 onChange = (e) => {
    this.setState({ text: e.target.value });

 }

 onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({text: ''});


 }

render(){

   return (

  		<div className="container" style={{marginTop:'10px'}}>
         
         <form onSubmit={this.onSubmit}>
           <input type="text" name="text" placeholder="Search Users..." value={this.state.text} className="form-control" onChange={this.onChange}/>
           <input type="submit" value="SEARCH" className="btn btn-dark btn-block" />
         </form>

  		</div>

   	)
  }
 
}

export default Search