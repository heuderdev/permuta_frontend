
import {
    Container,
    Logo,

} from './styled'

import { SignOut } from 'phosphor-react'

import logoHIT from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <Container>
            <Logo src={logoHIT} alt="logotipo" />
            <nav>
                <NavLink
                    to='/login' title='login'>
                    <SignOut size={24} />
                    Sair
                </NavLink>
            </nav>
        </Container>
    )
}