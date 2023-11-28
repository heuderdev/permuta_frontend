// Modal.js
import { useForm } from 'react-hook-form';

import {
  ModalContent, StyledButton, StyledForm, StyledInput, StyledLabel,
  StyledModal
} from './styled';

import { useState } from 'react'
import { Api } from '../../services/api';
import { toast } from 'react-toastify';

interface PropsRole {
  name: string
}

export const ModalCreatPermission = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<PropsRole>()
  // @ts-ignore
  const [data, setData] = useState<PropsList[]>([])

  function handleCreatPermission({ name }: PropsRole) {
    const data = {
      name,
    }
    Api.post("/permissions", data).then((i: any) => {

      toast.success(i.data.message)
    }).catch((i) => {
      if (i.message === 'Network Error') {
        toast.error('sem conexão')
      }
      toast.error(i.response.data.message)
    })
    reset()
  }

  return (
    <StyledModal >
      <h1>Controle de permissão</h1>
      <ModalContent>
        <StyledForm onSubmit={handleSubmit(handleCreatPermission)} action=''>
          <StyledLabel htmlFor='name'>Adicionar uma permissão</StyledLabel>
          <StyledInput {...register("name", { required: true, minLength: 3, maxLength: 20 })} />
          {errors.name && (
            <p>{"Informe no minímo 3 caracteres para validar o nome "}</p>
          )}
          <StyledButton type='submit'>Adcionar permissão</StyledButton>
        </StyledForm>
      </ModalContent>
    </StyledModal>
  );
};
