import React from 'react';

const Alert = ({ alert }) => {

  return (

         alert !== null && (
                 
            <div className="container">     
         	<div className={`alert alert-${alert.type}`} style={{height:'50px',marginTop:'10px'}}>
         	   <p style={{textAlign:'center'}}>{alert.msg}</p>
         	</div>
         	</div>
               
         	)


  	)

}

export default Alert