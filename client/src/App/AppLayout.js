import React from 'react';
import { Container } from '@material-ui/core';
import styled from 'styled-components';

import Header from './components/Header';
import Footer from './components/Footer';

const StyledContainer = styled.div`
  min-height: calc(100vh - 168px);
  margin-top: 20px;
  margin-bottom: 20px;
`;

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <StyledContainer>
        <Container>{children}</Container>
      </StyledContainer>
      <Footer />
    </>
  );
};

export default AppLayout;
