import { ButtonStyled } from './Button.styled';

const Button = ({ boolean, children }) => {
  return <ButtonStyled disabled={boolean}>{children}</ButtonStyled>;
};

export default Button;
