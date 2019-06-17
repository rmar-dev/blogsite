import React from 'react';
import { Link } from "react-router-dom";
import * as Styles from './styles'
import { Dots} from '../../StyledComponent';

export default class Headers extends React.Component {
  renderUser(){
    const {userData, logout} = this.props;
    if(!userData){
      return <Dots/>
    }

    return(
      <Styles.TextSpan>
          Hello {userData.name}, &nbsp;
          <button className="btn btn-link btn-sm" href="#" onClick={logout}>Logout</button>
      </Styles.TextSpan>
    ) 
  }
    render(){
      const {isAuthenticated} = this.props
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">
                    React Blog
                </Link>
                {isAuthenticated ? this.renderUser() : <Link to="/login">Sign-in</Link>}

            </nav>
        )
    };
}
