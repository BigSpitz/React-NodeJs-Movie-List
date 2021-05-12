import React from 'react';
import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';

const StyledLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = () => (
  <StyledLoaderContainer>
    <CircularProgress />
  </StyledLoaderContainer>
);

export default Loader;
