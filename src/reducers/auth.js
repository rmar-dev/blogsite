import { USER_LOGIN_SUCCESS, USER_PROFILE_RECEIVED, USER_SET_ID, USER_LOGOUT } from "../actions/constants";

export default(state ={
  token: null,
  userId: null,
  isAuthenticated: false,
  userData: null,
  redirect: false
}, action) => {
  switch(action.type){
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        isAuthenticated: true,
        redirect: action.redirect
      };
    case USER_SET_ID:
      return {
        ...state,
        userId: action.userId,
        isAuthenticated: true,
        redirect: action.redirect

      }
    case USER_LOGOUT:
      return{
        ...state,
        userId: null,
        userData: null,
        token: null,
        isAuthenticated: false,
        redirect: action.redirect
      }
    case USER_PROFILE_RECEIVED:
      return{
        ...state,
        redirect: action.redirect,
        userData: (state.userId === action.userId && state.userData === null) ? action.userData : state.userData,
        isAuthenticated: (state.userId === action.userId && state.userData === null),
      }
    default:
      return state;
  }
}