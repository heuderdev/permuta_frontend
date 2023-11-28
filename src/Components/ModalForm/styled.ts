import styled from 'styled-components';

export const StyledModal = styled.div`
  display: ${( isOpen ) => (isOpen ? 'flex' : 'none')};
  
  
  max-width: 90rem;
  height: calc(30vh - 5rem);
   margin: 1rem auto;
  
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 80vh;

  h1{
    
    font-family: ${(font) => font.theme.fonts.primary_400};
    font-size: 24px;
    margin: 1rem;
    
   
  }
`;

export const ModalContent = styled.div`
  padding: 2.8rem;
  border-radius: 8px;
  width: 25rem;
  background-color: ${props => props.theme.colors.BoxColor};




 

`;


export const StyledForm = styled.form`
    width: 100%;
     max-width: 500px;
     display: flex;
     flex-direction: column;
   

     line-height: 1.5;
     border: 0;
     background-color: ${props => props.theme.colors.BoxColor};
     border-radius: 8px;

`;

export const StyledLabel = styled.label`
    line-height: 1.5;
    background-color: transparent;
    font-family: ${(props) => props.theme.fonts.secondaty_600};
    font-weight: 700;
    color: ${props => props.theme.colors.text};
    width: 100%;
    

    font-size: 1.2rem;
    font-family: ${(props) => props.theme.fonts.primary_400};

    

`;

export const StyledInput = styled.input.attrs({
  placeholder: 'digite uma permissão',
})`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 8px;

`;

export const StyledButton = styled.button`
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

     &:hover{
          background: ${props => props.theme.colors.hoverButtom} ;
          transition: 2s;
     }
`;

