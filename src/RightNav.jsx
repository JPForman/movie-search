import React from 'react';
import {Link} from 'react-router-dom';


function RightNav(){

  const navLink= {
    float: 'right',
    margin: '5px'
  }
  const link= {
    color: 'black',
    textShadow: '1px 1px darkgrey',
    fontWeight: 'bold'
  }

  return(
    <div className="nav">
      <div style={navLink}>
        <Link to='/home' style={link}>LogIn</Link>
      </div>

      <div style={navLink}>
        <Link to='/aboutUs' style={link}>SignUp</Link>
      </div>

    </div>
  );
}

export default RightNav;
