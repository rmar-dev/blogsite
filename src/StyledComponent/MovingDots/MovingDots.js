import React from 'react';
import styled from 'styled-components';
import "./MovingDots.css";


export const Progress = styled.div.attrs({
  className:"progress"
})`
  display: flex;
  align-items: center;
  height: 30px;
  width:100px;
  background-color: rgba(0,0,0,0);
  justify-content: center;
`;

export default class MovingDots extends React.Component{
  render(){
    return(
      <Progress>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </Progress>
    )
  }
}