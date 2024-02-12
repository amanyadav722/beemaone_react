import React from 'react'
import { Element } from 'react-scroll';
import styled from 'styled-components';
import { OurService } from '../../components/ourService';
import { SectionTitle } from '../../components/sectionTitle';
import Marginer from '../../components/marginer';
import ServiceBalaImg from "../../assets/pictures/beema1.jpeg";


const ServicesConatiner = styled(Element)`
  width: 100%;
  min-height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10em 0;
`;

export function ServicesSection(props) {
    return (
    <ServicesConatiner name="servicesSection">
        <SectionTitle />
        <Marginer direction="vertical" margin="3em"/>
        <OurService 
        title="Fully integrated services" 
        description="Hello there I am the 
        boss of the nepal." 
        imgUrl={ServiceBalaImg}
        isReversed
        />
        <OurService 
        title="Fully integrated services" 
        description="Hello there I am the 
        boss of the nepal." 
        imgUrl={ServiceBalaImg}
        />
        <OurService 
        title="Fully integrated services" 
        description="Hello there I am the 
        boss of the nepal." 
        imgUrl={ServiceBalaImg}
        />
    </ServicesConatiner>
   );
}

