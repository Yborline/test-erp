import { styled } from "styled-components";


export const Select = styled.select`
width : 200px;

-moz-appearance: none;
-webkit-appearance: none;
border: none;

outline: none;
padding: 5px;
padding-right: 40px;

border-bottom: 1px double ${({ theme }) => theme.borderBottom};
margin-left: 30px;
background-color:${({ theme }) => theme.MainBackground};
color: ${({theme}) => theme.colorWords};`


export const Label = styled.label`
color: ${({theme}) => theme.colorWords};`