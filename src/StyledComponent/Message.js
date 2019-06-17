import React from 'react';
import { SpinnerContainer } from '../Components/styles';
import { Dots } from '.';

class Message extends React.Component{
  render(){
    const {title, showDots} = this.props
    return (
      <SpinnerContainer>
        <div className="card-body">
          <div className="card-text">
            {title}
          </div>
        </div>
        {showDots && <Dots/>}

      </SpinnerContainer>
    )
  }
}

export default Message;