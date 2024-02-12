import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { theme } from '../../theme';


const ArrowContainer = styled.div`
  width:46px;
  height: 46px;
  border-radius: 50%;
  background-color: rgba(113, 113, 113, 0.48);
  display: flex;
  justify-content: center;
  align-items: center; 
  cursor: pointer;

  &:hover {
      border: 2px solid ${theme.primary};
  }
`;

const ArrowIcon = styled.div`
   margin-top: 3px;
   color: #fff;
   font-size: 30px;
`; 

export function DownArrow(props) {
    return <ArrowContainer>
        <ArrowIcon>
            <FontAwesomeIcon icon={faAngleDown} />
        </ArrowIcon>
    </ArrowContainer>


}