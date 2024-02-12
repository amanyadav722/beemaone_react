import React from 'react';
import styled from 'styled-components';
import { ServicesSection } from './servicesSection';
import { TopSection } from './TopSection';

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export function Homepage(props) {
    return <div>
        <PageContainer>
            <TopSection />
            <ServicesSection />
        </PageContainer>
    </div>
}
