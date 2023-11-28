// Avatar.tsx
import React, { useState } from 'react';
import { ArrowIcon, AvatarContainer, AvatarImage, Button, Dropdown, Item } from './styled';
import { SignOut } from 'phosphor-react'



interface AvatarProps {
    email: any;
    onClick: () => void
    handlePerfil: () => void
    handleConfigADDPermission: () => void

    handleConfigCreatePermission: () => void

}


const Avatar: React.FC<AvatarProps> = ({ email, onClick,handlePerfil, handleConfigADDPermission, handleConfigCreatePermission, ...rest }) => {

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen((prev) => !prev);

    return (
        <AvatarContainer  {...rest}>
            <Item>{email}</Item>    
            <AvatarImage src="../src/assets/logo.png" alt="Avatar" onClick={toggleDropdown} />
            <ArrowIcon  onClick={toggleDropdown} />
            <Dropdown   isOpen={isDropdownOpen}>
                <Button onClick={handlePerfil}>perfil</Button>
                <Button onClick={handleConfigADDPermission}>permissão do usuário</Button>
                {/* <Button onClick={handleConfigCreatePermission}>Criar Permisão</Button> */}
                <Button onClick={onClick}> <SignOut size={15} />sair</Button>
            </Dropdown>
        </AvatarContainer>
    );
};

export default Avatar;

