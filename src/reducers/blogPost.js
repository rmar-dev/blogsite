import { BLOG_POST_ERROR, BLOG_POST_RECEIVED, BLOG_POST_REQUEST, BLOG_POST_UNLOAD } from "../actions/constants";

export default(state={
  isFetching: false,
  post: null
}, action) => {
    switch(action.type){
      case BLOG_POST_ERROR:
        return {
          ...state,
          post:null,
          isFetching: false
        };
      case BLOG_POST_RECEIVED:
        return {
          ...state,
          isFetching: false,
          post: action.data
        };
      case BLOG_POST_REQUEST:
        return{
          ...state,
          isFetching: true,
          post: null
        };
      case BLOG_POST_UNLOAD:
        return{
          ...state,
          isFetching: false,
          post:null
        };
      default:
        return state;
    }
}