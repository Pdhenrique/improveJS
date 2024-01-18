import styled from 'styled-components';
import tokens from '../../../tokens.json';


const StyledInput = styled.input`
  border-radius: 5px;
  border: 1px solid ${tokens.colors.formFields};

  padding: 10px;

  /* background-color: ${tokens.colors.background}; */
`
export const Task = () => {
  return(
    <StyledInput type='text' placeholder="task name"></StyledInput>
  )
}