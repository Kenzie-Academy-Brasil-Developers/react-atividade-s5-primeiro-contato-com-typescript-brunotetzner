//input que recebe um placeholder(obrigátorio) e uma lbel(opcional)
//herdar dados do input do html
import { InputHTMLAttributes } from "react";
import { StyledDivInput } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label?: string;
}
export const Input = ({ placeholder, label, ...rest }: InputProps) => {
  return (
    <StyledDivInput>
      <input placeholder={placeholder} {...rest} />
      {label && <label>{label}</label>}
    </StyledDivInput>
  );
};
