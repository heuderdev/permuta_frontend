
import styled from "styled-components";

export const Container = styled.main`
    height: 88vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h2`
     color: ${props => props.theme.colors.shape};
     font-size: 2rem;
     margin-bottom: 2rem;
     font-family: ${(props) => props.theme.fonts.secondaty_500};
`;


export const Content = styled.div`
     width: 100%;
     max-width: 400px; 
     padding:2rem ;
     background-color: ${props => props.theme['gray-600']};
     border-radius: 8px;
`;


export const Formulary = styled.form`
     width: 100%;
     max-width: 400px;
     display: flex;
     flex-direction: column;
     line-height: 1.5;
     border: 0;

     p{
          color: ${(props) => props.theme.colors.attention};
          padding: 0;
          margin: 0;
          border: 0;
          font-size: 0.8rem;
          font-family: ${(props) => props.theme.fonts.primary_400};

     }
`;

export const Label = styled.label`
       line-height: 1.5;
       background-color: transparent;
       font-family: ${(props) => props.theme.fonts.primary_500};

`;

export const Input = styled.input`
     line-height: 1.5;
     margin: 0.75rem 0;
     border: 0;
     color: ${props => props.theme.colors.shape};
     font-family: ${(props) => props.theme.fonts.secondaty_600};
     background-color: transparent;
     border-bottom: 1px solid ${props => props.theme['gray-300']};
     
     &:focus{
          outline-color: none;
          border: 1px solid ${props => props.theme.colors.hoverButtom};
          border-radius: 8px;
     }

 
`;

export const Button = styled.button `

     width: 100%;
     border: 0;
     padding: .875rem;
     border-radius: 1px;
     margin-top: 0.5rem;

     display: flex;
     align-items: center;
     justify-content: center;
     cursor: pointer;
     background-color: ${props => props.theme.colors.hoverButtom};
     color: ${props => props.theme.colors.shape};

     //  aplicndo  estilo para o button disabl
     &:disabled{
          opacity: 0.7;
          cursor: not-allowed;
     }

     &:not(:disabled)hover{
          background: ${props => props.theme.colors.buttomHover} ;
          transition: 2s;
     }

     &:hover{
          background: ${props => props.theme.colors.buttomHover} ;
          transition: 2s;
     }

`;