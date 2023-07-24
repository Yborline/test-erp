import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
export const Nav = styled.nav`
width: 100%;
display:flex;
align-items: center;
justify-content: space-around;
background-color: ${({theme})=> theme.NavbarBackground};
`


export const Link = styled(NavLink)`
color: ${({theme})=> theme.colorWords};
`

export const P = styled.p`
color: ${({theme})=> theme.colorWords};
`