import React from 'react';
import styled from 'styled-components';

const HeaderArea = styled.header`
  display: flex;
`;

const Header = () => {
  return (
    <>
      <HeaderArea>
        <h2>this is header</h2>
      </HeaderArea>
    </>
  );
};

export default Header;
