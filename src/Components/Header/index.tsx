
import{
    Container, 
    Logo,
    ButtomLogout

} from './styled'

import logoHIT from '../../assets/logo.png'

export const Header = () => {
    return(
        <Container>
             <Logo src={logoHIT} alt="logotipo" />
             <ButtomLogout>sair</ButtomLogout>

        </Container>
    )
}