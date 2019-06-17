import {combineReducers} from "redux";
import {blogPostList, blogPost, commentsList, auth} from "./reducers";
import { reducer as formReducer } from "redux-form";
import { routerReducer } from "react-router-redux";

export default combineReducers({
  blogPostList,
  blogPost,
  commentsList,
  auth,
  router: routerReducer,
  form: formReducer
});