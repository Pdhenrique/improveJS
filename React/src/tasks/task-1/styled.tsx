import styled from 'styled-components';
import tokens from '../../tokens.json';

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* justify-content: center; */

  padding-top: 15%;

  width: 100vw;
  height: 100vh;
  
  background-color: ${tokens.colors.background};
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;

  width: 50vw;
  max-width: 400px; 
  padding: 20px; 

  height: auto; 
  background-color: ${tokens.colors.formFields};
`;

export const TaskContainer = styled.div`
  margin-top: 25px ;
`