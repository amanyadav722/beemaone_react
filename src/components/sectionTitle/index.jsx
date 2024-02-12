import React from 'react';
import styled from "styled-components";

const SectionTitlebata = styled.h1`
  font-size: 34px;
  font-weight: bold;
  color: #000;
  text-align: center;
  margin-top: 5px;

`;


export function SectionTitle(props) {
    return (
      <SectionTitlebata>
          Best Quality Softwares!
      </SectionTitlebata>
    );
};