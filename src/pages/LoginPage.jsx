import React from 'react';
import styled from 'styled-components'

import FormInput from './../components/forms/FormInput'
import Button from './../components/buttons/Button'
                  

const LoginPageStyles = styled.aside ` 

   max-width: 380px;
   margin: 6rem auto 0;

   h1{
       font-size: 2.25rem;
   }
       
`

const LoginPage = (props) => {
    return (
         <LoginPageStyles>
            <header><h1>Login Page</h1></header>
            <FormInput type="text" label="email"/>
            <FormInput type="text" label="password"/>
            <Button label="login" uiStyles="login"/>
         </LoginPageStyles>
  

      );
}

export default LoginPage;

 



 



 