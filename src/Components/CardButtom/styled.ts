import { Feather } from 'react-feather';

import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center ;
  justify-content: center;


  height: 100%;

`;

export const ButtonContainer = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
   border: 0;

  &:hover {
  
  }
  &:focus{
    outline: none;
  }
`;

export const Icon = styled(Feather)`
  margin-right: auto;


`;

export const Text = styled.p`
  margin-right: auto;
  text-align: center;
  font-family: ${(props) => props.theme.fonts.primary_400};
  font-size: 1rem;
`;