import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid black;
  margin: 10px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

interface CardProps {
  url: string;
}

const Card: React.FC<CardProps> = ({url}) => {
  return (
    <Wrapper>
      <img src={url} alt="" />
    </Wrapper>
  );
}

export default Card;


