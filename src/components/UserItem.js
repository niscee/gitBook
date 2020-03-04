import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({user:{login, avatar_url, html_url}}) =>  {


    return (
    
         
         <div className="ui card col-md-3 col-sm-3 col-lg-3" style={{marginTop:'10px'}}>
          <div className="image">
          <img src={avatar_url} style={{width:'100%'}} alt="description" />
          </div>
          <div className="content">
          <a className="header" href="www.facebook.com"><center>{login}</center></a>
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
