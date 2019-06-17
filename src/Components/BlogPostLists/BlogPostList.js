import React from 'react';
import { CardContainer, Message } from '../../StyledComponent';

class BlogPostList extends  React.Component{
  
  render() 
  {
    const {posts} = this.props;

      if(posts === null || posts.length === 0){
        return <Message title="No post are avaiable"/>
      }

      return (<div> 
          {posts && posts.map(post => (
            <CardContainer  key={post.id} cardType="typeOne" theme={"white"} post={post} link="/blog-post/"/>)
          )}
        </div>)
        
        
      }
    }
    
    export default BlogPostList;