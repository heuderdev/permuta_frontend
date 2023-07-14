
import styled, { css } from "styled-components";

export const Container = styled.div`
    height: 88vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h2`
     color: ${props => props.theme['gray-500']};
     font-size: 1.5rem;
     margin-bottom: 2rem;
`;


export const Content = styled.div`
     width: 100%;
     max-width: 400px; 
     padding:2rem ;
     background-color: ${props => props.theme['gray-600']};
`;


export const Formulary = styled.form`
     width: 100%;
     max-width: 400px;
     display: flex;
     flex-direction: column;
`;

export const Label = styled.label`

`;

export const Input = styled.input`
     line-height: 1.5;
     margin: 0.75rem 0;
     border: none;
     border-radius: 8px;
`;


export const Button = styled.button<{ $primary?: boolean; }>`
  background: transparent;
  border-radius: 8px;
  border: 2px solid ${props => props.theme['green-500']};
  color: ${props => props.theme['gray-300']};
  padding: 0.8rem;

  ${props => props.$primary && css`
  background: ${props => props.theme.colors.success};
  color: ${props => props.theme.colors.shape};
  `}
`;

export const BoutonBox = styled.div`
     display: flex;
     align-items: center;
     justify-content: space-between;
`;

export const Text = styled.a`
     padding: 1rem;
     cursor: pointer;

`;