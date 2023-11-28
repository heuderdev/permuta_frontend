

import styled from "styled-components";

export const Container = styled.body`
    padding: 0.785rem ;
    margin: auto;
   
`;


export const Content = styled.div`
 
  padding: 1rem; /* Four items per row (25% width each) */
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const  Title = styled.h1`

  font-family: ${(props) => props.theme.fonts.secondaty_500};
  line-height: 1.5;
  padding-left: 0.5rem;
  font-size: 2rem;
  padding-top: 1rem;
  text-align: center;
`;
