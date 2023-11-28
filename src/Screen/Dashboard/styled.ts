

import styled from "styled-components";
import { NavLink } from 'react-router-dom';

// grid 
export const GridContainer = styled.div`
    display: grid;
    grid-template-areas:
        'header header header header header header'
        'menu  main main main  main main  '
        'footer footer footer footer footer footer';
    gap: 2rem;
    padding: 10px;
`;
export const GridHeader = styled.div`
    grid-area: header;
`;



export const GridMain = styled.div`
    grid-area: main;
    width: 100%;


`;
export const GridDireita = styled.div`
    grid-area: direita;

`;
export const GridFooter = styled.div`
    grid-area: footer;

`;

/// fim grid 

export const Container = styled.body`
    padding: 0.875rem ;
    margin: auto;
`;



export const CardButtonText = styled.div`
    display: flex;

    justify-content: space-between;

    
  h1{
    font-size: larger;
    font-family: ${(props) => props.theme.fonts.secondaty_500};
    line-height: 1.5;
    padding-left: 0.5rem;
    font-size: 25px;
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

export const ButtomUser = styled.button`

     line-height: 1.5;
   
   background-color: transparent;
     cursor: pointer;
     border-radius: 8px;
     padding: 0%.5rem;
     &:hover{
          background-color: ${(props) => props.theme.colors.hoverButtom};
     }
`;


// Stilos de menu user  **Menu admin 



export const Menu = styled.div`

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items:flex-start;

   padding-left: 0.5rem;
   
    border: 0;
    h3{
        font-size: larger;
        font-family: ${(props) => props.theme.fonts.secondaty_500};
        line-height: 1.5;
        padding-bottom: 1rem;
        font-size: 100%;
    }
    p{
        font-size: larger;
        font-family: ${(props) => props.theme.fonts.primary_400};
        line-height: 1.5;
        font-size: 100%;

      
      
        
        float: none;
        word-wrap: break-word ;
        color: ${(props) => props.theme.colors.background_secondary};
    }
`;


export const GridMenu = styled.div`
    grid-area: menu;
    background-color: ${(props) => props.theme.colors.BoxColor};
    border-radius: 8px;
    padding: 0.5rem;
`;



// export const Link = styled(NavLink)`
//     padding-left:1rem ;
//     padding-bottom: 0.75rem;
//     :hover{
//         color: ${(props) => props.theme.colors.defaultgray100};

//     }
  
// `;

