import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 1px solid black;
`;

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
    return (
      <Wrapper>
        {title}
      </Wrapper>
    );
}

export default Header;