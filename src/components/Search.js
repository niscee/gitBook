import React, {  useState,useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../context/github/githubContext';


const Search = ({ setAlert }) => {

 const githubContext = useContext(GithubContext);


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
      githubContext.searchUsers(text);
      setText('');
    }
    


 }

 

   return (

  		<div className="container" style={{marginTop:'10px'}}>
         
         <form onSubmit={onSubmit}>
           <input type="text" name="text" placeholder="search users....." value={text} className="form-control" onChange={onChange}/>
           <button type="submit" className="btn btn-dark btn-block btn-sm" style={{width:'100%',marginTop:'5px'}}>SEARCH</button>
         </form>
         
         { githubContext.users.length > 0 && (
          <button className="btn btn-danger btn-sm" style={{width:'100%',marginTop:'5px'}} onClick={githubContext.clearUsers}>
          CLEAR
          </button>
          )}
         
         

  		</div>

   	)
  }
 



Search.propTypes = {

   
   setAlert: PropTypes.func.isRequired
   

}

export default Search