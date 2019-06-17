import styled from "styled-components";
import React from "react";
import {format} from "timeago.js";
import {Link} from "react-router-dom";


const dark = {
  background: "black",
  color:"white"

};
const normal = {
  background: "white",
  color:"black"
};


const Container = styled.div.attrs({
  className:'card mb-3 mt-3 shadow-sm'
})`
  background-color: ${props=> (props.extra && props.extra.backgroundColor) ? props.extra.backgroundColor : (props.theme? props.theme.background : "white")};
  color: ${props => (props.extra && props.extra.color)? props.extra.color: (props.theme? props.theme.color : "white" )};
`;

const Wrapper = styled.div.attrs({
  className:"card-body"
})``;
const TextParagraph = styled.p.attrs({
  className:'card-text bordet-top'
})`

`;

const SimpleText = styled.p.attrs({
  className:'card-text'
})`

`;

const H3Styled = styled.h3`
    color: ${props => (props.extra && props.extra.color)? props.extra.color: (props.theme? props.theme.color : "white" )};
`;

const SmallText = styled.small.attrs({
  className:"text-muted"
})`
`;

const getThemeFromList = (theme) =>{
  switch(theme){
    case "dark":
      return dark;
    default:
      return normal;
  }
}



export default class CardContainer extends React.Component {
  render(){
    const {theme, extra, post, link, cardType} = this.props;
    const selectedTheme = getThemeFromList(theme)
    if(!post || !post.id || !post.title){
      return<TextParagraph>No post found</TextParagraph>
    }

    if(post && post.published && post.title && cardType ==="typeOne") {
      return (
        <Container theme={selectedTheme} extra={extra}>
          <Wrapper>
            <H3Styled>
              <Link to ={link + post.id}>
               {post.title}
               </Link>
            </H3Styled>
            <TextParagraph>
              <SmallText>{format(post.published)}</SmallText>
            </TextParagraph>
          </Wrapper> 
        </Container>
      );
    }

    if(cardType === "typeTwo" && post && post.title && post.content){
      return (
        <Container theme={selectedTheme} extra ={extra}>
          <Wrapper>
            <h2>{post.title}</h2>
            <SimpleText>{post.content}</SimpleText>
            <TextParagraph>
              <SmallText>
                {format(post.published)} by&nbsp;
                {post.author.name}
              </SmallText>
            </TextParagraph>
          </Wrapper>
        </Container>
      )
    }
    
    return<TextParagraph>Not a valid format</TextParagraph>
  }
  
}
