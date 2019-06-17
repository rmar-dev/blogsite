import styled from 'styled-components';
import React from 'react';
import {format} from 'timeago.js'
import { Field } from "redux-form";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { renderField } from '../LoginForm/styles';
import "./Comments.css";


const CommentContainer = styled.div.attrs({
  className: "card mb-3 mt-3 shadow-sm"

})``;

const SmallContainer = styled.div.attrs({
  className: "card-body border-bottom"

})``;

const TextCard = styled.p.attrs({
  className: "card-text mb-0"
})``;

const SimpleCardText = styled.p.attrs({
  className: "card-text"
})``;


const SmallText = styled.small.attrs({
  className: "text-muted"
})``;

class CommentCard extends React.Component {
  render(){
    const {comments} = this.props;
    return(
      <CommentContainer>
        <TransitionGroup >
            {comments && comments.length > 0 && comments.map((comment) => {
              return(
                <CSSTransition key={comment.id} timeout={1000} classNames="fade">
                    <SmallContainer  >
                    <TextCard>
                      {comment.content}
                    </TextCard>
                    <SimpleCardText>
                      <SmallText> 
                        {format(comment.published)} by&nbsp;
                        {comment.author.name}
                      </SmallText>
                    </SimpleCardText>
                  </SmallContainer>
                </CSSTransition>
              );
            })}
        </TransitionGroup>
      </CommentContainer>
    )
  }
}

class CommentFormCard extends React.Component{
  render(){
    const {fields, buttonLabel, handleSubmit, submitting}= this.props;
    return (
      <CommentContainer>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {fields && fields.map((field, key)=>{
              return <Field key={key} label ={field.label} name={field.name} type={field.type} component={renderField}/>
            })}
            <button disabled={submitting} type="submit" className="btn btn-primary btn-big btn-block">{buttonLabel}</button>
          </form>
        </div>
      </CommentContainer>
    )
  }
}

export {CommentCard, CommentFormCard}; 