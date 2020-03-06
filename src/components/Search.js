import React, { Component } from 'react';
import PropTypes from 'prop-types';

// {start ? <h1>good</h1> : <p>Not good</p>}
// const start = true;
class Search extends Component {

 state = {
   text:''
 };


static propTypes:{

   searchUsers: PropTypes.func.isRequired,
   clearUsers: PropTypes.func.isRequired,
   setAlert: PropTypes.func.isRequired
   

}

 onChange = (e) => {
    this.setState({ text: e.target.value });

 }

 onSubmit = (e) => {
    e.preventDefault();
    if(this.state.text === '')
    {
      this.props.setAlert('PLEASE ENTER SOMETHING','danger');
    }
    else
    {
      this.props.searchUsers(this.state.text);
      this.setState({text: ''});
    }
    


 }

render(){

  const { showClear, clearUsers } = this.props;

   return (

  		<div className="container" style={{marginTop:'10px'}}>
         
         <form onSubmit={this.onSubmit}>
           <input type="text" name="text" placeholder="Search Users..." value={this.state.text} className="form-control" onChange={this.onChange}/>
           <button type="submit" className="btn btn-dark btn-block btn-sm" style={{width:'100%',marginTop:'5px'}}>SEARCH</button>
         </form>
         
         { showClear && <button className="btn btn-danger btn-sm" style={{width:'100%',marginTop:'5px'}} onClick={clearUsers}>CLEAR</button>}
         

  		</div>

   	)
  }
 
}

export default Search