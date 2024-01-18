import styled from 'styled-components';
import tokens from '../../../tokens.json';
import React from 'react';

interface ButtonProps {
  onClick ?: () => null
}

const StyledButton = styled.button`
  padding: 15px 15px 15px 15px;

  border: none;
  border-radius: 5px;

  color: ${tokens.colors.textPrimary};
  background-color: ${tokens.colors.highlight};
`

export const Button: React.FC<ButtonProps> = ({onClick}) => {
  return(
    <StyledButton onClick={onClick}>New Task!</StyledButton>
  )
}