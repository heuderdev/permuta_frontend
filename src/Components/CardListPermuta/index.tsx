
import styled from 'styled-components'
import { Box, BoxItem, ButtonNotifica, Card, CardHeader, CardHeaderItem, CardPrice } from './styles'

interface PropsItemList {

    citie_names: string,
    customer_name: string,
    customer_phone: string,
    propertie_name: string,
    user_email: string,
    final_Price: string
    NotificaMatch: number
    onClick: () => void
}

export function CardListPermuta({
    citie_names,
    customer_name,
    customer_phone,
    propertie_name,
    user_email,
    final_Price,
    NotificaMatch,
    onClick,
    ...rest
}: PropsItemList) {
    return (
        <Card{...rest}>


   
        <CardHeader>
                
                <ButtonNotifica onClick={onClick}><span>Permuta</span>{NotificaMatch}</ButtonNotifica>
                <CardHeaderItem>
                    <span>{customer_name}</span>
                    <span>Imovél: {propertie_name}</span>
                    <span>Cidade: {citie_names}</span>
                    <BoxItem>
                        <p>📧 {user_email} </p>
                        <p>📞 {customer_phone} </p>
                    </BoxItem>
                </CardHeaderItem>
                <CardPrice>
                    <p>R$ {final_Price}</p>
                </CardPrice>

            </CardHeader>
        </Card>
    )

}
