import React, { useEffect, useContext } from 'react';
import Spinner from '../../Spinner.js';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {

	const githubContext = useContext(GithubContext);

	useEffect(() => {

		githubContext.getUser(match.params.login);

	}, []);




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
	} = githubContext.user;


    const company_name = company
	if (githubContext.loading) return <Spinner />

	return (

		<div className="container" style={{ marginTop: '20px' }}>
			<div style={{ margin: 'auto', width: '90%' }}>
				<Link to='/' className='btn btn-outline-success btn-block' style={{ marginBottom: '10px' }}>Back</Link>
			</div>

			<div className="ui raised card" style={{ margin:'auto', width:'90%', height:'550px', overflow:'scroll' }}>
				<div className="content">
					<div className="header" style={{ textAlign:'center' }}>{name}</div>
					<div className="meta" style={{ marginTop: '10px' }}>
						<img className="ui avatar image center" src={avatar_url} style={{ width:'300px', height:'300px', margin:'auto', display:'block' }} alt='user_profile' />
					</div>
					<div className="description" style={{ marginTop:'20px' }}>
						<p style={{textAlign:'center'}}>{bio}</p>
					</div>
				</div>
				<div className="extra content">
					<div className="left floated author" style={{ fontWeight:'bold' }}>
						<p>Public Repos:&nbsp;&nbsp;{public_repos}</p>
	                    <p>Company:&nbsp;&nbsp;{ !company_name && ("N/A") }{company}</p>
						<p>Location:&nbsp;&nbsp;{location}</p>
					</div>
					<div className="right floated author">
						<div className="ui red tag label" style={{display:'block'}}>Follower:&nbsp;{followers}</div>
						<div className="ui teal tag label" style={{display:'block', marginTop:'5px'}}>Following:&nbsp;{following}</div>
					</div>
				</div>
			</div>
		</div>



	)


}


User.propTypes = {

	// loading: PropTypes.bool.isRequired,


}

export default User