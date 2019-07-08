import React from 'react';
import styled from 'styled-components'

const StyledBComp = styled.div`
  background: pink;
`

const BComp = ({ children }) => (
  <StyledBComp>
    <h2>B Component</h2>
    {children}
    <hr/>
  </StyledBComp>
);

export default BComp;
