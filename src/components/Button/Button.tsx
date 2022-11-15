import React, { CSSProperties } from 'react';
import { StyledButton } from './Button.style';

export interface ButtonProps {
  children?: React.ReactNode;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  style?: CSSProperties;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, style, type }) => {
  return (
    <StyledButton
      type={type}
      onClick={(e) => (onClick ? onClick(e) : {})}
      style={style}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
