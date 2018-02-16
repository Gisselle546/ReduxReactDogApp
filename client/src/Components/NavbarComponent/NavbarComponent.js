import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import{NavLink} from 'react-router-dom'


class NavbarComponent extends Component {

  render() {


      return (

          <Menu inverted >
            <Menu.Item as={NavLink} to="/" ><i className="fas fa-paw"> Fur Babies Rescue</i></Menu.Item>
            <Menu.Item as={NavLink} to="/api/puppy"name='Find Dogs'  />
            <Menu.Menu position='right'>
            <Menu.Item as={NavLink} to="/adopthere" name='Adopt here'  />
            </Menu.Menu>
          </Menu>

      )
    }


}

export default NavbarComponent;
