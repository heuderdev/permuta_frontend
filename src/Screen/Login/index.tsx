

import {
    Container,
    Form,
    Input,
    Buttom,
    Title,

} from './styled'
import { Header } from '../../Components/HeaderLogin'


export function Login() {
    return (
        <>
        <Header/>
        <Container>
                <Form>
                    <Title>Login</Title>
                    <Input placeholder='email' type='email'
                    />
                    <Input placeholder='senha' type='password' />
                    <Buttom type='submit'>Entrar</Buttom>
                </Form>
        </Container>
    </>
    )
}