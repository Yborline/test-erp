import { styled } from "styled-components";


export const ButtonStyled = styled.button`
background-color: ${({ theme }) => theme.bttn};
border-radius: 2px;
border: 1px solid ${({ theme }) => theme.border};
color: ${({theme}) => theme.colorWords};
`