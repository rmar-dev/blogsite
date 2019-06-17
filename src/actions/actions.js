import {requests} from "../agent";
import {
  BLOG_POST_ERROR,
  BLOG_POST_LIST_ADD,
  BLOG_POST_LIST_ERROR,
  BLOG_POST_LIST_RECEIVED,
  BLOG_POST_LIST_REQUEST, BLOG_POST_RECEIVED,
  BLOG_POST_REQUEST,
  BLOG_POST_UNLOAD,
  COMMENT_LIST_ERROR,
  COMMENT_LIST_RECEIVED,
  COMMENT_LIST_REQUEST,
  COMMENT_LIST_UNLOAD,
  USER_LOGIN_SUCCESS,
  USER_PROFILE_REQUEST,
  USER_PROFILE_ERROR,
  USER_PROFILE_RECEIVED,
  USER_SET_ID,
  USER_LOGOUT,
  COMMENT_ADDED,
} from "./constants";

import { SubmissionError } from "redux-form";
import { parseApiErrors } from "../apiUtils";


//------------------Blog post List Actions--------------------//
export const blogPostListRequest = () => ({
  type: BLOG_POST_LIST_REQUEST,
});

export const blogPostListError = (error) => ({
  type: BLOG_POST_LIST_ERROR,
  error
});

export const blogPostListReceived = (data) => ({
  type: BLOG_POST_LIST_RECEIVED,
  data
});

export const blogPostListFetch = () => {
  return (dispatch)=>{
    dispatch(blogPostListRequest());
    return requests.get('/blog_posts')
      .then(res => dispatch(blogPostListReceived(res)))
      .catch(error => dispatch(blogPostListError(error)));
  }
};

export const blogPostAdd = () => ({
  type : BLOG_POST_LIST_ADD,
  data: {
    id: Math.floor(Math.random() * 100 + 3),
    title: ' A newly added blog post'
  }
});
//--------------------------------------------------//
//-----------------Blog post actions---------------//
export const blogPostRequest = () =>({
  type: BLOG_POST_REQUEST,
});

export const blogPostError = (error) => ({
  type: BLOG_POST_ERROR,
  error
});

export const blogPostReceived = (data) => ({
  type: BLOG_POST_RECEIVED,
  data
});

export const blogPostUnload = () => ({
  type: BLOG_POST_UNLOAD,
});

export const blogPostFetch = (id) => {
  return (dispatch) => {
    dispatch(blogPostRequest());
    return requests.get(`/blog_posts/${id}`)
      .then(res => dispatch(blogPostReceived(res)))
      .catch(error => dispatch(blogPostError(error)));
  }
};
//--------------------------------------------------//
//-----------------User actions---------------//

export const userLogout = (redirect = false) =>{
  return {
    type: USER_LOGOUT,
    redirect
  }
}

export const userSetId = (userId) => ({
  type: USER_SET_ID,
  userId
})

export const userProfileRequest = () => ({
  type: USER_PROFILE_REQUEST
})

export const userProfileError = (userId) => ({
  type: USER_PROFILE_ERROR,
  userId
})

export const userProfileReceived = (userId, userData) => ({
  type: USER_PROFILE_RECEIVED,
  userData,
  userId
})

export const userRedirectLogin = () =>{
  return (dispatch) =>{
    dispatch(userLogout(true))
  }
}
export const userProfileFetch = (userId) => {
  return (dispatch) =>{
    dispatch(userProfileRequest());
    return requests.get(`/users/${userId}`, true)
      .then( res =>{
         dispatch(userProfileReceived(userId, res))})
      .catch(error => dispatch(userProfileError(userId)));
  }
}

//--------------------------------------------------//
//-----------------Comments list actions---------------//
export const commentsListRequest = () =>({
  type: COMMENT_LIST_REQUEST,
});

export const commentsListError = (error) => ({
  type: COMMENT_LIST_ERROR,
  error
});

export const commentsListReceived = (data) => ({
  type: COMMENT_LIST_RECEIVED,
  data
});

export const commentsListUnload = () => ({
  type: COMMENT_LIST_UNLOAD,
});


export const commentAdded = (comment) =>({
  type:COMMENT_ADDED,
  comment
});

export const commentAdd = (comment, blogPostId) => {
  return (dispatch) => {
    return requests.post(
      '/comments',
      {
        content: comment,
        blogPost: `/api/blog_posts/${blogPostId}`
      }
    )
    .then(res => dispatch(commentAdded(res)))
    .catch(error => {
      if(401 === error.response.status){
        return dispatch(userLogout(true));
      }
      throw new SubmissionError(parseApiErrors(error));      
    })
  }
}

export const commentsListFetch = (id) => {
  return (dispatch) => {
    dispatch(commentsListRequest());
    return requests.get(`/blog_posts/${id}/comments`)
      .then(res => dispatch(commentsListReceived(res)))
      .catch(error => dispatch(commentsListError(error)));
  }
};


//--------------------------------------------------//
//-----------------Forms actions---------------//

export const userLoginSuccess = (token, userId) => {
  return {
    type: USER_LOGIN_SUCCESS,
    token,
    userId
  }
}

export const userLoginAttempt = (username, password) => {
  return(dispatch)=> {
    return requests.post('/login_check', {username, password}, false)
    .then(res => dispatch(userLoginSuccess(res.token, res.id)))
    .catch(error => {
      throw new SubmissionError({
        _error: "User or passsword is not valid"
      });
    });
  }
  
}

