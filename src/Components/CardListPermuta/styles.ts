

import styled from 'styled-components';


export const CardButtonText = styled.div`
    display: flex;

`;

export const Card = styled.div`
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
`;


export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
    background-color: ${(props) => props.theme.colors.BoxColor};
    padding: 1rem;
    line-height: 1.5;
    border: 0;
    border-radius: 8px;
    position: relative;


`;

export const CardHeaderItem = styled.div`

    display: flex;
    flex-direction: column;
    gap:0.5rem;
`;



export const CardPrice = styled.div`

p{
    color: ${(props) => props.theme.colors.defaultgray400};
}
`;


export const BoxItem = styled.div`
   display: flex;
   color: ${(props) => props.theme.colors.defaultgray400};
   gap: 1rem;

  
`;


export const ButtonNotifica = styled.button`
position: absolute;
  top: -0.4rem;
  right: 1rem;
  color: ${(props) => props.theme.colors.success};
  background-color: transparent;
  
  border: 0;
  font-size: small;

  span{
    padding: 0.5rem;
  }

`;

// os codigos abaixo abagar ou analizar


export const Box = styled.div`
    padding-top: 1rem;
    width: 100%;
    line-height: 1.5;
    border: 0;
    border-radius: 8px;
 

    span{
        font-size: larger;
        font-family: ${(props) => props.theme.fonts.secondaty_500};
        line-height: 1.5;
        padding-left: 0.5rem;
        font-size: 100%;

    }

    p{
        font-size: larger;
        font-family: ${(props) => props.theme.fonts.primary_400};
        line-height: 1.5;
        padding-left: 0.5rem;
        font-size: 80%;
    }
`;


export const ButtomCadastro = styled.button`
     border: none;
     line-height: 1.5;
     background-color:  ${props => props.theme['green-500']};
     color: ${props => props.theme['buttonLogin']}; 
     cursor: pointer;
     border-radius: 8px;
     padding: 0%.5rem;
     &:hover{
          background-color: ${(props) => props.theme.colors.hoverButtom};
     }
`;

