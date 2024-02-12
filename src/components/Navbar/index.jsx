import React from 'react';
import styled from 'styled-components';
import BeemaNavLogo from "../../assets/logo/transparentlogo1.png";
import { Button } from '../button';
import Marginer from '../marginer';


const NavbarContainer = styled.div`
   width: 100%;
   height: 68px;
   padding: 0 2em;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

const Logo2Img = styled.img`
   width: 70px;
   height: 35px;
   display: flex;
`;

const Logo2Text = styled.h2`
   font-size: 30px;
   font-weight: 600;
   display: flex;
`;

const BrandContainer = styled.div`
   
`;

const AccessibiltyContainer= styled.div`
   display: flex;
   flex-direction: row;  
`;

const LoginButton = styled.div`
   background-color: transparent;
   border: none;
   color: #fff;

   &:hover {
       background-color: transparent;
       border: none;
       color: rgb(212, 212, 212);
   }
`;

export function Navbar(props) {
    return <NavbarContainer>
        <BrandContainer>
        <Logo2Img src={BeemaNavLogo} />
         <Logo2Text>Beema</Logo2Text>
        </BrandContainer>
        <AccessibiltyContainer>
            <Button small >Get Started!</Button>
            <Marginer direction="vertical" margin="8px"/>
            <Marginer direction="horizontal" margin="6px"/>
            <LoginButton> Login </LoginButton>
        </AccessibiltyContainer>
    </NavbarContainer>
}
