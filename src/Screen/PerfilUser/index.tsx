
import { useEffect, useState } from 'react'
import { Header } from '../../Components/Header'
import {
    Container,
    Content,
    Title,
} from './styled'

import { useLocation } from 'react-router-dom'
import { PerfilUseComponent } from '../../Components/PerfilUser'

interface PropsPerfilUser {
    id: number,
    email: string,
    is_active: string,
}

export function PerfilUser() {
    const location = useLocation()
    // @ts-ignore
    const [data, setData] = useState<PropsPerfilUser[]>([])

    const UserPerfilList = () => {
        const  data  = location.state
        setData(data)
    }
    useEffect(() => {
        UserPerfilList()
    }, [])


    const handlePerfilChange = (data: { is_active: string }) => {
    };
  
    return (
        <Container>
            <Header />
            <Title>Perfil do usuário</Title>
            <Content>
                {data?.map(user => (
                    <PerfilUseComponent
                        key={user.id}  // Adicionando a chave única
                        id={user.id}
                        email={user.email}
                        is_active={user.is_active}
                        onChange={handlePerfilChange}
                    />
                ))}
            </Content>
        </Container>
    )
}