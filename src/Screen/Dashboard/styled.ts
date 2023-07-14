

import styled from "styled-components";

export const Container = styled.div`
    background: ${props => props.theme['gray-700']};
    display: flex;
    justify-content: center;
    justify-content: space-between;
    padding: 0.875rem 2rem;
    margin: auto;
`;

export const Body = styled.div`
     background: ${props => props.theme['gray-500']};
`;