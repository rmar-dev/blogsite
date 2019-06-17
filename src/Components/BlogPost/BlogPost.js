import React from "react";
import { CardContainer, Message } from "../../StyledComponent";

export default class BlogPost extends React.Component{
  render(){
    const {post} = this.props;
  
    if(post === null){
      return (<Message title="Post not found!!"/>)
    }
    return <CardContainer cardType="typeTwo" post={post} />
  }
}