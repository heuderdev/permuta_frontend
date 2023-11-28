
import { Header } from '../../Components/Header';
import { ModalCreatPermission } from '../../Components/ModalForm';

import { Container } from './styles';


export function PermissionCreate() {

    return (
        <Container>
        <Header/>
            <ModalCreatPermission/>
        </Container>
    )
}