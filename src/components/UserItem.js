import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({user:{login, avatar_url, html_url}}) =>  {


    return (
    
         
         <div className="ui card col-md-3 col-sm-3 col-lg-3" style={{marginTop:'10px'}}>
          <div className="image">
          <img src={avatar_url} style={{width:'100%'}} alt="description" />
          </div>
          <div className="content">
          <Link to={`/user/${login}`} className="header"><center>{login}</center></Link>
          <div className="description">
              <a href={html_url} target="_blank" rel="noopener noreferrer"><center><button className="btn btn-sm btn-danger">View</button></center></a>
          </div>
          </div>
          </div>
         
          
      
     



      )


};


UserItem.propTypes = {

    user: PropTypes.object.isRequired

};

export default UserItem
