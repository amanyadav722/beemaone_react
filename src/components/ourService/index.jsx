import React from 'react';
import styled from 'styled-components';
import Marginer from '../marginer';


const ServiceContainer =styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ isReversed }) => isReversed && "row-reversess"};
  margin-bottom: 2em;
`;

const ServiceImg = styled.img`
  width: 17em;
  height: 12em;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60%;
`;

const Title = styled.h2`
  color: #000;
  font-size: 28px;
  font-weight: 700;
  margin: 5px 0;
`;

const Details = styled.p`
  color: #7A7A7A;
  font-size: 19px;
  text-align: center;
  max-width: 70%;
  align-items: center;
  justify-content: flex-start;
`;

export function OurService(props) {
    const { title, description, imgUrl, isReversed } = props;

    return (
        <ServiceContainer is isReversed={isReversed}>
            <DescriptionContainer>
                <Title>{title}</Title>
                <Marginer direction="vertical" margin="18px" />
                <Details>{description}</Details>
            </DescriptionContainer>
            <ServiceImg src={imgUrl}/>
        </ServiceContainer>

    );
}
