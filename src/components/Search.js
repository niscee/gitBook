import React, {  useState } from 'react';
import PropTypes from 'prop-types';

// {start ? <h1>good</h1> : <p>Not good</p>}
// const start = true;
const Search = ({ showClear,clearUsers,setAlert,searchUsers }) => {

 const [text,setText] = useState(''); 

 const onChange = (e) => {
    setText(e.target.value);

 }

 const onSubmit = (e) => {
    e.preventDefault();
    if(text === '')
    {
      setAlert('PLEASE ENTER SOMETHING','danger');
    }
    else
    {
      searchUsers(text);
      setText('');
    }
    


 }

 

   return (

  		<div className="container" style={{marginTop:'10px'}}>
         
         <form onSubmit={onSubmit}>
           <input type="text" name="text" placeholder="Search Users..." value={text} className="form-control" onChange={onChange}/>
           <button type="submit" className="btn btn-dark btn-block btn-sm" style={{width:'100%',marginTop:'5px'}}>SEARCH</button>
         </form>
         
         { showClear && <button className="btn btn-danger btn-sm" style={{width:'100%',marginTop:'5px'}} onClick={clearUsers}>CLEAR</button>}
         

  		</div>

   	)
  }
 



Search.propTypes = {

   searchUsers: PropTypes.func.isRequired,
   clearUsers: PropTypes.func.isRequired,
   setAlert: PropTypes.func.isRequired
   

}

export default Search