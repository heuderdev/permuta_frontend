

import styled from "styled-components";


export const Container = styled.div` 
   display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;


`;


export const Form = styled.form`
     width: 100%;
     max-width: 500px;
     display: flex;
     flex-direction: column;
   

     line-height: 1.5;
     border: 0;
     background-color: ${props => props.theme.colors.BoxColor};
     border-radius: 8px;


     label{
          line-height: 1.5;
          background-color: transparent;
          font-family: ${(props) => props.theme.fonts.secondaty_600};
          font-weight: 700;
          color: ${props => props.theme.colors.text};
          width: 100%;

          border-bottom: 1px solid ${props => props.theme['gray-300']};

     }
     select{
          border: 0;
          color: ${props => props.theme.colors.shape};
          font-family: ${(props) => props.theme.fonts.secondaty_600};
          background-color: transparent;
          border-bottom: 1px solid ${props => props.theme['gray-300']};

          text-align: start;

          width: 100%;
     &:focus{
          outline-color: none;
          border: 0px solid ${props => props.theme.colors.hoverButtom};
     }

     option{
          
          color: ${props => props.theme.colors.text};
          background-color: transparent;
     }
     }
`;

export const Content = styled.div`
   
     padding: 1rem;
     width: 80%;
     display: flex;

     margin-bottom: 0.7rem;
`;



export const Button = styled.button`
     width: 100%;
     border: 0;
     padding: .875rem;
     border-radius: 1px;
     margin-top: 0.5rem;

     display: flex;
     align-items: center;
     justify-content: center;
     cursor: pointer;
     background-color: ${props => props.theme.colors.button};
     color: ${props => props.theme.colors.shape};

     //  aplicndo  estilo para o button disabl
     &:disabled{
          opacity: 0.7;
          cursor: not-allowed;
     }

     &:hover{
          background: ${props => props.theme.colors.hoverButtom} ;
          transition: 2s;
     }

  

`;