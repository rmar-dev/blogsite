import React from 'react';
import BlogPostList from "./BlogPostList";
import { blogPostAdd, blogPostListFetch} from "../../actions/actions";
import {connect} from "react-redux";
import { SpinnerBox } from '../../StyledComponent';

const mapStateToProps = state => ({
	...state.blogPostList
});

const mapDispatchToProps = {
	blogPostAdd,
	blogPostListFetch
};

class BlogPostListContainer extends  React.Component{
	componentDidMount() {
		this.props.blogPostListFetch();
	}

	render() {
    const {posts, isFetching} = this.props;
    if(isFetching) return <SpinnerBox/>
		return (<BlogPostList posts={posts}/>)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostListContainer);