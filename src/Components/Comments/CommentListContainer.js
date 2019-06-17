import React from 'react';
import CommentList from './CommentsList';
import {commentsListFetch, commentsListUnload} from '../../actions/actions';
import { connect } from "react-redux";
import { Message } from '../../StyledComponent';
import CommentForm from "./CommentForm";

const mapeStateToProps = state => ({
  ...state.commentsList,
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = {
  commentsListFetch,
  commentsListUnload
};

class CommentListContainer extends React.Component{
  componentDidMount(){
    this.props.commentsListFetch(this.props.blogPostId);
  }

  render(){
    const {isFetching, commentList, isAuthenticated, blogPostId} = this.props;
    if(isFetching) return  <Message showDots={true} title="looking for comments"/>
    return(
        <div>
          <CommentList commentList={commentList}/>
          {isAuthenticated && <CommentForm blogPostId={blogPostId}/>}
        </div>
       )
  }

}

export default connect(mapeStateToProps, mapDispatchToProps)(CommentListContainer);