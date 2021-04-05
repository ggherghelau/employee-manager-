import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const AppBarStyles = styled.nav`
      box-shadow: 0 0 3px 1px grey;
      padding:1rem;
      ul{
          display:flex;
          justify-content:center;
      }
      li{
          margin: 0 1rem;
      }
      a{
         text-decoration:none;
         color:grey;
      }
`

const AppBar = () => {
    return ( 
       <AppBarStyles>
           <ul>
               <li><Link to="/">home</Link></li>
               <li><Link to="/login">login</Link></li>
               <li><Link to="/register">register</Link></li>
           </ul>
       </AppBarStyles>

     );
}
 
export default AppBar;