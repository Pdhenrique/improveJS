// import { useState } from "react"

import {
  CardTitle,
  ContentWrapper,
  StyledBtn,
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledTaskCard,
  TaskTitle,
} from ".";

import { formtypes } from ".";

export const CardTask: React.FC<formtypes> = ({
  bgColor,
  content,
  state,
  title,
  ...props
}) => {
  return (
    <StyledTaskCard {...props}>
      <CardTitle>{title}</CardTitle>
      <ContentWrapper>{content}</ContentWrapper>
      <StyledBtn>Submit</StyledBtn>
    </StyledTaskCard>
  );
};

export const TaskManager: React.FC<formtypes> = ({bgColor,content,state,title, ...props}) => {
  // const [ tasks, setTasks ] = useState([])

  return (
    <StyledContainer {...props}>
      <TaskTitle>Task Manager</TaskTitle>

      <StyledForm>
        <StyledInput type="text" placeholder="task title" />
        <StyledInput type="text" placeholder="task state" />
        <StyledBtn type="submit">Submit</StyledBtn>
      </StyledForm>
      <CardTask
        bgColor='#ffff'
        content='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        title={title}
        state={state}
      />
    </StyledContainer>
  );
};
