import styled from "styled-components";

export const StyledCard = styled.div`
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(46, 66, 65, 0.014443277310924318) 0%,
    rgba(18, 4, 23, 1) 0%,
    rgba(32, 19, 131, 1) 0%,
    rgba(235, 228, 141, 1) 0%,
    rgba(170, 162, 70, 1) 51%,
    rgba(223, 231, 137, 1) 100%,
    rgba(113, 49, 20, 1) 100%
  );
  -webkit-box-shadow: 5px 2px 19px 3px rgba(0, 0, 0, 0.74);
  box-shadow: 5px 2px 19px 3px rgba(0, 0, 0, 0.74);
  width: 80%;
  height: 200px;
  margin: 1%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2%;
  border-radius: 10px;
  :hover {
    border: 1px solid white;
  }

  @media (min-width: 700px) {
    width: 35%;
  }
  @media (min-width: 850px) {
    width: 25%;
  }
  @media (min-width: 1000px) {
    width: 18%;
  }
`;
