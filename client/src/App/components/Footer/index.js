import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  background-color: #3f51b5;
  height: 16px;
  color: white;
  padding: 24px;
  text-align: right;
`;

const Footer = () => {
  return <StyledFooter>Copywrite 2021</StyledFooter>;
};

export default Footer;
