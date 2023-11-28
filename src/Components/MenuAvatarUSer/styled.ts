import styled from 'styled-components';
import { BsChevronDown } from 'react-icons/bs'; // Ícone de seta para baixo
import { NavLink } from 'react-router-dom';


interface DropdownProps {
  isOpen: boolean;
}

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;

`;

export const AvatarImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: 1rem;
  border: 2px solid #666666; /* Adicione a cor da borda desejada aqui */
`;

export const ArrowIcon = styled(BsChevronDown)`
  font-size: 1rem;
  color: white;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;

export const Dropdown = styled.div<DropdownProps>`
 position: absolute;
  top: 70px; /* Ajuste a distância do topo conforme necessário */
  right: 0;
  
  background-color: ${(props) => props.theme.colors.defaultgray600};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 1.5rem ; /* Ajuste o preenchimento conforme necessário */
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

`;

export const Item = styled.p`

  padding: 0.4rem 2rem;

  width: 100%; /* Ocupa 100% da largura do Dropdown */
  border: none;
  font-size: 14px;

  color: ${(props) => props.theme.colors.shape};
  font-family: ${(props) => props.theme.fonts.primary_400};

  text-align: justify;


`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    background-color: transparent;
    padding: 0 0.3rem 1rem;
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.secondaty_500};

    cursor: pointer;
    &:hover{
    color: ${(props) => props.theme.colors.buttom};

    }
`;


export const LinkPerm = styled(NavLink)` 
  background-color: red;
  padding: 0 0.3rem 0rem;
  font-size: 14px;
`;

export const Link = styled(NavLink)` 
  background-color: red;
 
`;


