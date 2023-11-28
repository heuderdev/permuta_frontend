import { ButtonCancel, ButtonYes, Content, ModalContainer, Texto } from "./styled";


interface PropsISModal{

    onClick: () => void
    oncancel: () => void
    yes: string
    no: string
    texto: string
}

export function ModalConfirm({ onClick, oncancel, texto, yes, no, ...rest}:PropsISModal){
    return(
        <ModalContainer { ...rest}>
        <Texto>{texto}</Texto>
        <Content>
        <ButtonYes onClick={onClick}>{yes}</ButtonYes>
        <ButtonCancel onClick={oncancel}>{no}</ButtonCancel>
        </Content>
    </ModalContainer>
    )
}