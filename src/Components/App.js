import React from 'react';
import {Route, Switch} from "react-router";
import LoginForm from "./LoginForm/LoginForm";
import BlogPostListContainer from "./BlogPostLists/BlogPostListContainer";
import BlogPostContainer from "./BlogPost/BlogPostContainer";
import Headers from "../Components/Headers/Headers";
import { requests } from '../agent';
import { connect } from "react-redux";
import { userProfileFetch, userSetId, userLogout} from "../actions/actions";

const mapStateToProps = state =>({
  ...state.auth
});

const mapDispatchToProps = {
  userProfileFetch,
  userSetId,
  userLogout
}

class App extends React.Component{
constructor(props){
  super(props);
  const token = window.localStorage.getItem('jwtToken');

  if(token){
    requests.setToken(token);
  }

}

componentDidMount(){
  const userId = window.localStorage.getItem('userId');

  const {userSetId} = this.props;

  if(userId){
    userSetId(userId);
  }
}

componentDidUpdate(prevProps){
  const {userId, redirect, userProfileFetch, history} = this.props;

  if(prevProps.redirect !== redirect && redirect){
    history.push("/login")
  }

  if(userId && userId !== prevProps.userId){
    userProfileFetch(userId);
  }
}

  render() {
    const {isAuthenticated, userData, userLogout} = this.props;
    return (
      <div> 
        <Headers isAuthenticated={isAuthenticated} userData={userData} logout={userLogout} />
        <Switch>
          <Route path={"/login"} render={props => <LoginForm {...props} />}/>
          <Route path={"/blog-post/:id"} component={BlogPostContainer} />
          <Route path={"/"} component={BlogPostListContainer} />

        </Switch>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);