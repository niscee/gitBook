import React from 'react';
import UserItem from './UserItem';
import Spinner from '../Spinner.js';
import PropTypes from 'prop-types';

const Users = ({ users, loading }) => {
   
    if(loading)
    {
        return <Spinner />
    }
    else
    {
       return (
    
        <div>
        <div className="container" style={{marginTop:'20px'}}>
        <div className="row"> 
        {users.map(user => (


         <UserItem key={user.id} user={user} />
         


         ))}
        </div>
        </div>

        </div>

          )


   }
}

Users.propTypes = {

    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

export default Users
