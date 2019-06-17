import React from "react";
import { blogPostFetch, blogPostUnload } from "../../actions/actions";
import { connect } from "react-redux";
import BlogPost from "./BlogPost";
import { SpinnerBox } from "../../StyledComponent";
import CommentListContainer from "../Comments/CommentListContainer";

const mapeStateToProps = state => ({
  ...state.blogPost
});

const mapDispatchToProps = {
  blogPostFetch,
  blogPostUnload
};
class BlogPostContainer extends React.Component {
  componentDidMount(){
    this.props.blogPostFetch(this.props.match.params.id);
  }
  componentWillUnmount(){
    this.props.blogPostUnload();
  } 
  render(){
    const {isFetching, post} = this.props

    if(isFetching) return <SpinnerBox/>
    return(
      <div>
        <BlogPost post={post}/>
        {post && <CommentListContainer blogPostId={this.props.match.params.id}/>} 
      </div>
    )
  }
}

export default connect(mapeStateToProps, mapDispatchToProps)(BlogPostContainer)