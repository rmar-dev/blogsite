import {
  BLOG_POST_LIST_ADD,
  BLOG_POST_LIST_ERROR,
  BLOG_POST_LIST_RECEIVED,
  BLOG_POST_LIST_REQUEST
} from "../actions/constants";

export default(state = {
  posts: null,
  isFetching: false
}, action) => {
  switch (action.type) {
    case BLOG_POST_LIST_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case BLOG_POST_LIST_RECEIVED:
      return {
        ...state,
        isFetching: false,
        posts: action.data['hydra:member']
      };
    case BLOG_POST_LIST_ERROR:
      return{
        ...state,
        isFetching: false,
        posts: null
      };
    case BLOG_POST_LIST_ADD:
      return {
        ...state,
        posts: state.posts ? state.posts.concat(action.data): state.posts,
        isFetching: false
      };
    default:
      return state;


  }
}