import React from "react";
import { reduxForm} from "redux-form";
import { connect } from "react-redux";
import { CommentFormCard } from "./styles";
import { commentAdd } from "../../actions/actions";

//const sleep = ms => new Promise(res => setTimeout(res, ms));

const mapDispatchToProps = {
  commentAdd,
};


class CommentForm extends React.Component {
  onSubmit(values){
    const {commentAdd, blogPostId, reset} = this.props;
    return commentAdd(values.content, blogPostId).then(()=>reset());
  }
  render(){
    const fields = [
      {
        name:"content",
        type:"textarea",
        label:"Type your comment:"
      }
    ]
    const {handleSubmit, submitting} = this.props;
    return (<CommentFormCard 
      submitting={submitting}
      handleSubmit={handleSubmit(this.onSubmit.bind(this))}
      buttonLabel="Add Comment" 
      fields={fields}/>)
  }
}

export default reduxForm({
  form:'CommentForm'
})(connect(null, mapDispatchToProps)(CommentForm))