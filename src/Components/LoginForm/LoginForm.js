import React from 'react';
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { Container, Form, renderField, SubmitForm } from "./styles";
import { userLoginAttempt } from "../../actions/actions";

const mapStateToProps = state => ({
  ...state.auth
})

const mapDispatchToProps = {
  userLoginAttempt
};

class LoginForm extends  React.Component{
  componentDidUpdate(prevProps){
    if(prevProps.token !== this.props.token){
      this.props.history.goBack();
    }
  }
    onSubmit(values){
      return this.props.userLoginAttempt(
        values.username,
        values.password
      );
    }
    render() {
      const {handleSubmit, error} = this.props;
        return (
          <Container>
            {error && <div className="alert alert-danger">{error}</div>}
            <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <Field name="username" label ="Username" type ="text" component={renderField} />
              <Field name="password" label = "Password" type="password" component={renderField}/>
              <SubmitForm type="submit">Login</SubmitForm>
            </Form>
          </Container>
        )
    }
}

export default reduxForm({
  form: 'LoginForm'
})(connect(mapStateToProps, mapDispatchToProps)(LoginForm));