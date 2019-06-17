import React from 'react';
import { Message } from '../../StyledComponent';
import {CommentCard} from './styles'

export default class CommentList extends React.Component{
  render(){
    const {commentList} = this.props;
    if(!commentList || commentList.length === 0){
      return <Message title="No comments yet, be the first to comment"/>
    }

    return <CommentCard comments={commentList}/>
  }

}