import React from 'react';
import { SpinnerContainer} from "../Components/styles";
import { Dots } from '.';

class SpinnerBox extends React.Component{
  render(){
    return(
      <SpinnerContainer> 
        <div className="card-body">
          <Dots/>
        </div>
      </SpinnerContainer>
    )
  }
}

export default SpinnerBox;