import AuthContext from 'auth/AuthContext';
import React, {useContext, useState} from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components'
 


const DashBoardStyles = styled.header ` 
      display:flex;
`

const SideBar = styled.aside `
position:relative;
z-index:1;  
width: 256px;
box-shadow: 0 0 5px 0 grey;
height: calc(100vh - 64px);
padding: 2rem;
header{
    margin-bottom:1rem;
    font-size: 13px;
}
h1{
    font-size: 1.25rem;
    font-weight:bold;

}
li{
    opacity:0.7;
    font-size: 12px;
    margin-bottom: 0.35rem;
}
`

const Panels = styled.aside `  
flex:1;
background:#f3f3f3;
height: calc(100vh - 64px);
/* width: calc(100% - 256px); */
`
const DashBoard = (props) => {
    const auth = useContext(AuthContext)
    console.log("Dashboard Render")
    console.log(auth)

    if(auth.isUser){
        return ( 
            <DashBoardStyles>
              <SideBar>
                  <header>
                      <h1>Firebase Whats App</h1>
                      <p>firebase who new</p>
                  </header>
                  <ul>
                      <li>view all</li>
                      <li>add</li>
                      <li>remove</li>
                      <li>edit</li>
                  </ul>
              </SideBar>
              <Panels></Panels>
    
            </DashBoardStyles>
         );
    }else{
        return <Redirect to="/login"/>
    }     
    
        
}
 
export default DashBoard;