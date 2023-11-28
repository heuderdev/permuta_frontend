// Modal Confirm delete

import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 1;
  left: 1;

 display: flex;
flex-direction: column;
 flex-wrap: wrap;
 justify-content: center;


 gap: 2.5rem;
 align-items: center;
 background-color: ${props => props.theme.colors.defaultgray600} ;
 border-radius: 8px;

`;


export const Content = styled.div`
  padding: 20px;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;

  gap: 1rem;

`;


export const Texto = styled.p`
  font-size: 24px;
  padding: 0.5rem;

  font-family:  ${props => props.theme.fonts.secondaty_400} ;
  color:  ${props => props.theme.colors.shape} ;

`;

export const ButtonYes = styled.button`
  font-size: 20px;
  cursor: pointer;

  border-radius: 8px;
  font-family:  ${props => props.theme.fonts.primary_400};
  border: 0;

  line-height: 2;

  width: 10rem;

  background:  ${props => props.theme.colors.button} ;
  color:  ${props => props.theme.colors.shape} ;

`;

export const ButtonCancel = styled.button`
  font-size: 20px;
  cursor: pointer;

  border-radius: 8px;
  font-family:  ${props => props.theme.fonts.primary_400};
  border: 0;

  line-height: 2;

  width: 10rem;

  background:  ${props => props.theme.colors.attention} ;
  color:  ${props => props.theme.colors.shape} ;

`;
