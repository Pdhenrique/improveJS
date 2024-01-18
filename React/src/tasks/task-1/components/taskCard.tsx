import styled from 'styled-components';
import tokens from '../../../tokens.json';
import React from 'react';

interface TaskCardProps {
  children?: string;
}

const StyledCard = styled.div`
  width: 200px;
  height: 50px;

  border-radius: 5px;

  background-color: ${tokens.colors.highlight};
`
export const TaskCard: React.FC<TaskCardProps> = ({children}) => {
  return(
    <StyledCard>{children}</StyledCard>
  )
}