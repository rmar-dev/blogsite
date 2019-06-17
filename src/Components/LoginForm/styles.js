import React from 'react';
import styled from "styled-components";
import classNames from "classnames";

export const Container = styled.div.attrs({
  className: "text-center"
})``;

export const Form = styled.form.attrs({
  className: "mt-4"
})``;

export const FormGroup = styled.div.attrs({
  className:"form-group"
})``;

export const SubmitForm = styled.button.attrs({
  className:"btn btn-primary btn-big btn-block"
})`
  
`;

export const renderField = ({input, label, type, meta:{error}}) => {
  const classes = classNames(
    'form-control',
    {
      'is-invalid': error
    }
  )
  return(
    <FormGroup>
      {label && label !=="" && <label>{label}</label>}
      {type ==='textarea' &&  <textarea {...input} className={classes}/>}
      {type !=='textarea' &&  <input {...input} type={type} className={classes}/>}
      {error && <small className="form-text text-danger">{error}</small>}
    </FormGroup>
  );
};