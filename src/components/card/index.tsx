import { StyledCard } from "./style";
interface CardProps {
  name: string;
  age: string;
  hobby: string;
}
export const Card = ({ name, age, hobby }: CardProps) => {
  return (
    <StyledCard key={name}>
      <h1>nome: {name}</h1>
      <p>idade: {parseInt(age)}</p>
      <label>hobby: {hobby}</label>
    </StyledCard>
  );
};
