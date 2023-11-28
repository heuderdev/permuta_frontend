// Modal.js
import { useForm } from 'react-hook-form';

import {
  CloseButton,
  ModalContent, 
  StyledModal
} from './styled';

import { useState } from 'react'


interface Propspermission {
  idUser: string
  idPermission: string
}


export const ModalAddPermission = ({ isOpen, onClose }: any) => {

  // @ts-ignore
  const [data, setData] = useState<Propspermission[]>([])


  return (
    <StyledModal isOpen={isOpen}>
        <h1>Associar permissão</h1>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>

       
      </ModalContent>
    </StyledModal>
  );
};
