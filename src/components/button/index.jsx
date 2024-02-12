import React from 'react'
import { theme } from '../../theme';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
   padding: ${({ small }) => (small ? "3px 7px" : "7px 15px")};
   border-radius: 5px;
   background-color: ${theme.primary};
   color: #fff;
   font-weight: bold;
   font-size: ${({ small }) => (small ? "12px" : "16px")};
   border: 2px solid transparent;
   transition: all 220ms ease-in-out;
   cursor: pointer;

   &:hover {
       background-color: transparent;
       border: 2px solid ${theme.primary};
   }
`;

export function Button(props) {
    return <ButtonWrapper {...props}>
        {props.children}
    </ButtonWrapper>

}