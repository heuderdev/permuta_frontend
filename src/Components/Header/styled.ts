
import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.header`
    display: flex;
    align-self: center;
    justify-content: space-between;
    // border no header
    border-bottom: 1px solid ${(props) => props.theme.colors.background_primary};

    nav {
        display: flex;
        gap: 0.5rem;
    }

    a{
        width: 5rem;
        height: 3rem;

        display: flex;
        justify-content: center;
        align-items: center;

        color: ${(props) => props.theme.colors.background_primary};
        border-top:  3px solid transparent;
        border-bottom:  3px solid transparent;


        &:hover{
            border-bottom: 3px solid ${(props) => props.theme.colors.success};
        }


    }

`;

export const Logo = styled.img`
    width: 6rem;
    height: 4rem;
`;

export const Link = styled(NavLink)` 
  background-color: red;
 
`;


