

import { Header } from '../../Components/Header'



import {
    GridContainer,
    GridHeader,
    GridMain,
    Container,
    ButtomCadastro,
    CardButtonText,

} from './styled'
import { CardListPermuta } from '../../Components/CardListPermuta'
import { useEffect, useState } from 'react';
import { SelectImoveis } from '../../services/api';



interface PropsImoveis {
    item: {
        bedrooms: string
        branche_name: string
        citie_id: string
        citie_names: string
        customer_email: string
        customer_id: number
        customer_name: string
        customer_phone: string
        final_property_value: string
        id: number
        propertie_name: string
        property_initial_value: string
        total_area: number
        useful_area: number
        user_email: string
    }
}


export function Dashboard() {



    const [dataImovel, setDataImovel] = useState<PropsImoveis[]>([])


    async function handleImovel() {
        const response = await SelectImoveis()
        setDataImovel(response)
    }


    useEffect(() => {
        handleImovel()

    }, [])

    console.log(dataImovel, 'dataIpppmovel');

    return (
        <Container>
            <GridContainer>
                <GridHeader>
                    <Header />
                </GridHeader>
                <GridMain>
                    <CardButtonText>
                        <h1>Lista de imovéis</h1>
                        <ButtomCadastro>Novo Imovél</ButtomCadastro>
                    </CardButtonText>
                    {
                        dataImovel.map((item: PropsImoveis) => (

                            <CardListPermuta
                                key={item.item.id}
                                NotificaMatch={item.item.id}
                                customer_name={item.item.customer_name}
                                propertie_name={item.item.propertie_name}
                                user_email={item.item.user_email}
                                citie_names={item.item.citie_names}      
                                customer_phone={item.item.customer_phone}   
                                final_Price={item.item.final_property_value}  
                            />
                        ))
                    }
                </GridMain>
            </GridContainer>
            {/* <GridFooter>iiiii</GridFooter> */}
        </Container>
    )
}