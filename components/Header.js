import React from 'react';
import {Dropdown, Menu} from 'semantic-ui-react';
import {Link} from '../routes';


export default () =>{
  return(
    <Menu style={{marginTop:'10px'}}>
    <Link route="/">
    <a className="item">Home</a>
    </Link>

  
    </Menu>
  );
};
