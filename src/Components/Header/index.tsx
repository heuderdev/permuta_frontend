
import {
    Container,
    Logo,

} from './styled'

import logoHIT from '../../assets/logo.png'
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'
import Avatar from '../MenuAvatarUSer'
import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { UserProfileList } from '../../services/api'
import { getUserLocalStorang } from '../../Context/AuthProvider/utils'

interface PropsList {
    user: string
    email: string
    status: string
    id: string
}

export const Header = () => {

    const [dataList, setDataList] = useState<PropsList[]>([])
    const [email, setEmail] = useState<PropsList[]>([])

    const { logout } = useContext(AuthContext)
    const navigate = useNavigate();
    //logout 

    const location = useLocation()

    // atualizar os dados do perfil do usuario 

    function handleCreatPermission() {
        // ir para uma pagina de criacao de permissão
        navigate('/createPermission')
    }

    // funcao que ira atribuir o valor de user_id e o valor de permission_Id as relacao de acesso 

    async function handleAddPermission() { 
        navigate('/AtribPermission', location)
    }
    async function handleUserConfig() {
        const data = await UserProfileList()
        setDataList(data.data)
    }

   async function getEmailUser() {
      const resp = await getUserLocalStorang()
      setEmail(resp.email)
    }

    useEffect(() => {
        handleUserConfig()
        getEmailUser()
    }, [])

    function handlePerfil() {
        navigate('/perfil', {state:  dataList}  )
    }

    const handleLogout = () => {
        if (window.confirm("Deseja sair da conta")) {
            logout()
            navigate('/')
        }
    }
    return (
        <Container>
            <Logo src={logoHIT}/>
            <Avatar
                email={email}
                handleConfigADDPermission={handleAddPermission}
                handleConfigCreatePermission={handleCreatPermission}
                handlePerfil={handlePerfil}
                onClick={handleLogout}
            />
        </Container>
    )
}