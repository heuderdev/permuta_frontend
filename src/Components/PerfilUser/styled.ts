import styled from "styled-components";
import { defaultTheme } from "../../Styles/theme";

export const UserList = styled.ul`
  list-style: none;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  border-radius: 8px;
  gap: 2rem;
  background-color: transparent;
`;

export const UserItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;

  align-items: center;
  text-align: start;

  padding: 0.875rem;
  &:nth-child(odd) {
  background-color: ${(props) => props.theme.colors.defaultgray600};
  }
`;

export const BoxList = styled.div`
    
    width: 10rem;
`;

export const UserEmail = styled.span`
     color: ${props => props.theme.colors.shape};
     font-size: 16px;
     font-family: ${(props) => props.theme.fonts.secondaty_400};
 
`;

interface PropsStatusColor {
  StatusColor: boolean
}

export const UserStatus = styled.span<PropsStatusColor>`
      color: ${({ StatusColor }) => (StatusColor ? ` ${defaultTheme.colors.success}` :
    ` ${defaultTheme.colors.attention}`
  )};

`;

export const UserDelete = styled.button`
     color: ${props => props.theme.colors.attention};
     font-size: 16px;
     font-family: ${(props) => props.theme.fonts.secondaty_400};
     background-color: transparent;
     border: 0;
     padding: 0.5rem;
     border-radius: 8px;
     cursor: pointer;

     &:hover{
          color: ${props => props.theme.colors.attention} ;
          transition: 2s;
          color:  ${props => props.theme.colors.shape} ;
     } `;


interface PropsActive {
  isActive: string
}

export const SelectItem = styled.select<PropsActive>`
  border: 0;
  background-color:transparent;
  border: none;
  border-radius: 8px;
  color: ${(props) =>
    props.isActive === "ACTIVE" ? '#03b252' : props.isActive === "INACTIVE" ? '#AB222E' : '#AB222E'};
`;

export const Opcoes = styled.option`
  color: ${props => props.theme.colors.text} ;
  font-size: 14px;
  

`;
