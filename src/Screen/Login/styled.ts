
import styled from "styled-components";

export const Container = styled.div`
    height: calc(100vh - 5rem);
    display: flex;
    justify-content: center;
    align-items: center;
    
`;


export const Title = styled.h2`
     color: ${props => props.theme['gray-500']};
     font-size: 1.5rem;
     margin-bottom: 1rem;
     text-align: center;
`;

export const Form = styled.form`
    width: 100%;
    max-width: 300px;
    padding: 3.5rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;

    background: ${(props) => props.theme.colors.BackgroundFormulary};
    line-height: 1.5;
`;

export const Input = styled.input`
     background: ${props => props.theme['gray-300']};
     border: none;
     line-height: 1.5;
     margin-bottom: 1rem;
     border-radius: 8px;
     padding-left: 1rem;

     &:hover{
          color:  ${props => props.theme['green-500']};
     }
`;

export const Buttom = styled.button`
     border: none;
    
     margin-top: 0.875rem;
     background-color:  ${props => props.theme['green-500']};
     
     line-height: 1.5;
     border-radius: 8px;

     &:hover{
      color: ${props => props.theme['buttonLogin']}; 

     }
`;


