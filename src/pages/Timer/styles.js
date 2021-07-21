import styled from 'styled-components';
import imgBackground from '../../imgs/background.jpg';

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
/* justify-content:center; */

  width: 100%;
  height: 100vh;
/* background: #4895ef; */
background-image: url(${imgBackground});
background-size: cover;
background-color: #060606;
`;

export const Settings = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center; 

  align-self: flex-start;
  float: left;

  position: relative;

`

export const CountdownContainer = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  margin-top: 100px;
    background-color: ${props => props.negative ? 'rgb(255,102,0, 0.4)' : 'rgb(255,255,255, 0.4)'}  ;
    width: ${props => props.negative ? '100%' : '750px'};
    padding: 50px;
`

export const Button = styled.input`
  border-radius: 4px;
  padding: 15px;
  background: #eee;
  border: 1px solid #eee;
  cursor: pointer;
  margin: 5px;
  transition: background-color 0.3s;

  &:hover{
    background: #0c488d;
    color: #fff;
  }
`
export const Input = styled.input`
  border-radius: 4px;
  padding: 15px;
  background: #fff;
  border: 1px solid #eee;
  max-width: 100px;
`

export const TopTitle = styled.h1`
    font-weight: bold;
`


export const BottomTitle = styled.h1`
    font-weight: bold;
`

export const TimeLeft = styled.span`
  font-weight: bold;
  text-shadow: 2px 2px 2px black;
  font-size: 8rem;
  /* color: ${props => props.negative ? '#ff4d4d' : '#060606'}  */
  color:  #060606;
`