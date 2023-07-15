
import { Header } from '../../Components/HeaderLogin'
import {
    Container,
    Title,
    Content,
    Formulary,
    Input,
    Label,
    BoutonBox,
    Button,
    Text,
} from './styled'



export function CreateUser() {
    return (
        <>
            <Header />
            <Container>
                <Title>Cadastro de usuário</Title>
                <Content>
                    <Formulary>
                        <Label>Informe seu nome</Label>
                        <Input type="name" />
                        <Label>Informe seu e-mail</Label>
                        <Input type='email' />
                        <Label>Informe sua senha </Label>
                        <Input type='password' />
                        <Label>Confirme sua senha</Label>
                        <Input type='password' />
                    </Formulary>
                    <BoutonBox>
                        <Button>Enviar</Button>
                        <Button>Cancelar</Button>

                    </BoutonBox>
                </Content>
                <Text>tem cadastro, clique aqui</Text>
            </Container>
        </>
    )
}