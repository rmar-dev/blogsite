import styled from 'styled-components';

export const Container = styled.div.attrs({
  className: "container"
})``;

export const CenterContainer = styled.div.attrs({
  className: "container"
})`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SpinnerContainer = styled.div.attrs({
  className:"card mb-3 mt-3"
})` 
  align-items: center;
  justify-content: center;
  border: none !important;
`;

export const Spinner = styled.i.attrs({
  className: "fas fa-spinner fa-spin"
})``;

