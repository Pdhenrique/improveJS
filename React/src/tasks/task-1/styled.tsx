import styled from "styled-components";
import tokens from "../../tokens.json";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;

  background-color: #e6e6e6;

  width: 50vw;
  height: auto;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  padding: 10px 15px 10px 15px;
  margin-top: 25px;
`;

export const TaskTitle = styled.h1`
  color: ${tokens.colors.text};
  margin-bottom: 35px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const StyledInput = styled.input`
  padding: 15px;
  border-radius: 15px;
  margin-bottom: 15px;
  border: 1px solid #646464;
  width: 75%;

  background-color: #e6e6e657;
`;

export const StyledBtn = styled.button`
  border-radius: 15px;
  padding: 15px;
  width: 200px;

  border: none;
  cursor: pointer;

  color: #fff;
  background-color: #48a9a6;

  &:hover {
    transition: 0.2s ease;
    background-color: #3c8f8c;
  }
`;

export const StyledTaskCard = styled.div`
  width: 450px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  margin: 25px 0px 25px 0px;
  border-radius: 10px;
  border: none;
  background-color: #d7d7d7;
`;

export const CardTitle = styled.h3`
  background-color: #cdcdcd;
  color: #4e4e4e;
  border-radius: 3px;
  padding: 10px;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;