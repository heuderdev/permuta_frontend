

import { useLocation } from 'react-router-dom';
import { Header } from '../../Components/Header';

import { Button, Container, Content, Form, } from './styles';
import { useState, useEffect } from 'react';
import { AddPermissionuser, GetPermission, UserProfileList } from '../../services/api';

import { toast } from 'react-toastify';

interface propsUser {
  id_user: string
  email: string
}

interface propsPermission {
  id: string
  name: string
}

interface PropsList {
  user: string
  email: string
  status: string
  id: string
}


interface PropsListPermission {
  id: string
  email: string
}


export function AtribuiPermission() {

  const [permission, setPermission] = useState([])

  const [nomeSelecionado, setNomeSelecionado] = useState('');
  const [permissaoSelecionada, setPermissaoSelecionada] = useState('');

  const [dataListPermission, setListPermission] = useState<PropsListPermission[]>([])



  

  // user permission 

  async function handleUserConfig() {
      const data = await UserProfileList()
      setListPermission(data.data.map((item: PropsListPermission) => {
          return {
              id_user: item.id,
              email: item.email,
          }
      }))
  }
  useEffect(() => {
      handleUserConfig()
  }, [])

  // fim 

  

  async function Permission() {
    const permission = await GetPermission()
    setPermission(permission.data)
  }
  useEffect(() => {
    Permission()
  }, [])

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Aqui você pode enviar os valores para onde precisar (API, estado global, etc.)
    AddPermissionuser(nomeSelecionado, permissaoSelecionada).then((i) => {
      return toast.success('Permissão adcionada com sucesso!')

    }).catch((error: any) =>
       toast.error(error.response.data.message))
  };

  return (
    <>
      <Header />
      <Container>
      <Form onSubmit={handleSubmit}>
        <Content>
          <label htmlFor="nomes">Escolha um nome:</label>
          <select id="nomes" onChange={(e) => setNomeSelecionado(e.target.value)}>
            <option value="">Selecione um nome</option>
            {dataListPermission.map((u:any) => (
              <option key={u.id_user} value={u.id_user}>
                {u.email}
              </option>
            ))}
          </select>
        </Content>

        <Content>
          <label htmlFor="permissoes">Escolha uma permissão:</label>
          <select id="permissoes" onChange={(e:any) => setPermissaoSelecionada(e.target.value)}>
            <option value="">Selecione uma permissão</option>
            {permission?.map((permissao: propsPermission) => (
              <option key={permissao.id} value={permissao.id}>
                {permissao.name}
              </option>
            ))}
          </select>
        </Content>
        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
    </>
  )
}