import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {


    return (


        <div className="col-md-6 col-sm-6 col-xs-6 col-lg-3" style={{ marginTop: '10px' }}>
          <div className="card" style={{ padding:'10px' }}>
                <Link to={`/user/${login}`}><img src={avatar_url} className="img-thumbnail" style={{ Width: '100%', height: '260px', padding:'5px', margin:'auto', display:'block' }} alt="description" /></Link>
                <div className="card-body">
                    <Link to={`/user/${login}`}><h4 className="card-title" style={{ textAlign:'center', color:'#343a40', marginBottom:'10px' }}>{login}</h4></Link>
                    <p><a href={html_url} target="_blank" rel="noopener noreferrer"><button className="btn btn-sm btn-outline-success btn-block">VIEW GITHUB</button></a></p>
                </div>
            </div>
        </div>
    )


};


UserItem.propTypes = {

    user: PropTypes.object.isRequired

};

export default UserItem
