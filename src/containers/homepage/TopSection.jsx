import React from 'react';
import styled from 'styled-components';
import BackgroundImg from "../../assets/pictures/beema2.jpeg";
import { Button } from '../../components/button';
import { DownArrow } from '../../components/downArrow';
import { Logo } from '../../components/logo';
import Marginer from '../../components/marginer';
import { Navbar } from '../../components/Navbar';
import { Element } from 'react-scroll';
import { scroller } from 'react-scroll';

const TopContainer = styled.div`
   width: 100%;
   height: 100vh;
   padding: 0;
   background-image: url(${BackgroundImg});
   position: relative;
`;

const BackgroundFilter = styled.div`
   width: 100%;
   height: 100%;
   background-color: rgba(55, 55, 55, 0.80);
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const MotivationalText = styled.h1`
    font-size: 35px;
    font-weight: 550;
    line-height: 1.5;
    color: #fff;
    margin: O; 
`; 

const DownArrowContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

export function TopSection(props) {
    const scrollToNextSection = () => {
        scroller.scrollTo("servicesSection", { smooth: true, duration: 1500 });
    };

    return( 
    <Element name="topSection">
        <TopContainer>
        <BackgroundFilter>
            <Navbar />
            <Marginer direction="vertical" margin="5em"/>
           <Logo />
           <Marginer direction="vertical" margin="2em"/>
           <MotivationalText>Software Development</MotivationalText>
           <MotivationalText>From the best in the industry</MotivationalText>
           <Marginer direction="vertical" margin="2em"/>
           <Button>Start Your Own Project!</Button>
           <DownArrowContainer onClick={scrollToNextSection}>
               <DownArrow /> 
           </DownArrowContainer>
        </BackgroundFilter>
      </TopContainer>
    </Element>
  ); 
}