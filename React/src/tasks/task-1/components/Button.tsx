import styled from 'styled-components';
import tokens from '../../../tokens.json';


const StyledButton = styled.button`
  padding: 15px 15px 15px 15px;

  border: none;
  border-radius: 5px;

  color: ${tokens.colors.textPrimary};
  background-color: ${tokens.colors.highlight};
`

export const Button = () => {
  return(
    <StyledButton>New Task!</StyledButton>
  )
}