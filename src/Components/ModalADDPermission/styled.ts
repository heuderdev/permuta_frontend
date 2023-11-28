import styled from 'styled-components';

export const StyledModal = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  
  position: fixed;
  top: 0;
  left: 0;
  
  background-color: ${(color)  => color.theme.colors.defaultgray600};
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 80vh;

  h1{
    
    font-family: ${(font) => font.theme.fonts.primary_400};
    font-size: 75;
    padding-bottom: 1rem;
   
  }
`;

export const ModalContent = styled.div`
  padding: 2.8rem;
  border-radius: 8px;
  width: 25rem;
  background-color: ${(color)  => color.theme.colors.defaultgray500};
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 1rem;
  right: 2rem;
  font-size: 24px;
  cursor: pointer;
  color: ${(color)  => color.theme.colors.attention};
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
  text-align: center;
  
  p{
        font-size: small;
        font-family: ${(props) => props.theme.fonts.primary_400};
        color: ${(color)  => color.theme.colors.attention}; 
        padding-bottom: 1rem;
      
    }
`;

export const StyledLabel = styled.label`
  margin-bottom: 1rem;
  font-size: 100%;
  color: ${(color)  => color.theme.colors.shape}
`;

export const StyledInput = styled.input.attrs({
  placeholder: 'digite uma permissão',
})`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 8px;

`;

export const StyledButton = styled.button`
  background-color:  ${(color)  => color.theme.colors.button};
  color: ${(color)  => color.theme.colors.shape};
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
`;

