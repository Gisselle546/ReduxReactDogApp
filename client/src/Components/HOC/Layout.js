import React from 'react';
import NavbarComponent from '../NavbarComponent/NavbarComponent';
import Auxiliary from '../../Auxiliary'

const Layout=(props)=>(

      <Auxiliary>
        <NavbarComponent/>
      <main>
          {props.children}
      </main>

      </Auxiliary>


)

export default Layout;
