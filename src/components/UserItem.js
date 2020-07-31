import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {


    return (


        <div className="ui card col-md-6 col-sm-6 col-xs-12 col-lg-3" style={{ marginTop: '10px', padding: '10px' }}>
            <div className="image">
                <Link to={`/user/${login}`}><img src={avatar_url} className="img-thumbnail" style={{ Width: '100%', height:'270px' }} alt="description" /></Link>
            </div>
            <div className="content">
                <Link to={`/user/${login}`} className="header"><center>{login}</center></Link>
                <div className="description">
                    <a href={html_url} target="_blank" rel="noopener noreferrer"><center><button className="btn btn-sm btn-outline-success btn-block">VIEW GITHUB</button></center></a>
                </div>
            </div>
        </div>







    )


};


UserItem.propTypes = {

    user: PropTypes.object.isRequired

};

export default UserItem
