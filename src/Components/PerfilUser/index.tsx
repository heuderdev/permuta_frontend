
import { useState } from 'react';
import {
    UserList,
    UserItem,
    BoxList,
    UserEmail,
    SelectItem,
    Opcoes,
    UserDelete,

} from './styled'
import { Api } from '../../services/api';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { ModalConfirm } from '../ModalConfirm';
import { PermissionComponent } from '../PermissionRoleComponent';
import { Texto } from './../ModalConfirm/styled';



interface PropsPerfilUser {
    id: number,
    email: string,
    is_active: string,
    onChange: (data: { is_active: string }) => void;
}

interface ProspActive {
    is_active: string;
}


export function PerfilUseComponent({ id, email, is_active, onChange, ...rest }: PropsPerfilUser) {

    const [selectedItem, setSelectedItem] = useState<ProspActive>({ is_active });
    const [modalAberto, setModalAberto] = useState(false);

    const handleSelectChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {

        e.preventDefault();
        const newValue = e.target.value;
        try {
            const valorMapeado = newValue === "ACTIVE" ? 1 : newValue === "INACTIVE" ? 2 : 2;
            const response: any = await Api.patch(`/profiles/${id}`, { 'is_active': valorMapeado });
            setSelectedItem({ is_active: newValue });
            onChange(response); // Chamada da função de callback com os dados atualizados
            toast.success('Perfil atualizado com sucesso!');
        } catch (error) {
            toast.error('Não foi possível atualizar o perfil.');
        }
    };

    const handleDelete = async () => {
        // Abre o modal de confirmação
        setModalAberto(true);
    };
    const handleDeleteModal = async () => {
        try {
            // Coloque aqui a lógica para deletar o usuário
            const response = await Api.delete(`/profiles/${id}`);
            console.log(response, 'resp');

            toast.success('Usuário deletado com sucesso!', response);
        } catch (error: any) {
            toast.error('Erro ao deletar usuário', error);
        } finally {
            // Fecha o modal após a conclusão da deleção
            setModalAberto(false);
        }
    };

    const cancelarDelete = () => {
        // Fecha o modal sem deletar o usuário
        setModalAberto(false);
    };

    return (
        <>
            <UserList {...rest}>
                <UserItem >
                    <BoxList>
                        <UserEmail>{email}</UserEmail>
                    </BoxList>
                    <BoxList>
                        {/* Permissões de usuários */}
                        <PermissionComponent role='profile.activate.again,permission.update'>
                            <SelectItem isActive={is_active} value={selectedItem.is_active} onChange={(e: any) => handleSelectChange(e)}>
                                <Opcoes hidden value={is_active}>{is_active}</Opcoes>
                                <Opcoes value={is_active = "ACTIVE"}>{is_active}</Opcoes>
                                <Opcoes value={is_active = "INACTIVE"}>{is_active}</Opcoes>
                            </SelectItem>
                        </PermissionComponent>
                    </BoxList>
                    <PermissionComponent role='profile.delete'>

                        <BoxList>
                            <UserDelete onClick={handleDelete}>Deletar</UserDelete>
                        </BoxList>
                    </PermissionComponent>
                </UserItem>
            </UserList >
            {modalAberto && (
                <ModalConfirm
                    texto='Pretende deletar o usuário?'
                    onClick={handleDeleteModal}
                    oncancel={cancelarDelete}
                    yes='Sim'
                    no='Cancelar'
                />
            )}
        </>


    )
}