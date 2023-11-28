

import React, { MouseEvent } from 'react';
import { ButtonContainer, Container, Icon, Text } from './styled';


interface PropsButton {

  icon?:string
  name: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  [key: string]: any; // Para aceitar outras propriedades
}

export const CustomButton = ({icon, name, onClick, rest }: PropsButton) => {
  return (
    <Container>
        <ButtonContainer onFocus={false} onClick={onClick} {...rest}>
      {icon &&
       <Icon icon="feather"/>}
      <Text>{name}</Text>
    </ButtonContainer>
    </Container>
  );
};