import styled from "styled-components";
export const Container = styled.article`
  max-width: 100vw;
  min-height: 100vh;
  background-color: gray;background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(46,66,65,0.014443277310924318) 0%, rgba(18,4,23,1) 0%, rgba(32,19,131,1) 0%, rgba(141,235,212,1) 0%, rgba(70,146,170,1) 51%, rgba(137,170,231,1) 100%, rgba(113,49,20,1) 100%); display: flex;
  align-items: center;
  flex-direction: column;

  header{
    width:100%;
    height:8vh;
    background-color:darkblue;
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    font-size:30px;
    font-weight:800;
    margin-bottom:3%;
  }
  div#form {
    height:300px;
    background-color: blue;
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
    border-radius: 10px;
    padding: 1%;
    margin-bottom: 2%;
    margin-top
  }

  div#cards {
    width: 90%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  button{
    padding:5px;
    border:0;
    border-radius:4px;
    background-color:darkblue;
    color:white;
    cursor:pointer;
    :active{
      background-color:yellow;
    }
  }
`;
