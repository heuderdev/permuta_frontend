

import styled from "styled-components";


export const Container = styled.div`
     margin: 0.5rem;
`;

export const OpenModalButton = styled.button`
  background-color: ${(props) => props.theme.colors.defaultgray400};
  color: ${(props) => props.theme.colors.shape};
  font-family: ${(props) => props.theme.fonts.primary_500};
  border: none;
  width: 10rem;
  height: 6rem;
  cursor: pointer;
  border-radius: 8px;

  &:hover{
          background-color: ${(props) => props.theme.colors.defaultgray500};
          transition: 2;
     }

`;