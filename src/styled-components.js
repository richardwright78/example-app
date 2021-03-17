import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, Helvetia, sans-serif;
  }
` 

const Button = styled.button`
  width: 240px;
  cursor: pointer;
  background: #900FF4;
  color: white;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem 0;
  border: none;
  &:hover {
    background: #460876
  }
  font-family: Arial, helvetica, sans-serif;
  font-size: 16px;
  ${({ disabled }) => disabled && `
    background: #bbb;
    cursor: not-allowed;
    &:hover {
      background: #bbb;
    }    
  `} 
`;

export { GlobalStyle, Button }