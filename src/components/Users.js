import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../Spinner.js';
import GithubContext from '../context/github/githubContext';

const Users = () => {

   const githubContext = useContext(GithubContext);
   const { loading, users } = githubContext;

   if (loading) {
      return <Spinner />
   }
   else {
      return (

         <div>
            <div className="container" style={{ marginTop: '20px' }}>
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



export default Users
