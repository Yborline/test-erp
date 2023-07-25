import { styled } from "styled-components";


export const ButtonStyled = styled.button`
background-color: ${({ theme }) => theme.bttn};
border-radius: 2px;
border: 1px solid ${({ theme }) => theme.border};
color: ${({ theme }) => theme.colorWords};
cursor: pointer;
&:hover {
color: ${({ theme }) => theme.hoverWords};
background-color: ${({ theme }) => theme.border};
border-color:${({ theme }) => theme.bttn};
}
&:disabled{
  border: ${({ theme }) => theme.disabledBorder};
  background-color: ${({ theme }) => theme.disabledBackfround};
  color: ${({ theme }) => theme.disabledColor};
}
`