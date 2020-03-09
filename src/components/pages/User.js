import React, { Component } from 'react';
import Spinner from '../../Spinner.js';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class User extends Component{

   componentDidMount(){
   	  this.props.getUser(this.props.match.params.login);
   }

   static propTypes = {

      loading: PropTypes.bool.isRequired,
      user: PropTypes.object.isRequired,
      getUser: PropTypes.func.isRequired

   }

  render(){
         
        const {
        	name,
        	avatar_url,
        	location,
        	bio,
        	login,
        	followers,
        	following,
        	public_repos,
        	company
        } = this.props.user;

        const {loading} = this.props;

        if (loading) return <Spinner />
        
        return (
            
            <div className="container" style={{marginTop:'20px'}}> 
            <Link to='/' className='btn btn-light'>Back To Home</Link>
        	<div className="ui raised card" style={{margin:'auto',width:'400px',height:'300px'}}>
        	<div className="content">
        	<div className="header">{login}</div>
        	<div className="meta" style={{marginTop:'10px'}}>
        	<div className="ui red tag label">Follower:&nbsp;{followers}</div>
            <div className="ui teal tag label">Following:&nbsp;{following}</div>
        	</div>
        	<div className="description" style={{marginTop:'20px'}}>
        	<p>{bio}</p>
        	</div>
        	</div>
        	<div className="extra content">
        	<div className="left floated author">
        	<p>Public_repos:{public_repos}</p>
        	<p>Company:{company}</p>
        	<p>Location:{location}</p>
        	</div>
        	<div className="right floated author">
        	<img className="ui avatar image" src={avatar_url} style={{width:'60px',height:'60px'}} alt='user_profile' />{name}
        	</div>
        	</div>
        	</div>
        	</div>



        	)
               

    }

}


export default User