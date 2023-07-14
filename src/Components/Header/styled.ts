
import styled from "styled-components";


export const Container = styled.header`
    width: 100%;
    display: flex;
    align-self: center;
    justify-content: space-between;
`;

export const Logo = styled.img`
    width: 6rem;
    height: 4rem;
`;

export const ButtomLogout = styled.a`

    border-radius: 8px;
    border: 1px solid ${props => props.theme['green-500']};

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.785rem;
    height: 2rem;
    margin: 0;
    cursor: pointer;

&:hover {
    filter: brightness(0.85);
    background-color: ${props => props.theme['green-500']};
}
`